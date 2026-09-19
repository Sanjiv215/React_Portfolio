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
    <section id="home" className="relative min-h-[90vh] pt-36 pb-20 flex items-center justify-center px-4 overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Profile, Heading & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 text-xs font-mono mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.availability}</span>
          </div>

          {/* Profile Picture & Name Header */}
          <div className="flex items-center gap-5 mb-4">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-zinc-800">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {portfolioData.personal.name}
              </h1>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Full Stack Intern • @{portfolioData.personal.handle}
              </p>
            </div>
          </div>

          {/* Animated Tagline / Role */}
          <div className="h-8 flex items-center mb-5 text-lg sm:text-xl font-medium text-zinc-300">
            <div className="relative inline-block overflow-hidden h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white font-mono block font-semibold"
                >
                  {portfolioData.personal.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 items-center w-full sm:w-auto">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold flex items-center justify-center gap-2 transition-all text-xs font-mono shadow-md"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#freelance"
              className="px-4 py-2.5 rounded-full glass-card border border-white/15 hover:border-white/30 text-zinc-200 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Freelance Work</span>
            </a>

            <a
              href="#vigilo-showcase"
              className="px-4 py-2.5 rounded-full glass-card border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Vigilo Scanner</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full glass-card border border-white/15 hover:border-white/30 text-zinc-400 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Icons & Badges */}
          <div className="flex items-center gap-3 mt-8">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/30 transition-all text-xs"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/30 transition-all text-xs"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://pypi.org/project/vigilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/30 transition-all text-xs"
              title="PyPI Package (vigilo)"
              aria-label="PyPI Package"
            >
              <FaPython className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: macOS Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel rounded-2xl border border-white/15 overflow-hidden bg-zinc-950/95 shadow-2xl">
            {/* Terminal Window Header */}
            <div className="bg-zinc-900/80 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block shadow-sm" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                <span>README.md — macOS Tahoe</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                v15.0
              </span>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-zinc-950/95 text-zinc-300 space-y-2">
              <div className="text-zinc-500">## Hi, I’m Sanjiv Prasad 👋</div>
              <div className="text-emerald-400 font-semibold">Full Stack Intern • Python • DevTools</div>
              <div className="text-zinc-400">Flagship: <span className="text-white font-bold">Vigilo (PyPI)</span></div>
              <div className="pt-2 border-t border-white/10 text-zinc-400 space-y-1">
                <div><span className="text-zinc-500">- 💼 Role:</span> Full Stack Intern (2026 – 2026)</div>
                <div><span className="text-zinc-500">- 🏢 Internships:</span> IIT Patna &amp; Code Alpha</div>
                <div><span className="text-zinc-500">- 📦 PyPI Package:</span> pip install vigilo</div>
                <div><span className="text-zinc-500">- 🚀 Client Work:</span> Jishnu &amp; Devendra Portfolios</div>
                <div><span className="text-zinc-500">- 🟢 Availability:</span> Internship &amp; Freelance only</div>
                <div><span className="text-zinc-500">- 💡 Motto:</span> Build. Break. Fix. Repeat.</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
