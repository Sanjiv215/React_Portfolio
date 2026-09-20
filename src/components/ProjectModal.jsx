import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
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
          className="relative w-full max-w-2xl glass-panel border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl overflow-hidden max-h-[88vh] overflow-y-auto z-10 my-auto bg-zinc-950/95 text-zinc-200"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/20 transition-all z-20"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="mb-5 pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[11px] font-mono">
                {project.category}
              </span>
              {project.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden mb-5 bg-zinc-900 border border-white/10 max-h-64">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80';
              }}
            />
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
            {project.fullDescription}
          </p>

          {/* Key Features */}
          <div className="mb-5">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-zinc-400" /> Key Architecture Features
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="mb-6">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-300 text-[11px] font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-3.5 sm:pt-4 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white text-zinc-950 font-semibold flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-zinc-200 transition-all text-[11px] sm:text-xs font-mono"
            >
              <span>{project.id === 'vigilo' ? 'View on PyPI' : 'Open Link / Demo'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[120px] px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full glass-card border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-medium flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-[11px] sm:text-xs font-mono"
            >
              <FaGithub className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
