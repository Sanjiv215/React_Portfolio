import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, FileCode, Palette, Layout, Server, Cpu, Network, Box, GitBranch, Terminal, Database, HardDrive, Shield, Cpu as DefaultIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillIcons = {
  Code2,
  FileCode,
  Palette,
  Layout,
  Server,
  Cpu,
  Network,
  Box,
  GitBranch,
  Terminal,
  Database,
  HardDrive,
  Shield
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? portfolioData.skills
    : portfolioData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-2"
          >
            03 / Capabilities &amp; Arsenal
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Technical Stack
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {portfolioData.skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-zinc-950 font-semibold'
                  : 'glass-card text-zinc-400 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
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
                  className="glass-card p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-sm">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] text-zinc-500 font-mono">{skill.category}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
