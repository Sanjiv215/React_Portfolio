import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import "./Activity.css";

const GITHUB_USERNAME = "Sanjiv215";

// ─── Utilities ────────────────────────────────────────────────────────────────

function fmt(value) {
  if (value === null || value === undefined) return "--";
  return new Intl.NumberFormat("en-IN").format(Math.round(value));
}

function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  if (diff < 60)    return `${Math.floor(diff)}s ago`;
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function getEventMeta(event) {
  const repo = event.repo?.name || "";
  switch (event.type) {
    case "PushEvent":
      return { icon: "↑", label: `Pushed ${event.payload?.commits?.length || 1} commit(s)`, color: "var(--c-blue)", repo };
    case "PullRequestEvent":
      return { icon: "⇄", label: `PR ${event.payload?.action}`, color: "var(--c-violet)", repo };
    case "IssuesEvent":
      return { icon: "○", label: `Issue ${event.payload?.action}`, color: "var(--c-green)", repo };
    case "WatchEvent":
      return { icon: "✦", label: "Starred", color: "var(--c-amber)", repo };
    case "ForkEvent":
      return { icon: "⑂", label: "Forked", color: "var(--c-pink)", repo };
    case "CreateEvent":
      return { icon: "+", label: `Created ${event.payload?.ref_type || "ref"}`, color: "var(--c-teal)", repo };
    case "IssueCommentEvent":
      return { icon: "›", label: "Commented", color: "var(--c-muted)", repo };
    default:
      return { icon: "·", label: event.type.replace("Event", ""), color: "var(--c-muted)", repo };
  }
}

// ─── Data builders ────────────────────────────────────────────────────────────

function buildHeatmap(events) {
  const map = new Map();
  events.forEach((e) => {
    const key = new Date(e.created_at).toISOString().slice(0, 10);
    const w = e.type === "PushEvent" ? Math.max(e.payload?.commits?.length || 0, 1) : 1;
    map.set(key, (map.get(key) || 0) + w);
  });
  const today = new Date();
  return Array.from({ length: 364 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (363 - i));
    const key = d.toISOString().slice(0, 10);
    const count = map.get(key) || 0;
    let level = 0;
    if (count >= 8) level = 4;
    else if (count >= 5) level = 3;
    else if (count >= 3) level = 2;
    else if (count >= 1) level = 1;
    return { key, count, level };
  });
}

function buildStreak(events) {
  const days = new Set(events.map((e) => new Date(e.created_at).toISOString().slice(0, 10)));
  let streak = 0;
  const cur = new Date();
  for (let i = 0; i < 90; i++) {
    if (!days.has(cur.toISOString().slice(0, 10))) break;
    streak++;
    cur.setDate(cur.getDate() - 1);
  }
  return streak;
}

function buildLanguages(repos) {
  const map = {};
  repos.forEach((r) => { if (r.language) map[r.language] = (map[r.language] || 0) + 1; });
  const total = Object.values(map).reduce((a, b) => a + b, 0);
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([lang, count]) => ({ lang, pct: Math.round((count / total) * 100) }));
}

const LANG_COLORS = {
  JavaScript: "#f7df1e", TypeScript: "#3178c6", Python: "#4584b6",
  HTML: "#e34c26", CSS: "#264de4", C: "#6e6e6e", "C++": "#f34b7d",
  Java: "#b07219", Rust: "#ce422b", Go: "#00ADD8", default: "#38bdf8",
};

// ─── Count-up hook ────────────────────────────────────────────────────────────

function useCountUp(target, delay = 0) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!target) return;
    let raf, start = null;
    const t = setTimeout(() => {
      raf = requestAnimationFrame(function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1100, 1);
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) raf = requestAnimationFrame(step);
      });
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [target, delay]);
  return val;
}

// ─── StatCard ─────────────────────────────────────────────────────────────────

function StatCard({ label, value, delay, accent }) {
  const display = useCountUp(typeof value === "number" ? value : 0, delay);
  return (
    <div className="sc" style={{ "--accent": accent }}>
      <span className="sc-val">{typeof value === "number" ? fmt(display) : value}</span>
      <span className="sc-label">{label}</span>
      <div className="sc-bar" />
    </div>
  );
}

// ─── Heatmap ──────────────────────────────────────────────────────────────────

