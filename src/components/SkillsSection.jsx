import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Shield, Code2, FileCode, Palette, Server, Layout, Box, GitBranch, Database, Zap, Cpu as DefaultIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import WindowFrame from './MacOS/WindowFrame';

const skillIcons = {
  Code2,
  FileCode,
  Palette,
  Layout,
  Server,
  Cpu,
  Terminal,
  Shield,
  Box,
  GitBranch,
  Database,
  Zap
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-10 sm:py-16 px-3 sm:px-4 relative z-10 max-w-5xl mx-auto">
      <WindowFrame title="System Profiler — Technical Stack &amp; Hardware/Software Specs" icon={Cpu}>
        {/* Header inside window */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              macOS System Profiler
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Architecture &amp; Arsenal
            </h2>
          </div>

          {/* Segmented Controller (macOS Style Tabs) */}
          <div className="flex flex-wrap p-1 rounded-xl bg-zinc-900/90 border border-white/10 text-[11px] sm:text-xs font-mono gap-1">
            {portfolioData.skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-zinc-800 text-white font-semibold shadow-sm'
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 perspective-container"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => {
              const IconComp = skillIcons[skill.icon] || DefaultIcon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  style={{ transformOrigin: '50% -40px', transformPerspective: 1000 }}
                  initial={{ opacity: 0, rotateX: 12, y: 25, scale: 0.96 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-white/15 hover:border-white/30 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block shadow-[0_0_8px_currentColor]"
                          style={{ backgroundColor: skill.langColor || '#38bdf8', color: skill.langColor || '#38bdf8' }}
                        />
                        <h4 className="font-semibold text-white text-sm font-mono group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-zinc-300 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-3.5">
                      {skill.desc || skill.category}
                    </p>
                  </div>

                  {/* Level progress bar */}
                  <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </WindowFrame>
    </section>
  );
}
