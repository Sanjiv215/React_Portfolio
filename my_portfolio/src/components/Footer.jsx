import React from 'react';
import { ArrowUp, Sparkles, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <footer className="relative z-10 border-t border-cyan-500/20 py-8 sm:py-12 px-4 pb-24 sm:pb-28 bg-[#03060d]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#00ff9d]" />
          <span className="font-bold text-sm text-white font-mono tracking-tight">
            {portfolioData.personal.name}
          </span>
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            {portfolioData.personal.roleTitle}
          </span>
        </div>

        {/* Center Credits */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
          <span>[ CORTEX ARCHITECTURE v4.8 ]</span>
          <span className="text-cyan-500/50">•</span>
          <span>React 19 &amp; Tailwind</span>
          <button
            onClick={triggerConfetti}
            className="p-1 rounded-md text-cyan-400 hover:text-white transition-colors"
            title="Celebrate!"
            aria-label="Celebrate"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          </button>
        </div>

        {/* Right Back-To-Top Button */}
        <button
          onClick={scrollToTop}
          className="px-4 py-1.5 rounded-full cortex-pill text-cyan-300 hover:text-white hover:border-cyan-400 transition-all flex items-center gap-2 text-xs font-mono group"
          aria-label="Back to top"
        >
          <span>ASCEND TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