function Heatmap({ cells }) {
  const [hovered, setHovered] = useState(null);

  const weeks = useMemo(() => {
    const w = [];
    for (let i = 0; i < cells.length; i += 7) w.push(cells.slice(i, i + 7));
    return w;
  }, [cells]);

  return (
    <div className="hm">
      <div className="hm-scroll">
        <div className="hm-grid">
          {weeks.map((week, wi) => (
            <div key={wi} className="hm-week">
              {week.map((day) => (
                <div
                  key={day.key}
                  className={`hm-cell lv-${day.level}`}
                  onMouseEnter={() => setHovered(day)}
                  onMouseLeave={() => setHovered(null)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="hm-footer">
        <div className="hm-legend">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <div key={l} className={`hm-cell lv-${l} no-hover`} />
          ))}
          <span>More</span>
        </div>
        <div className={`hm-tip ${hovered ? "hm-tip--active" : ""}`}>
          {hovered
            ? <><strong>{hovered.count}</strong> contribution{hovered.count !== 1 ? "s" : ""} · {hovered.key}</>
            : "Hover to inspect"}
        </div>
      </div>
    </div>
  );
}

// ─── Language bar ─────────────────────────────────────────────────────────────

function LangBar({ languages }) {
  return (
    <div className="lb">
      <div className="lb-track">
        {languages.map(({ lang, pct }) => (
          <div
            key={lang}
            className="lb-seg"
            style={{ width: `${pct}%`, background: LANG_COLORS[lang] || LANG_COLORS.default }}
            title={`${lang} · ${pct}%`}
          />
        ))}
      </div>
      <div className="lb-pills">
        {languages.map(({ lang, pct }) => (
          <div key={lang} className="lb-pill">
            <span className="lb-dot" style={{ background: LANG_COLORS[lang] || LANG_COLORS.default }} />
            <span className="lb-name">{lang}</span>
            <span className="lb-pct">{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feed item ────────────────────────────────────────────────────────────────

function FeedItem({ event, index }) {
  const { icon, label, color, repo } = getEventMeta(event);
  const short = repo.split("/")[1] || repo;
  return (
    <div className="fi" style={{ "--fc": color, animationDelay: `${index * 50}ms` }}>
      <span className="fi-icon" style={{ color }}>{icon}</span>
      <div className="fi-body">
        <span className="fi-label">{label}</span>
        <a
          className="fi-repo"
          href={`https://github.com/${repo}`}
          target="_blank"
          rel="noreferrer"
        >
          {short}
        </a>
      </div>
      <span className="fi-time">{timeAgo(event.created_at)}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Activity() {
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const [profile, setProfile] = useState(null);
  const [events, setEvents]   = useState([]);
  const [repos, setRepos]     = useState([]);
  const [prs, setPrs]         = useState(0);

  const fetchAll = useCallback(async () => {
    const [evRes, profRes, prRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetch(`https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
    ]);
    if (!profRes.ok) throw new Error(`GitHub API ${profRes.status}`);
    const [evData, profData, prData, repoData] = await Promise.all([
      evRes.json(), profRes.json(), prRes.json(), repoRes.json(),
    ]);
    setEvents(Array.isArray(evData) ? evData : []);
    setProfile(profData);
    setPrs(prData.total_count || 0);
    setRepos(Array.isArray(repoData) ? repoData : []);
  }, []);

  useEffect(() => {
    (async () => {
      try { await fetchAll(); }
      catch (e) { setError(e.message); }
      finally   { setLoading(false); }
    })();
  }, [fetchAll]);

  const heatmap   = useMemo(() => buildHeatmap(events), [events]);
  const streak    = useMemo(() => buildStreak(events), [events]);
  const languages = useMemo(() => buildLanguages(repos), [repos]);

  const commits = useMemo(
    () => events.filter((e) => e.type === "PushEvent")
                .reduce((t, e) => t + (e.payload?.commits?.length || 0), 0),
    [events]
  );
  const totalStars = useMemo(
    () => repos.reduce((t, r) => t + (r.stargazers_count || 0), 0),
    [repos]
  );

  if (loading) {
    return (
      <div className="act-loading">
        <div className="act-spinner" />
      </div>
    );
  }

  return (
    <section className="act">
      <div className="act-shell">

        {/* ── Header ── */}
        <header className="act-header">
          <div className="act-eyebrow">GitHub Activity</div>
          <h2 className="act-title">Code. Commit. Repeat.</h2>
          {profile && (
            <a
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
              className="act-profile-link"
            >
              <img src={profile.avatar_url} alt={profile.login} className="act-avatar" />
              <div className="act-profile-text">
                <span className="act-profile-name">{profile.name || profile.login}</span>
                <span className="act-profile-handle">@{profile.login}</span>
              </div>
              <span className="act-profile-arrow">↗</span>
            </a>
          )}
        </header>

        {error && <p className="act-error">⚠ {error}</p>}

        {/* ── Stats row — 6 equal columns ── */}
        <div className="sc-row">
          <StatCard label="Commits"       value={commits}                  delay={0}   accent="var(--c-blue)"   />
          <StatCard label="Repositories"  value={profile?.public_repos||0} delay={80}  accent="var(--c-violet)" />
          <StatCard label="Pull Requests" value={prs}                      delay={160} accent="var(--c-green)"  />
          <StatCard label="Stars Earned"  value={totalStars}               delay={240} accent="var(--c-amber)"  />
          <StatCard label="Followers"     value={profile?.followers||0}    delay={320} accent="var(--c-pink)"   />
          <StatCard label="Day Streak"    value={streak}                   delay={400} accent="var(--c-teal)"   />
        </div>

        {/* ── Body — two perfectly equal columns ── */}
        <div className="act-body">

          {/* Left — contribution heatmap */}
          <div className="panel act-col">
            <div className="panel-head">
              <span className="panel-title">Contributions</span>
              <span className="panel-sub">Last 52 weeks</span>
            </div>
            <Heatmap cells={heatmap} />

            {languages.length > 0 && (
              <>
                <div className="divider" />
                <p className="panel-title" style={{ marginBottom: 14 }}>Top Languages</p>
                <LangBar languages={languages} />
              </>
            )}
          </div>

          {/* Right — activity feed, same height as left */}
          <div className="panel act-col feed-panel">
            <div className="panel-head">
              <span className="panel-title">Activity Feed</span>
              <span className="panel-dot" />
            </div>
            <div className="feed">
              {events.slice(0, 12).length > 0
                ? events.slice(0, 12).map((ev, i) => (
                    <FeedItem key={ev.id} event={ev} index={i} />
                  ))
                : <p className="feed-empty">No recent public events.</p>
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}