import React, { useEffect, useMemo, useState } from "react";
import "./Activity.css";
import { FaCodeBranch, FaFire, FaGithub, FaLaptopCode, FaCodePullRequest } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const GITHUB_USERNAME = "Sanjiv215";
const LEETCODE_USERNAME = "Sanjiv215";

const githubContributionQuery = `
  query githubActivity($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      followers {
        totalCount
      }
      repositories(ownerAffiliations: OWNER, privacy: PUBLIC, isFork: false) {
        totalCount
      }
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalPullRequestContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const leetCodeQuery = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      profile {
        ranking
        userAvatar
        realName
        reputation
      }
      badges {
        id
        displayName
        icon
      }
    }
    userContestRanking(username: $username) {
      rating
      globalRanking
      attendedContestsCount
      topPercentage
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

function formatCompact(value) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "--";
  }

  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

function buildGithubHeatmap(events) {
  const today = new Date();
  const days = 35;
  const eventMap = new Map();

  events.forEach((event) => {
    const key = new Date(event.created_at).toISOString().slice(0, 10);
    const weight = event.type === "PushEvent"
      ? Math.max(event.payload?.commits?.length || 0, 1)
      : 1;

    eventMap.set(key, (eventMap.get(key) || 0) + weight);
  });

  return Array.from({ length: days }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (days - index - 1));

    const key = date.toISOString().slice(0, 10);
    const count = eventMap.get(key) || 0;

    let level = 0;

    if (count >= 5) level = 4;
    else if (count >= 3) level = 3;
    else if (count >= 2) level = 2;
    else if (count >= 1) level = 1;

    return {
      key,
      count,
      level,
    };
  });
}

function buildGithubHeatmapFromCalendar(weeks) {
  const flattenedDays = weeks
    .flatMap((week) => week.contributionDays)
    .slice(-35);

  return flattenedDays.map((day) => {
    const levelMap = {
      NONE: 0,
      FIRST_QUARTILE: 1,
      SECOND_QUARTILE: 2,
      THIRD_QUARTILE: 3,
      FOURTH_QUARTILE: 4,
    };

    return {
      key: day.date,
      count: day.contributionCount,
      level: levelMap[day.contributionLevel] ?? 0,
    };
  });
}

function buildPublicStreak(events) {
  const activeDays = new Set(
    events.map((event) => new Date(event.created_at).toISOString().slice(0, 10))
  );

  let streak = 0;
  const cursor = new Date();

  for (let i = 0; i < 60; i += 1) {
    const key = cursor.toISOString().slice(0, 10);

    if (!activeDays.has(key)) {
      break;
    }

    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function buildContributionStreak(weeks) {
  const contributionDays = weeks
    .flatMap((week) => week.contributionDays)
    .filter((day) => day.contributionCount > 0)
    .map((day) => day.date);

  const activeDays = new Set(contributionDays);
  let streak = 0;
  const cursor = new Date();

  for (let i = 0; i < 370; i += 1) {
    const key = cursor.toISOString().slice(0, 10);

    if (!activeDays.has(key)) {
      break;
    }

    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function buildLeetCodeStats(payload) {
  const stats = payload?.matchedUser?.submitStatsGlobal?.acSubmissionNum || [];
  const totals = payload?.allQuestionsCount || [];
  const contest = payload?.userContestRanking || null;

  const byDifficulty = stats.reduce((accumulator, item) => {
    accumulator[item.difficulty] = item.count;
    return accumulator;
  }, {});

  const totalsByDifficulty = totals.reduce((accumulator, item) => {
    accumulator[item.difficulty] = item.count;
    return accumulator;
  }, {});

  const solvedTotal = byDifficulty.All || 0;
  const totalQuestions = totalsByDifficulty.All || 0;
  const solveRate = totalQuestions > 0
    ? Math.round((solvedTotal / totalQuestions) * 100)
    : 0;

  return {
    solvedTotal,
    easy: byDifficulty.Easy || 0,
    medium: byDifficulty.Medium || 0,
    hard: byDifficulty.Hard || 0,
    totalQuestions,
    solveRate,
    contestRating: contest?.rating ? Math.round(contest.rating) : null,
    contestRank: contest?.globalRanking || null,
    contestCount: contest?.attendedContestsCount || 0,
    badges: payload?.matchedUser?.badges?.length || 0,
  };
}

function Activity() {
  const [githubData, setGithubData] = useState({
    loading: true,
    error: "",
    profile: null,
    pullRequests: 0,
    recentCommits: 0,
    streak: 0,
    heatmap: [],
    commitLabel: "Recent public commits",
    streakLabel: "Public streak days",
    periodLabel: "Last 35 days",
  });

  const [leetcodeData, setLeetcodeData] = useState({
    loading: true,
    error: "",
    stats: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadGithub() {
      try {
        const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

        if (githubToken) {
          const now = new Date();
          const yearAgo = new Date(now);
          yearAgo.setFullYear(now.getFullYear() - 1);

          const graphResponse = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${githubToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query: githubContributionQuery,
              variables: {
                login: GITHUB_USERNAME,
                from: yearAgo.toISOString(),
                to: now.toISOString(),
              },
            }),
          });

          if (!graphResponse.ok) {
            throw new Error("GitHub GraphQL stats could not be loaded.");
          }

          const graphPayload = await graphResponse.json();
          const githubUser = graphPayload?.data?.user;
          const calendarWeeks = githubUser?.contributionsCollection?.contributionCalendar?.weeks || [];

          if (graphPayload.errors || !githubUser) {
            throw new Error("GitHub GraphQL stats could not be loaded.");
          }

          if (!isMounted) {
            return;
          }

          setGithubData({
            loading: false,
            error: "",
            profile: {
              public_repos: githubUser.repositories.totalCount,
              followers: githubUser.followers.totalCount,
            },
            pullRequests: githubUser.contributionsCollection.totalPullRequestContributions || 0,
            recentCommits: githubUser.contributionsCollection.totalCommitContributions || 0,
            streak: buildContributionStreak(calendarWeeks),
            heatmap: buildGithubHeatmapFromCalendar(calendarWeeks),
            commitLabel: "Last 12 months commits",
            streakLabel: "Contribution streak",
            periodLabel: "Last 35 contribution days",
          });

          return;
        }

        const headers = {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        };

        const [profileResponse, prResponse, eventsResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }),
          fetch(
            `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr`,
            { headers }
          ),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`, {
            headers,
          }),
        ]);

        if (!profileResponse.ok || !prResponse.ok || !eventsResponse.ok) {
          throw new Error("GitHub stats could not be loaded.");
        }

        const [profile, pullRequests, events] = await Promise.all([
          profileResponse.json(),
          prResponse.json(),
          eventsResponse.json(),
        ]);

        const recentCommits = events
          .filter((event) => event.type === "PushEvent")
          .reduce((total, event) => total + (event.payload?.commits?.length || 0), 0);

        if (!isMounted) {
          return;
        }

        setGithubData({
          loading: false,
          error: "",
          profile,
          pullRequests: pullRequests.total_count || 0,
          recentCommits,
          streak: buildPublicStreak(events),
          heatmap: buildGithubHeatmap(events),
          commitLabel: "Recent public commits",
          streakLabel: "Public streak days",
          periodLabel: "Last 35 public activity days",
        });
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setGithubData({
          loading: false,
          error: "GitHub activity is temporarily unavailable.",
          profile: null,
          pullRequests: 0,
          recentCommits: 0,
          streak: 0,
          heatmap: [],
          commitLabel: "GitHub commits",
          streakLabel: "Streak",
          periodLabel: "Recent activity",
        });
      }
    }

    async function loadLeetCode() {
      try {
        const response = await fetch("https://leetcode.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: leetCodeQuery,
            variables: { username: LEETCODE_USERNAME },
          }),
        });

        if (!response.ok) {
          throw new Error("LeetCode request failed.");
        }

        const payload = await response.json();

        if (payload.errors || !payload.data?.matchedUser) {
          throw new Error("LeetCode stats are not public.");
        }

        if (!isMounted) {
          return;
        }

        setLeetcodeData({
          loading: false,
          error: "",
          stats: buildLeetCodeStats(payload.data),
        });
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setLeetcodeData({
          loading: false,
          error: "LeetCode stats are temporarily unavailable.",
          stats: null,
        });
      }
    }

    loadGithub();
    loadLeetCode();

    return () => {
      isMounted = false;
    };
  }, []);

  const progressDegrees = useMemo(() => {
    const solveRate = leetcodeData.stats?.solveRate || 0;
    return `${Math.min(Math.max(solveRate, 0), 100) * 3.6}deg`;
  }, [leetcodeData.stats]);

  return (
    <section className="activity-section" id="activity">
      <div className="activity-shell">
        <p className="activity-kicker">Live developer snapshot</p>
        <h2 className="activity-title">My Activity</h2>
        <p className="activity-subtitle">
          Public GitHub momentum and LeetCode problem-solving stats, refreshed from
          live profile data.
        </p>

        <div className="activity-grid">
          <article className="activity-card github-card">
            <div className="activity-card-head">
              <div className="activity-icon github-icon">
                <FaGithub />
              </div>
              <div>
                <p className="activity-label">GitHub</p>
                <h3>@{GITHUB_USERNAME}</h3>
              </div>
            </div>

            {githubData.loading ? (
              <p className="activity-status">Loading GitHub activity...</p>
            ) : githubData.error ? (
              <p className="activity-status error-text">{githubData.error}</p>
            ) : (
              <>
                <div className="stat-grid">
                  <div className="stat-chip">
                    <span className="chip-icon"><FaCodeBranch /></span>
                    <div>
                      <strong>{formatCompact(githubData.recentCommits)}</strong>
                      <p>{githubData.commitLabel}</p>
                    </div>
                  </div>

                  <div className="stat-chip">
                    <span className="chip-icon"><FaCodePullRequest /></span>
                    <div>
                      <strong>{formatCompact(githubData.pullRequests)}</strong>
                      <p>Pull requests</p>
                    </div>
                  </div>

                  <div className="stat-chip">
                    <span className="chip-icon"><FaFire /></span>
                    <div>
                      <strong>{formatCompact(githubData.streak)}</strong>
                      <p>{githubData.streakLabel}</p>
                    </div>
                  </div>

                  <div className="stat-chip">
                    <span className="chip-icon"><FaLaptopCode /></span>
                    <div>
                      <strong>{formatCompact(githubData.profile?.public_repos || 0)}</strong>
                      <p>Public repositories</p>
                    </div>
                  </div>
                </div>

                <div className="activity-heatmap">
                  <div className="heatmap-head">
                    <span>{githubData.periodLabel}</span>
                    <span>{formatCompact(githubData.profile?.followers || 0)} followers</span>
                  </div>

                  <div className="heatmap-grid">
                    {githubData.heatmap.map((day) => (
                      <span
                        key={day.key}
                        className={`heatmap-cell level-${day.level}`}
                        title={`${day.key}: ${day.count} activity events`}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </article>

          <article className="activity-card leetcode-card">
            <div className="activity-card-head">
              <div className="activity-icon leetcode-icon">
                <SiLeetcode />
              </div>
              <div>
                <p className="activity-label">LeetCode</p>
                <h3>@{LEETCODE_USERNAME}</h3>
              </div>
            </div>

            {leetcodeData.loading ? (
              <p className="activity-status">Loading LeetCode stats...</p>
            ) : leetcodeData.error ? (
              <p className="activity-status error-text">{leetcodeData.error}</p>
            ) : (
              <>
                <div className="leetcode-top">
                  <div
                    className="progress-ring"
                    style={{
                      background: `conic-gradient(#38bdf8 0deg ${progressDegrees}, rgba(148, 163, 184, 0.16) ${progressDegrees} 360deg)`,
                    }}
                  >
                    <div className="progress-ring-inner">
                      <strong>{leetcodeData.stats?.solvedTotal || 0}</strong>
                      <span>Solved</span>
                    </div>
                  </div>

                  <div className="leetcode-summary">
                    <div className="summary-row">
                      <span>Total solved</span>
                      <strong>{formatCompact(leetcodeData.stats?.solvedTotal || 0)}</strong>
                    </div>
                    <div className="summary-row">
                      <span>Solve rate</span>
                      <strong>{leetcodeData.stats?.solveRate || 0}%</strong>
                    </div>
                    <div className="summary-row">
                      <span>Contest rating</span>
                      <strong>{formatCompact(leetcodeData.stats?.contestRating)}</strong>
                    </div>
                    <div className="summary-row">
                      <span>Badges</span>
                      <strong>{formatCompact(leetcodeData.stats?.badges || 0)}</strong>
                    </div>
                  </div>
                </div>

                <div className="difficulty-grid">
                  <div className="difficulty-card easy">
                    <p>Easy</p>
                    <strong>{formatCompact(leetcodeData.stats?.easy || 0)}</strong>
                  </div>
                  <div className="difficulty-card medium">
                    <p>Medium</p>
                    <strong>{formatCompact(leetcodeData.stats?.medium || 0)}</strong>
                  </div>
                  <div className="difficulty-card hard">
                    <p>Hard</p>
                    <strong>{formatCompact(leetcodeData.stats?.hard || 0)}</strong>
                  </div>
                </div>

                <div className="leetcode-foot">
                  <div>
                    <span>Contest rank</span>
                    <strong>{formatCompact(leetcodeData.stats?.contestRank)}</strong>
                  </div>
                  <div>
                    <span>Contests</span>
                    <strong>{formatCompact(leetcodeData.stats?.contestCount || 0)}</strong>
                  </div>
                </div>
              </>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

export default Activity;
