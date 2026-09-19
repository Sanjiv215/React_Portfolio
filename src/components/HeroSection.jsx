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
        
        {/* Left Column: Heading & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* GitHub Style Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-mono mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.availability}</span>
          </div>

          {/* Name & Handle Header */}
          <div className="mb-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {portfolioData.personal.name}
            </h1>
            <p className="text-xs font-mono text-zinc-500 mt-1">
              github.com/{portfolioData.personal.handle}
            </p>
          </div>

          {/* Tagline / Role */}
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
              className="px-5 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold flex items-center justify-center gap-2 transition-all text-xs font-mono"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#vigilo-showcase"
              className="px-4 py-2.5 rounded-full glass-card border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Vigilo Scanner</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full glass-card border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono"
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
              className="p-2 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/25 transition-all text-xs"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/25 transition-all text-xs"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://pypi.org/project/vigilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-card text-zinc-400 hover:text-white hover:border-white/25 transition-all text-xs"
              title="PyPI Package (vigilo)"
              aria-label="PyPI Package"
            >
              <FaPython className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: GitHub Style Profile Window */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden bg-zinc-950/90 shadow-2xl">
            {/* Terminal Window Header */}
            <div className="bg-zinc-900/70 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                <span>README.md</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                markdown
              </span>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-zinc-950/95 text-zinc-300 space-y-2">
              <div className="text-zinc-500">## Hi, I’m Sanjiv Prasad 👋</div>
              <div className="text-emerald-400 font-semibold">Python • AI • Full Stack • DevTools</div>
              <div className="text-zinc-400">Building <span className="text-white font-bold">Vigilo</span></div>
              <div className="pt-2 border-t border-white/5 text-zinc-400">
                <span className="text-zinc-500">- 🏢 Intern:</span> IIT Patna &amp; Code Alpha{'\n'}
                <span className="text-zinc-500">- 📦 PyPI:</span> pip install vigilo{'\n'}
                <span className="text-zinc-500">- 🎓 B.Tech:</span> CS (AI &amp; ML) @ UIT{'\n'}
                <span className="text-zinc-500">- 💡 Motto:</span> Build. Break. Fix. Repeat.
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
