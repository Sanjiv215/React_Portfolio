import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, Code, Briefcase, Sparkles, FolderGit2, Cpu, Terminal } from 'lucide-react';
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
    <>
      {/* Main Production Repositories Section */}
      <section id="projects" className="py-8 sm:py-14 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-cyan-500/20 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full cortex-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2 border border-cyan-500/30">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production Codebases // Nodes</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Systems &amp; Repositories
            </h2>
          </div>

          {/* Segmented Filter */}
          <div className="flex flex-wrap p-1 rounded-full cortex-card border border-cyan-500/20 text-xs font-mono gap-1 bg-[#060a14]/80">
            {portfolioData.projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 rounded-full transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-400 text-black font-bold shadow-[0_0_12px_rgba(0,242,254,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="cortex-card rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 relative group bg-[#070b16]/85 border border-cyan-500/20"
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                <div>
                  {/* Repo Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                        <Code className="w-4 h-4" />
                      </div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer truncate font-mono"
                      >
                        {project.repoName || project.title}
                      </h3>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full cortex-pill text-cyan-300 text-[10px] font-mono shrink-0 border border-cyan-500/20">
                      PUBLIC
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#040711] border border-cyan-500/15 text-zinc-300 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Repo Footer Bar */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-cyan-500/15 text-xs text-zinc-400 font-mono">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block shadow-[0_0_8px_currentColor]"
                          style={{ backgroundColor: project.languageColor || '#3572A5', color: project.languageColor || '#3572A5' }}
                        />
                        <span className="text-[11px] text-zinc-300 font-medium">{project.primaryLanguage}</span>
                      </div>

                      {project.badge && (
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold shadow-[0_0_8px_rgba(0,255,157,0.2)]">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-2 rounded-full cortex-pill hover:bg-cyan-500/15 text-zinc-400 hover:text-cyan-300 transition-colors"
                        title="View Architecture Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full cortex-pill hover:bg-cyan-500/15 text-zinc-400 hover:text-cyan-300 transition-colors"
                        title="Live Demo / PyPI"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full cortex-pill hover:bg-cyan-500/15 text-zinc-400 hover:text-cyan-300 transition-colors"
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
      </section>

      {/* Freelance Client Work Section */}
      <section id="freelance" className="py-8 sm:py-14 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-5 border-b border-indigo-500/20 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full cortex-pill text-indigo-300 text-xs font-mono uppercase tracking-wider mb-2 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Client Deliverables</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Freelance Client Work
            </h2>
          </div>
          <span className="px-3.5 py-1.5 rounded-full cortex-pill text-indigo-300 text-xs font-mono self-start sm:self-auto font-bold border border-indigo-500/30 bg-indigo-500/10">
            2 Custom Portfolios Delivered
          </span>
        </div>

        {/* Freelance Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.freelanceProjects.map((fProject, idx) => (
            <motion.div
              key={fProject.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="cortex-card rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 relative group bg-[#070b16]/85 border border-indigo-500/20"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3
                      onClick={() => setSelectedProject(fProject)}
                      className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors cursor-pointer truncate font-mono"
                    >
                      {fProject.title}
                    </h3>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full cortex-pill text-indigo-300 text-[10px] font-mono shrink-0 font-bold border border-indigo-500/20">
                    CLIENT WORK
                  </span>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {fProject.shortDescription}
                </p>
              </div>

              <div>
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {fProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#040711] border border-indigo-500/15 text-zinc-300 text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3.5 border-t border-indigo-500/15 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                    <span className="text-[11px] text-zinc-300 font-medium">Client: {fProject.client}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedProject(fProject)}
                      className="p-2 rounded-full cortex-pill hover:bg-indigo-500/15 text-zinc-400 hover:text-indigo-300 transition-colors"
                      title="View Architecture Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={fProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full cortex-pill hover:bg-indigo-500/15 text-zinc-400 hover:text-indigo-300 transition-colors"
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
