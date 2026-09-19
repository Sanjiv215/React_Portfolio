import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const valueIcons = {
  Layers: Layers,
  Zap: Zap,
  Shield: Shield
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-2"
          >
            01 / Engineering Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Discipline, Systems &amp; Real-World Software
          </motion.h2>
        </div>

        {/* Story Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 mb-12 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Background &amp; Mindset</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                From Fitness Trainer to Full-Stack Developer &amp; Security Tooling Creator
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {portfolioData.personal.story}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                  IIT Patna Intern
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                  Code Alpha Intern
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                  PyPI Author (Vigilo)
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                  B.Tech CSE (AI/ML)
                </span>
              </div>
            </div>

            <div className="shrink-0 p-6 rounded-2xl bg-zinc-950 border border-white/10 text-center w-full md:w-auto">
              <div className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-1">Motto</div>
              <div className="text-base font-bold text-white font-mono">Build. Break. Fix. Repeat.</div>
            </div>
          </div>
        </motion.div>

        {/* Stat Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 text-left"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono mb-1">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-xs text-zinc-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioData.values.map((val, index) => {
            const IconComponent = valueIcons[val.icon] || Award;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-5 group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold mb-2 text-white">
                  {val.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
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
