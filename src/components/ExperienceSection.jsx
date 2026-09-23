import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 sm:py-20 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 sm:mb-14 border-b border-cyan-500/20 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cortex-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
          <Calendar className="w-3.5 h-3.5" />
          <span>[ CIRCUIT // EXPERIENCE &amp; MILESTONES ]</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
          Timeline &amp; Career <span className="text-cyan-400 font-mono text-xl sm:text-2xl font-normal">06</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-cyan-500/20 ml-3 sm:ml-6 space-y-6 sm:space-y-8">
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
              {/* Node Bullet Icon with glow */}
              <div className="absolute -left-[14px] sm:-left-[16px] top-3 w-7 h-7 rounded-full bg-[#040711] border-2 border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_#00f2fe] transition-all">
                {isEducation ? <GraduationCap className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-7 rounded-2xl cortex-card group-hover:border-cyan-500/40 transition-all duration-300 relative">
                {/* HUD corner brackets */}
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full cortex-pill text-cyan-300 text-xs font-mono font-bold">
                    {exp.period}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 font-bold">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-white mb-0.5 font-mono">
                  {exp.role}
                </h3>
                <h4 className="text-xs sm:text-sm font-mono text-cyan-300/90 mb-3.5">
                  {exp.company}
                </h4>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-cyan-500/10">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono"
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
