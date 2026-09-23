import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Shield, Code2, FileCode, Palette, Server, Layout, Box, GitBranch, Database, Zap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-8 sm:py-14 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full studio-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Arsenal</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Capabilities
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap p-1 rounded-full studio-card border border-white/10 text-xs font-mono gap-1">
          {portfolioData.skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-white text-zinc-950 font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-5 rounded-2xl studio-card hover:border-white/25 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block shadow-[0_0_8px_currentColor]"
                      style={{ backgroundColor: skill.langColor || '#38bdf8', color: skill.langColor || '#38bdf8' }}
                    />
                    <h4 className="font-bold text-white text-sm font-mono group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {skill.desc || skill.category}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-zinc-950/80 rounded-full h-1.5 overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
