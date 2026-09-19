import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-2"
          >
            06 / History &amp; Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Experience &amp; Milestones
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-10">
          {portfolioData.experiences.map((exp, idx) => {
            const isEducation = exp.type === 'Education';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-7 sm:pl-8 group"
              >
                {/* Node Bullet Icon */}
                <div className="absolute -left-[13px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border border-white/20 flex items-center justify-center text-zinc-400 group-hover:border-white group-hover:text-white transition-all">
                  {isEducation ? <GraduationCap className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                </div>

                {/* Timeline Card */}
                <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1.5">
                      <Award className="w-3 h-3 text-zinc-400" />
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-0.5 group-hover:text-zinc-200 transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-xs font-mono text-zinc-400 mb-3">
                    {exp.company}
                  </h4>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-[11px] font-mono"
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
