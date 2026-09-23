import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Copy, Check, Terminal, Shield, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaPython } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[85vh] pt-8 sm:pt-14 pb-8 sm:pb-16 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Profile, Heading & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full studio-pill text-zinc-200 text-[11px] sm:text-xs font-mono mb-5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.availability}</span>
          </div>

          {/* Profile Picture & Name Header */}
          <div className="flex items-center gap-4 sm:gap-5 mb-4">
            <div className="relative shrink-0 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-zinc-900 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {portfolioData.personal.name}
              </h1>
              <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1 font-medium">
                Fullstack Developer Intern • @{portfolioData.personal.handle}
              </p>
            </div>
          </div>

          {/* Animated Tagline / Role */}
          <div className="h-8 flex items-center mb-4 text-lg sm:text-xl font-medium text-zinc-200">
            <div className="relative inline-block overflow-hidden h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white font-mono block font-semibold text-base sm:text-xl text-gradient-silver"
                >
                  {portfolioData.personal.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-zinc-300 text-sm sm:text-base max-w-xl mb-7 leading-relaxed font-normal">
            {portfolioData.personal.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center w-full">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 font-bold flex items-center justify-center gap-2 transition-all text-xs font-mono shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#vigilo-showcase"
              className="px-4 py-2.5 rounded-full studio-card border border-emerald-500/30 hover:border-emerald-400 text-zinc-200 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono hover:-translate-y-0.5"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Vigilo Scanner</span>
            </a>

            <a
              href="#freelance"
              className="px-4 py-2.5 rounded-full studio-card border border-indigo-500/30 hover:border-indigo-400 text-zinc-200 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Freelance Work</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full studio-card text-zinc-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono hover:-translate-y-0.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Icons & Badges */}
          <div className="flex items-center gap-3 mt-7">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full studio-card text-zinc-300 hover:text-white hover:border-white/30 transition-all text-xs"
              aria-label="GitHub Profile"
              title="GitHub Profile (@Sanjiv215)"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full studio-card text-zinc-300 hover:text-white hover:border-blue-400/50 transition-all text-xs"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://pypi.org/project/vigilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full studio-card text-zinc-300 hover:text-white hover:border-emerald-400/50 transition-all text-xs"
              title="PyPI Package (vigilo)"
              aria-label="PyPI Package"
            >
              <FaPython className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Studio Developer Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="studio-card rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden bg-zinc-950/80">
            {/* Top subtle highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-white">System Profile</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 studio-pill px-2.5 py-0.5 rounded-full">
                Active
              </span>
            </div>

            {/* Profile Spec Rows */}
            <div className="font-mono text-xs leading-relaxed space-y-3 text-zinc-300">
              <div className="flex items-start justify-between gap-2">
                <span className="text-zinc-500">Full Name</span>
                <span className="text-white font-medium text-right">Sanjiv Prasad</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-zinc-500">Education</span>
                <span className="text-zinc-200 text-right">B.Tech CSE (AI/ML) @ SVYASA</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-zinc-500">Internships</span>
                <span className="text-cyan-300 text-right font-medium">IIT Patna (2026), Code Alpha</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-zinc-500">PyPI Release</span>
                <span className="text-emerald-400 font-semibold text-right">pip install vigilo</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-zinc-500">Flagship AI</span>
                <span className="text-indigo-300 font-medium text-right">SmartBuy-AI Agent</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-zinc-500">Location</span>
                <span className="text-zinc-300 text-right">Bengaluru, India</span>
              </div>
            </div>

            {/* Motto Box */}
            <div className="mt-5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-1">Philosophy</span>
              <p className="text-xs text-white font-medium leading-normal">
                "Learn by building. Solve real-world problems."
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
