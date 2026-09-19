import React from 'react';
import { Layers, Zap, Shield, Award, Sparkles, Folder } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import WindowFrame from './MacOS/WindowFrame';

const valueIcons = {
  Layers: Layers,
  Zap: Zap,
  Shield: Shield
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 relative z-10 max-w-5xl mx-auto">
      <WindowFrame title="Finder — About Sanjiv Prasad" icon={Folder}>
        {/* Section Header */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Overview &amp; Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Discipline, Systems &amp; Real-World Software
          </h2>
        </div>

        {/* Story Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-white/10 mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Journey &amp; Mindset</span>
              </div>
              <h3 className="text-xl font-semibold text-white leading-snug">
                From Fitness Trainer to Full-Stack Developer &amp; Security Tooling Creator
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {portfolioData.personal.story}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                  IIT Patna Intern
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                  Code Alpha Intern
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                  PyPI Author (Vigilo)
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                  B.Tech CSE (AI/ML)
                </span>
              </div>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-zinc-950 border border-white/10 text-center w-full md:w-auto">
              <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">Motto</div>
              <div className="text-sm font-bold text-white font-mono">Build. Break. Fix. Repeat.</div>
            </div>
          </div>
        </div>

        {/* Stat Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {portfolioData.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-zinc-900/40 border border-white/10 text-left"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono mb-0.5">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-[11px] text-zinc-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {portfolioData.values.map((val) => {
            const IconComponent = valueIcons[val.icon] || Award;
            return (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-3 group-hover:text-white transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5 text-white">
                  {val.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </WindowFrame>
    </section>
  );
}
