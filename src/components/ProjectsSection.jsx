import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Shield, Sparkles, Layers } from 'lucide-react';
import { FaGithub, FaPython } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-2"
            >
              04 / Featured Systems
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            >
              Selected Projects
            </motion.h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {portfolioData.projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-white text-zinc-950 font-semibold'
                    : 'glass-card text-zinc-400 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col group bg-zinc-950/70"
              >
                {/* Image Container with Hover Overlay */}
                <div
                  className="relative h-56 bg-zinc-900 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-zinc-300 text-[11px] font-mono">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Spec Action */}
                  <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-full bg-white text-zinc-950 font-medium text-xs flex items-center gap-1.5 shadow-xl font-mono"
                    >
                      <Eye className="w-3.5 h-3.5" /> Architecture Specs
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors cursor-pointer mb-2"
                    >
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-300 text-[11px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-zinc-950 font-medium text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>{project.id === 'vigilo' ? 'PyPI Package' : 'Explore Repository / Demo'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/25 transition-all"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
