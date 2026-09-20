import React from 'react';

export default function WindowFrame({ title, icon: Icon, children, className = "", id = "" }) {
  return (
    <div
      id={id}
      className={`rounded-2xl bg-zinc-950/80 backdrop-blur-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* macOS Title Bar */}
      <div className="h-9 px-3 sm:px-4 bg-zinc-900/80 border-b border-white/10 flex items-center justify-between select-none">
        {/* Window Traffic Lights */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-sm" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-sm" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-sm" />
        </div>

        {/* Title */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-zinc-200 px-2 truncate max-w-[190px] xs:max-w-[240px] sm:max-w-md">
          {Icon && <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400 shrink-0" />}
          <span className="truncate">{title}</span>
        </div>

        {/* Right placeholder */}
        <div className="text-right shrink-0">
          <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500">macOS</span>
        </div>
      </div>

      {/* Window Body Content */}
      <div className="p-4 sm:p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}
