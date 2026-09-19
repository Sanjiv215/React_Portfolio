import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Award, Terminal, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const valueIcons = {
  Layers: Layers,
  Zap: Zap,
  Shield: Shield
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            Engineering Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white"
          >
            Discipline, Tools &amp; <span className="text-gradient-cyan">Real-World Software</span>
          </motion.h2>
        </div>

        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 mb-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Journey &amp; Background</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">
                From Fitness Trainer to Full-Stack Developer &amp; Security Tooling Creator
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {portfolioData.personal.story}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                  IIT Patna Intern
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                  Code Alpha Intern
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                  PyPI Author (Vigilo)
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
                  B.Tech CSE (AI/ML)
                </span>
              </div>
            </div>

            <div className="shrink-0 p-6 rounded-2xl bg-slate-950/80 border border-white/10 text-center w-full md:w-auto">
              <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-1">Motto</div>
              <div className="text-lg font-extrabold text-white font-mono">Build. Break. Fix. Repeat.</div>
            </div>
          </div>
        </motion.div>

        {/* Stat Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 text-center hover:border-cyan-500/40 transition-all group"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400 font-mono mb-2 group-hover:scale-105 transition-transform">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.values.map((val, index) => {
            const IconComponent = valueIcons[val.icon] || Award;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {val.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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
