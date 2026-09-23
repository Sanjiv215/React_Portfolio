import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import WindowFrame from './MacOS/WindowFrame';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-10 sm:py-16 px-3 sm:px-4 relative z-10 max-w-4xl mx-auto">
      <WindowFrame title="Calendar & History — Career Milestones & Academic Timeline" icon={Calendar}>
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">
          <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Career Timeline
          </span>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
            Experience &amp; Education
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/15 ml-2.5 sm:ml-6 space-y-6 sm:space-y-8 perspective-container">
          {portfolioData.experiences.map((exp, idx) => {
            const isEducation = exp.type === 'Education';
            return (
              <motion.div
                key={idx}
                style={{ transformOrigin: '50% -30px', transformPerspective: 1000 }}
                initial={{ opacity: 0, rotateX: 12, y: 25 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-5 sm:pl-8 group"
              >
                {/* Node Bullet Icon */}
                <div className="absolute -left-[11px] sm:-left-[13px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-950 border border-white/25 flex items-center justify-center text-zinc-300 group-hover:border-cyan-400 group-hover:text-cyan-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all">
                  {isEducation ? <GraduationCap className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> : <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                </div>

                {/* Timeline Card */}
                <div className="p-4 sm:p-6 rounded-xl bg-zinc-900/60 border border-white/15 hover:border-white/30 transition-all shadow-md group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-zinc-200 text-xs font-mono font-medium">
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-cyan-400 font-mono flex items-center gap-1.5 font-medium">
                      <Award className="w-3 h-3 text-cyan-400" />
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-0.5">
                    {exp.role}
                  </h3>
                  <h4 className="text-xs font-mono text-zinc-300 mb-3">
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
                        className="px-2 py-0.5 rounded-md bg-zinc-950 border border-white/10 text-zinc-300 text-[11px] font-mono"
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
      </WindowFrame>
    </section>
  );
}
