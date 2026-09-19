import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Copy, Check, Terminal, Sparkles, Shield, Code2, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaPython } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center px-4 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.availability}</span>
          </div>

          {/* Subheader */}
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            Software Engineer • DevTools &amp; Security • AI
          </p>

          {/* Name Header */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white">
            Hi, I&apos;m{' '}
            <span className="text-gradient-cyan neon-glow-cyan block sm:inline">
              {portfolioData.personal.name}
            </span>
          </h1>

          {/* Animated Role Switcher */}
          <div className="h-12 flex items-center mb-6 text-xl sm:text-2xl font-bold text-gray-300">
            <span className="text-gray-400 mr-2">I build</span>
            <div className="relative inline-block overflow-hidden h-9">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-cyan-400 font-mono block"
                >
                  {portfolioData.personal.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            {portfolioData.personal.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all text-sm"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#vigilo-showcase"
              className="px-5 py-3.5 rounded-xl glass-card border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all active:scale-95 text-sm"
            >
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Test Vigilo Scanner</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-xl glass-card border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-white font-medium flex items-center justify-center gap-2 transition-all active:scale-95 text-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Icons & Badges */}
          <div className="flex items-center gap-4 mt-10">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Connect:</span>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://pypi.org/project/vigilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="PyPI Profile"
              aria-label="PyPI Package"
            >
              <FaPython className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Code Preview Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/40 transform hover:rotate-1 hover:scale-[1.02] transition-transform duration-500">
            
            {/* Terminal Window Header */}
            <div className="bg-slate-950/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>sanjiv.config.ts</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                vigilo 1.2
              </span>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-slate-950/90 text-gray-300">
              <pre className="text-cyan-300">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-yellow-300">engineer</span> = &#123;{'\n'}
                  {'  '}<span className="text-cyan-400">name</span>: <span className="text-emerald-300">&quot;Sanjiv Prasad&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">focus</span>: [<span className="text-emerald-300">&quot;Full-Stack&quot;</span>, <span className="text-emerald-300">&quot;DevTools&quot;</span>, <span className="text-emerald-300">&quot;AI&quot;</span>],{'\n'}
                  {'  '}<span className="text-cyan-400">flagshipPackage</span>: <span className="text-emerald-300">&quot;vigilo (PyPI)&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">internships</span>: [<span className="text-emerald-300">&quot;IIT Patna&quot;</span>, <span className="text-emerald-300">&quot;Code Alpha&quot;</span>],{'\n'}
                  {'  '}<span className="text-cyan-400">mindset</span>: <span className="text-emerald-300">&quot;Build. Break. Fix. Repeat.&quot;</span>,{'\n'}
                  {'  '}<span className="text-cyan-400">status</span>: <span className="text-emerald-300">&quot;🟢 Open for Opportunities&quot;</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
