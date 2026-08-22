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
    <footer className="relative z-10 border-t border-white/10 py-12 px-4 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-white">
            {portfolioData.personal.name}
          </span>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            Senior Full-Stack &amp; UI/UX
          </span>
        </div>

        {/* Center Credits & Celebration */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          <span>using React 19 &amp; Tailwind v4</span>
          <button
            onClick={triggerConfetti}
            className="ml-2 p-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors"
            title="Celebrate!"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Back-To-Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl glass-card text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
          aria-label="Back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>

      </div>
    </footer>
  );
}
