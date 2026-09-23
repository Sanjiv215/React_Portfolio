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
      {/* Main Repositories Section */}
      <section id="projects" className="py-10 sm:py-16 px-3 sm:px-4 relative z-10 max-w-5xl mx-auto">
        <WindowFrame title="Repositories.app — Production Codebases & AI Platforms" icon={Code}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10 gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                Curated Production Codebases
              </span>
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                Core Projects &amp; Repositories
              </h2>
            </div>

            {/* Segmented Filter */}
            <div className="flex flex-wrap p-1 rounded-xl bg-zinc-900/90 border border-white/10 text-[11px] sm:text-xs font-mono gap-1">
              {portfolioData.projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all ${
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

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 perspective-container">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  style={{ transformOrigin: '50% -50px', transformPerspective: 1000 }}
                  initial={{ opacity: 0, rotateX: 14, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-xl overflow-hidden border border-white/15 hover:border-cyan-400/40 transition-all flex flex-col group bg-zinc-900/70 p-4 sm:p-5 justify-between shadow-lg hover:shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(56,189,248,0.12)] relative hover:-translate-y-1"
                >
                  <div>
                    {/* Repo Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Code className="w-4 h-4 text-cyan-400 shrink-0" />
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors cursor-pointer truncate font-mono"
                        >
                          {project.repoName || project.title}
                        </h3>
                      </div>

                      <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 text-[10px] font-mono shrink-0">
                        Public
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-white/10 text-zinc-300 text-[11px] font-mono"
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
                            className="w-2.5 h-2.5 rounded-full inline-block shadow-sm"
                            style={{ backgroundColor: project.languageColor || '#3572A5' }}
                          />
                          <span className="text-[11px] text-zinc-300">{project.primaryLanguage}</span>
                        </div>

                        {project.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
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
      <section id="freelance" className="py-10 sm:py-16 px-3 sm:px-4 relative z-10 max-w-5xl mx-auto">
        <WindowFrame title="Freelance.app — Bespoke Client Deliverables" icon={Briefcase}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10 gap-3 sm:gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-violet-400 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest block mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Client Engagements &amp; Custom Portfolios</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
                Freelance Client Work
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-[11px] sm:text-xs font-mono self-start sm:self-auto font-medium shadow-[0_0_12px_rgba(139,92,246,0.2)]">
              2 Custom Portfolios Delivered
            </span>
          </div>

          {/* Freelance Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 perspective-container">
            {portfolioData.freelanceProjects.map((fProject, idx) => (
              <motion.div
                key={fProject.id}
                style={{ transformOrigin: '50% -50px', transformPerspective: 1000 }}
                initial={{ opacity: 0, rotateX: 14, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl overflow-hidden border border-white/15 hover:border-violet-500/50 transition-all flex flex-col group bg-zinc-900/70 p-4 sm:p-5 justify-between shadow-lg hover:shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(139,92,246,0.15)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Briefcase className="w-4 h-4 text-violet-400 shrink-0" />
                      <h3
                        onClick={() => setSelectedProject(fProject)}
                        className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors cursor-pointer truncate font-mono"
                      >
                        {fProject.title}
                      </h3>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-[10px] font-mono shrink-0 font-medium">
                      Client Work
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                    {fProject.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {fProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-zinc-950/80 border border-white/10 text-zinc-300 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-zinc-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                      <span className="text-[11px] text-zinc-300">Client: {fProject.client}</span>
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
              </motion.div>
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
