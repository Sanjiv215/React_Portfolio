import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Award, Sparkles, CheckCircle, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const valueIcons = {
  Layers: Layers,
  Zap: Zap,
  Shield: Shield
};

export default function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-14 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full studio-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Overview &amp; Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering &amp; Problem Solving
          </h2>
        </div>
        <div className="flex items-center gap-2 studio-pill px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-mono self-start sm:self-auto">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Fullstack Developer Intern</span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="space-y-4 sm:space-y-6">
        
        {/* Main Bento Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="studio-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
            {/* Avatar & Story Content */}
            <div className="flex flex-col sm:flex-row items-start gap-5 max-w-2xl">
              <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-zinc-800">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Full-Stack Architecture, Security Tooling &amp; AI Agents
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {portfolioData.personal.bio}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-full studio-pill text-zinc-300 text-xs font-mono">
                    SVYASA University (B-Tech)
                  </span>
                  <span className="px-3 py-1 rounded-full studio-pill text-emerald-300 text-xs font-mono border-emerald-500/20">
                    IIT Patna Intern (2026)
                  </span>
                  <span className="px-3 py-1 rounded-full studio-pill text-cyan-300 text-xs font-mono border-cyan-500/20">
                    Code Alpha Intern (2025)
                  </span>
                  <span className="px-3 py-1 rounded-full studio-pill text-indigo-300 text-xs font-mono border-indigo-500/20">
                    PyPI Creator (Vigilo)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Motto Capsule */}
            <div className="shrink-0 p-5 rounded-2xl bg-zinc-950/70 border border-white/10 text-center w-full lg:w-52 mt-2 lg:mt-0 shadow-lg">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">Guiding Principle</span>
              <div className="text-xs font-bold text-white font-mono leading-snug">
                Learn by building. Solve real-world problems.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {portfolioData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl studio-card text-left hover:border-cyan-400/40 transition-all hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-xs text-zinc-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values / Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioData.values.map((val, idx) => {
            const IconComponent = valueIcons[val.icon] || Award;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl studio-card hover:border-white/25 transition-all group hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-3.5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5 text-white">
                  {val.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
