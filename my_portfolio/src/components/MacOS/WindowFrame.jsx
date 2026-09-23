import React from 'react';
import { motion } from 'framer-motion';

export default function WindowFrame({ title, icon: Icon, children, className = "", id = "", delay = 0 }) {
  return (
    <motion.div
      id={id}
      style={{
        transformOrigin: '50% -80px',
        transformPerspective: 1200
      }}
      initial={{ opacity: 0, rotateX: 16, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl bg-zinc-900/70 backdrop-blur-2xl border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.55)] overflow-hidden transition-all duration-300 relative group hover:border-white/25 hover:shadow-[0_25px_80px_rgba(0,0,0,0.65)] ${className}`}
    >
      {/* Top subtle specular highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* macOS Title Bar */}
      <div className="h-9 px-3 sm:px-4 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between select-none relative z-10 backdrop-blur-md">
        {/* Window Traffic Lights */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/80 inline-block shadow-sm transition-transform hover:scale-110" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/80 inline-block shadow-sm transition-transform hover:scale-110" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/80 inline-block shadow-sm transition-transform hover:scale-110" />
        </div>

        {/* Title */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-zinc-200 px-2 truncate max-w-[190px] xs:max-w-[240px] sm:max-w-md">
          {Icon && <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400 shrink-0" />}
          <span className="truncate">{title}</span>
        </div>

        {/* Right placeholder */}
        <div className="text-right shrink-0">
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">macOS Tahoe</span>
        </div>
      </div>

      {/* Window Body Content */}
      <div className="p-4 sm:p-6 md:p-8 relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
