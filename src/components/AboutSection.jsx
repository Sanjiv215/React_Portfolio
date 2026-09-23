import React from 'react';
import { Layers, Zap, Shield, Award, Sparkles, Folder, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import WindowFrame from './MacOS/WindowFrame';

const valueIcons = {
  Layers: Layers,
  Zap: Zap,
  Shield: Shield
};

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-16 px-3 sm:px-4 relative z-10 max-w-5xl mx-auto">
      <WindowFrame title="Finder — About Sanjiv Prasad" icon={Folder}>
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              System Overview &amp; Philosophy
            </span>
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
              Discipline, Systems &amp; Real-World Software
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] sm:text-xs font-mono inline-flex items-center gap-1.5 self-start sm:self-auto">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Fullstack Developer Intern</span>
          </div>
        </div>

        {/* Story Card with Profile Photo */}
        <div className="p-4 sm:p-8 rounded-2xl bg-zinc-900/70 border border-white/15 mb-6 sm:mb-8 relative overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 sm:gap-6 justify-between">
            
            {/* Avatar & Story Content */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 max-w-2xl">
              <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-zinc-800">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <div className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] sm:text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Engineering Journey &amp; Focus</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                  Full-Stack Development, Static Security Analysis &amp; AI Systems
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {portfolioData.personal.bio}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[11px] sm:text-xs font-mono">
                    SVYASA University (B-Tech)
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] sm:text-xs font-mono">
                    IIT Patna Intern (2026)
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] sm:text-xs font-mono">
                    Code Alpha Intern (2025)
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] sm:text-xs font-mono">
                    PyPI Creator (Vigilo)
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] sm:text-xs font-mono">
                    SmartBuy-AI Creator
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 p-4 sm:p-5 rounded-2xl bg-zinc-950/80 border border-white/15 text-center w-full lg:w-48 mt-2 lg:mt-0 shadow-lg">
              <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-1">Motto</div>
              <div className="text-xs font-bold text-white font-mono leading-tight">Learn by building. Solve real-world problems.</div>
            </div>
          </div>
        </div>

        {/* Stat Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 perspective-container">
          {portfolioData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              style={{ transformOrigin: '50% -40px', transformPerspective: 1000 }}
              initial={{ opacity: 0, rotateX: 12, y: 20 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-4 rounded-xl bg-zinc-900/50 border border-white/15 text-left hover:border-cyan-400/40 transition-all hover:-translate-y-1 shadow-md hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(56,189,248,0.1)]"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white font-mono mb-0.5">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-[11px] text-zinc-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 perspective-container">
          {portfolioData.values.map((val, idx) => {
            const IconComponent = valueIcons[val.icon] || Award;
            return (
              <motion.div
                key={val.title}
                style={{ transformOrigin: '50% -40px', transformPerspective: 1000 }}
                initial={{ opacity: 0, rotateX: 14, y: 25 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-xl bg-zinc-900/50 border border-white/15 hover:border-white/30 transition-all group hover:-translate-y-1 shadow-md hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-cyan-400 mb-3 group-hover:text-white group-hover:scale-110 transition-all">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5 text-white">
                  {val.title}
                </h3>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </WindowFrame>
    </section>
  );
}
