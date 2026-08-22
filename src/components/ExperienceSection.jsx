import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            Milestones &amp; History
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold mt-3 tracking-tight"
          >
            Career &amp; <span className="text-gradient-cyan">Education</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12">
          {portfolioData.experiences.map((exp, idx) => {
            const isEducation = exp.type === 'Education';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Node Bullet Icon */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full glass-panel border border-cyan-400/50 flex items-center justify-center text-cyan-400 group-hover:scale-125 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                  {isEducation ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                </div>

                {/* Timeline Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
                      {exp.period}
                    </span>
                    <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-300 mb-4">
                    {exp.company}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-gray-300 text-xs font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
