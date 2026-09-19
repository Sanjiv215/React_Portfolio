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
    <section id="skills" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            Technical Stack &amp; Toolchain
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold mt-3 tracking-tight text-white"
          >
            Engineering <span className="text-gradient-cyan">Arsenal</span>
          </motion.h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {portfolioData.skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/40'
                  : 'glass-card text-gray-400 hover:text-white border-white/10 hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComp = skillIcons[skill.icon] || DefaultIcon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-xs text-gray-500 font-mono">{skill.category}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-slate-900/80 rounded-full h-2 overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_#06b6d4]"
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
