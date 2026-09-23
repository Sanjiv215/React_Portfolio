import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-8 sm:py-14 px-4 sm:px-6 relative z-10 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full studio-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>Timeline & Background</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          Experience & Education
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-white/10 ml-3 sm:ml-6 space-y-6 sm:space-y-8">
        {portfolioData.experiences.map((exp, idx) => {
          const isEducation = exp.type === 'Education';
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Node Bullet Icon */}
              <div className="absolute -left-[13px] sm:-left-[15px] top-2 w-6 h-6 rounded-full bg-zinc-950 border border-white/20 flex items-center justify-center text-zinc-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all">
                {isEducation ? <GraduationCap className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
              </div>

              {/* Timeline Card */}
              <div className="p-5 sm:p-7 rounded-3xl studio-card hover:border-white/25 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <span className="px-3 py-1 rounded-full studio-pill text-zinc-300 text-xs font-mono font-medium">
                    {exp.period}
                  </span>
                  <span className="text-xs text-cyan-400 font-mono flex items-center gap-1.5 font-medium">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                  {exp.role}
                </h3>
                <h4 className="text-xs sm:text-sm font-mono text-cyan-300/90 mb-3">
                  {exp.company}
                </h4>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-950/80 border border-white/5 text-zinc-300 text-[11px] font-mono"
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
    </section>
  );
}
