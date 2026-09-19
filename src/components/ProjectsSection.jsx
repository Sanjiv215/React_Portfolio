import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Code, Briefcase, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import WindowFrame from './MacOS/WindowFrame';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Main 4 Repositories Section */}
      <section id="projects" className="py-16 px-4 relative z-10 max-w-5xl mx-auto">
        <WindowFrame title="Repositories.app — 4 Core Production Systems" icon={Code}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                Curated Production Codebases
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Core Projects &amp; Repositories
              </h2>
            </div>

            {/* Segmented Filter */}
            <div className="flex flex-wrap p-1 rounded-xl bg-zinc-900/90 border border-white/10 text-xs font-mono">
              {portfolioData.projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-zinc-800 text-white font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col group bg-zinc-900/50 p-5 justify-between"
                >
                  <div>
                    {/* Repo Header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Code className="w-4 h-4 text-zinc-400 shrink-0" />
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors cursor-pointer truncate font-mono"
                        >
                          {project.repoName || project.title}
                        </h3>
                      </div>

                      <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-mono shrink-0">
                        Public
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-zinc-950 border border-white/5 text-zinc-300 text-[11px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Repo Footer Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-zinc-400 font-mono">
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full inline-block"
                            style={{ backgroundColor: project.languageColor || '#3572A5' }}
                          />
                          <span className="text-[11px]">{project.primaryLanguage}</span>
                        </div>

                        {project.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                          title="View Architecture Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                          title="Live Demo / PyPI"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
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
        </WindowFrame>
      </section>

      {/* Freelance Client Work Section */}
      <section id="freelance" className="py-16 px-4 relative z-10 max-w-5xl mx-auto">
        <WindowFrame title="Freelance.app — Bespoke Client Deliverables" icon={Briefcase}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-violet-400 font-mono text-[11px] uppercase tracking-widest block mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Client Engagements &amp; Custom Portfolios</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Freelance Client Work
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono self-start sm:self-auto">
              2 Custom Portfolios Delivered
            </span>
          </div>

          {/* Freelance Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.freelanceProjects.map((fProject) => (
              <div
                key={fProject.id}
                className="rounded-xl overflow-hidden border border-white/10 hover:border-violet-500/30 transition-all flex flex-col group bg-zinc-900/50 p-5 justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Briefcase className="w-4 h-4 text-violet-400 shrink-0" />
                      <h3
                        onClick={() => setSelectedProject(fProject)}
                        className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors cursor-pointer truncate font-mono"
                      >
                        {fProject.title}
                      </h3>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[10px] font-mono shrink-0">
                      Client Work
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                    {fProject.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {fProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-zinc-950 border border-white/5 text-zinc-300 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-zinc-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                      <span className="text-[11px]">Client: {fProject.client}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setSelectedProject(fProject)}
                        className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        title="View Architecture Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={fProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </WindowFrame>
      </section>

      {/* Modal View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
