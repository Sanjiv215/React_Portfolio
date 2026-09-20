import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
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
    <footer className="relative z-10 border-t border-white/10 py-8 sm:py-12 px-3 sm:px-4 pb-24 sm:pb-28 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-2.5">
          <span className="font-semibold text-sm text-white font-mono">
            {portfolioData.personal.name}
          </span>
          <span className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
            {portfolioData.personal.roleTitle}
          </span>
        </div>

        {/* Center Credits */}
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
          <span>Engineered with React 19 &amp; Tailwind</span>
          <button
            onClick={triggerConfetti}
            className="p-1 rounded-md text-zinc-400 hover:text-white transition-colors"
            title="Celebrate!"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
          </button>
        </div>

        {/* Right Back-To-Top Button */}
        <button
          onClick={scrollToTop}
          className="px-3.5 py-1.5 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/20 transition-all flex items-center gap-1.5 text-xs font-mono"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>

      </div>
    </footer>
  );
}
