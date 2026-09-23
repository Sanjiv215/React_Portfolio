import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Shield, Code2, Sparkles, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 pb-5 border-b border-cyan-500/20 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cortex-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
            <Cpu className="w-3.5 h-3.5" />
            <span>[ SYSTEM // NEURAL CAPABILITIES ]</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
            Core Skill Matrix <span className="text-cyan-400 font-mono text-xl sm:text-2xl font-normal">04</span>
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap p-1 rounded-full cortex-card border border-cyan-500/20 text-xs font-mono gap-1">
          {portfolioData.skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-full transition-all duration-300 font-mono ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.02, ease: [0.16, 1, 0.3, 1] }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-5 rounded-2xl cortex-card relative flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Corner HUD Brackets */}
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block shadow-[0_0_8px_currentColor]"
                      style={{ backgroundColor: skill.langColor || '#00f2fe', color: skill.langColor || '#00f2fe' }}
                    />
                    <h4 className="font-bold text-white text-sm font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {skill.desc || skill.category}
                </p>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5 pt-2 border-t border-cyan-500/10">
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  <span>Proficiency</span>
                  <span className="text-emerald-400/80">ONLINE</span>
                </div>
                <div className="w-full bg-black/60 rounded-full h-1.5 overflow-hidden border border-cyan-500/20 p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.6)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
