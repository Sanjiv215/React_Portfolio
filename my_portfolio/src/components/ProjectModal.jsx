import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl cortex-card border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-[0_0_50px_rgba(0,242,254,0.15)] overflow-hidden max-h-[88vh] overflow-y-auto z-10 my-auto text-zinc-200"
        >
          {/* Corner HUD Brackets */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all z-20"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="mb-5 pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full cortex-pill text-cyan-300 text-[11px] font-mono">
                <Cpu className="w-3 h-3 text-cyan-400" />
                {project.category}
              </span>
              {project.badge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono shadow-[0_0_10px_rgba(0,255,157,0.15)]">
                  <ShieldCheck className="w-3 h-3" />
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-mono">
              {project.title}
            </h3>
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden mb-5 bg-[#03060d] border border-cyan-500/20 max-h-64 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5 font-sans">
            {project.fullDescription}
          </p>

          {/* Key Features */}
          <div className="mb-5 p-4 rounded-xl bg-black/40 border border-cyan-500/15">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> System Architecture Features
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="mb-6">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2">Integrated Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-cyan-500/20">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all text-xs font-mono"
            >
              <span>{project.id === 'vigilo' ? 'PyPI Release' : 'Live Interface'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[130px] px-4 py-2.5 rounded-full cortex-pill border border-cyan-500/30 hover:border-cyan-400 text-zinc-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono"
            >
              <FaGithub className="w-3.5 h-3.5 text-cyan-400" />
              <span>Source Repository</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
