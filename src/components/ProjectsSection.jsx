import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, GitFork, Star, Lock, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-2"
            >
              04 / Core Repositories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            >
              Featured Projects
            </motion.h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {portfolioData.projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col group bg-zinc-950/70 p-6 justify-between"
              >
                <div>
                  {/* Repo Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Code className="w-4 h-4 text-zinc-400 shrink-0" />
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors cursor-pointer truncate font-mono"
                      >
                        {project.repoName || project.title}
                      </h3>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-mono shrink-0">
                      Public
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Repo Footer Bar */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-white/10 text-xs text-zinc-400 font-mono">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: project.languageColor || '#3572A5' }}
                        />
                        <span>{project.primaryLanguage}</span>
                      </div>

                      {project.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-white transition-colors"
                        title="View Architecture Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-white transition-colors"
                        title="Live Demo / PyPI"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
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
