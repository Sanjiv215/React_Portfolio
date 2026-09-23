import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Copy, Check, Terminal, Shield, Sparkles, Activity, Cpu, Database, Network } from 'lucide-react';
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
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] pt-8 sm:pt-14 pb-12 sm:pb-20 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Heading, Telemetry Pill & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Cortex Telemetry Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cortex-pill text-cyan-300 text-[11px] sm:text-xs font-mono mb-5 shadow-[0_0_15px_rgba(0,242,254,0.15)] border border-cyan-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>CORTEX.ENGINE // {portfolioData.personal.availability}</span>
          </div>

          {/* Profile Picture & Headline */}
          <div className="flex items-center gap-4 sm:gap-5 mb-4">
            <div className="relative shrink-0 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_20px_rgba(0,242,254,0.2)] bg-[#080d1a] transition-transform duration-300 group-hover:scale-105">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-black shadow-[0_0_10px_rgba(0,255,157,0.8)]" />
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {portfolioData.personal.name}
              </h1>
              <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1 font-semibold tracking-wide">
                Fullstack Developer Intern • @{portfolioData.personal.handle}
              </p>
            </div>
          </div>

          {/* Dynamic Role Tagline */}
          <div className="h-8 flex items-center mb-4 text-lg sm:text-xl font-medium text-zinc-200">
            <div className="relative inline-block overflow-hidden h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white font-mono block font-bold text-base sm:text-xl text-gradient-cyan"
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
              className="px-5 py-2.5 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 font-bold flex items-center justify-center gap-2 transition-all text-xs font-mono shadow-[0_0_22px_rgba(0,242,254,0.4)] hover:-translate-y-0.5"
            >
              <span>Explore Codebases</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#vigilo-showcase"
              className="px-4 py-2.5 rounded-full cortex-card border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono hover:-translate-y-0.5"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Vigilo Scanner</span>
            </a>

            <a
              href="#terminal"
              className="px-4 py-2.5 rounded-full cortex-card border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono hover:-translate-y-0.5"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Launch CLI</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-full cortex-card text-zinc-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs font-mono hover:-translate-y-0.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-3 mt-7">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full cortex-card text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-all text-xs"
              aria-label="GitHub Profile"
              title="GitHub Profile (@Sanjiv215)"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full cortex-card text-zinc-300 hover:text-blue-400 hover:border-blue-400/50 transition-all text-xs"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://pypi.org/project/vigilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full cortex-card text-zinc-300 hover:text-emerald-300 hover:border-emerald-400/50 transition-all text-xs"
              title="PyPI Package (vigilo)"
              aria-label="PyPI Package"
            >
              <FaPython className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Cortex 3D Perspective Diagnostic Neural Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25, rotateY: -10, rotateX: 5 }}
          animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 perspective-1000"
        >
          <div className="cortex-card rounded-3xl p-6 sm:p-7 border border-cyan-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,242,254,0.15)] relative overflow-hidden bg-[#070b16]/90 group">
            {/* HUD Corner Brackets */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            {/* Top Scanning Line */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#00f2fe]" />
            
            {/* Card Header & Telemetry */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-cyan-500/20">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="font-bold uppercase tracking-wider">CORTEX DIAGNOSTIC HUD</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                ONLINE
              </span>
            </div>

            {/* Neural Matrix Telemetry Grid */}
            <div className="font-mono text-xs leading-relaxed space-y-3 text-zinc-300">
              <div className="flex items-start justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500 flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-cyan-400" /> Core Engine</span>
                <span className="text-white font-semibold text-right">Python, FastAPI, React</span>
              </div>

              <div className="flex items-start justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500 flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-emerald-400" /> Static Scanner</span>
                <span className="text-emerald-300 font-bold text-right">Vigilo (AST CLI // PyPI)</span>
              </div>

              <div className="flex items-start justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500 flex items-center gap-1.5"><Network className="w-3.5 h-3.5 text-indigo-400" /> Agent Architecture</span>
                <span className="text-indigo-300 font-semibold text-right">SmartBuy-AI Pipeline</span>
              </div>

              <div className="flex items-start justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500 flex items-center gap-1.5"><Database className="w-3.5 h-3.5 text-cyan-400" /> Enterprise Systems</span>
                <span className="text-cyan-300 font-semibold text-right">IIT Patna ERP (RBAC)</span>
              </div>

              <div className="flex items-start justify-between gap-2 p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-500">Neural Latency</span>
                <span className="text-emerald-400 font-bold text-right">0.042s (AST Fast Cache)</span>
              </div>
            </div>

            {/* Live Operational Status Box */}
            <div className="mt-5 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-cyan-400/80 block font-semibold">Operational Target</span>
                <p className="text-xs text-white font-mono font-bold leading-tight">
                  High-Impact Fullstack &amp; Security Engineering
                </p>
              </div>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
