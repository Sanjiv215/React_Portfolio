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
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl glass-panel border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 my-auto bg-slate-950/95"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full glass-card text-gray-400 hover:text-white hover:border-cyan-500/40 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              {project.badge && (
                <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                  {project.badge}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10 max-h-72">
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
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Key Architecture Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all text-sm"
            >
              <span>{project.id === 'vigilo' ? 'View on PyPI' : 'Live Demo / Docs'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] px-6 py-3 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-white font-semibold flex items-center justify-center gap-2 transition-all text-sm"
            >
              <FaGithub className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
