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
    <section id="skills" className="py-16 px-4 relative z-10 max-w-5xl mx-auto">
      <WindowFrame title="System Profiler — Technical Stack &amp; Hardware/Software Specs" icon={Cpu}>
        {/* Header inside window */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
              macOS System Profiler
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Architecture &amp; Arsenal
            </h2>
          </div>

          {/* Segmented Controller (macOS Style Tabs) */}
          <div className="flex flex-wrap p-1 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono">
            {portfolioData.skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComp = skillIcons[skill.icon] || DefaultIcon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: skill.langColor || '#3572A5' }}
                        />
                        <h4 className="font-semibold text-white text-sm font-mono">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-zinc-400">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                      {skill.desc || skill.category}
                    </p>
                  </div>

                  {/* Level progress bar */}
                  <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="h-full bg-white/80 rounded-full"
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
