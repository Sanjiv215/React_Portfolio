import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Terminal, 
  Shield, 
  Sparkles, 
  Activity, 
  Cpu, 
  Database, 
  Network, 
  Code2, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaPython } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// ---------------------------------------------------------------------------
// 3D Neural Cortex Canvas Engine (Pure 60fps Canvas, 0KB extra bundle bloat)
// ---------------------------------------------------------------------------
function NeuralCortexCanvas() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Node Count: Desktop = 52, Mobile = 26
    const nodeCount = isMobile ? 26 : 52;
    const maxConnectionDistance = isMobile ? 120 : 155;
    const focalLength = 380;

    // Palette of synaptic cortex colors
    const colors = [
      { r: 0, g: 242, b: 254 },   // Cyan
      { r: 59, g: 130, b: 246 },  // Electric Blue
      { r: 168, g: 85, b: 247 },  // Violet
      { r: 0, g: 255, b: 157 },   // Emerald
    ];

    // Generate 3D Brain/Cortex Nodes (dual ellipsoid lobes)
    const nodes = [];
    const radiusX = isMobile ? 110 : 150;
    const radiusY = isMobile ? 85 : 115;
    const radiusZ = isMobile ? 95 : 130;

    for (let i = 0; i < nodeCount; i++) {
      // Hemisphere sign (-1 for left lobe, +1 for right lobe)
      const hemisphere = i % 2 === 0 ? -1 : 1;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.9 + 0.1;

      // Brain dual-lobe parametric distortion
      const offsetX = hemisphere * (radiusX * 0.28);
      const x = offsetX + (r * radiusX * Math.sin(phi) * Math.cos(theta) * 0.75);
      const y = (r * radiusY * Math.sin(phi) * Math.sin(theta)) * 0.85;
      const z = (r * radiusZ * Math.cos(phi)) * 0.95;

      const color = colors[Math.floor(Math.random() * colors.length)];

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: Math.random() * 2.2 + 1.6,
        color,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        glowIntensity: Math.random() * 0.5 + 0.5,
      });
    }

    // Build connections & active synaptic firing pulses
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        const dz = nodes[i].baseZ - nodes[j].baseZ;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxConnectionDistance) {
          connections.push({
            a: i,
            b: j,
            dist,
            pulses: [] // Array of firing action potentials
          });
        }
      }
    }

    // Spawn synaptic firing pulses periodically
    const spawnPulse = () => {
      if (connections.length === 0) return;
      const conn = connections[Math.floor(Math.random() * connections.length)];
      if (conn.pulses.length < 2) {
        conn.pulses.push({
          progress: 0,
          speed: 0.012 + Math.random() * 0.018,
          color: Math.random() > 0.4 ? 'cyan' : (Math.random() > 0.5 ? 'violet' : 'emerald'),
          size: Math.random() * 2 + 2,
        });
      }
    };

    let pulseTimer = 0;
    let angleY = 0;
    let angleX = 0.15;

    // Mouse tilt tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      mousePos.current.targetX = x * 0.8;
      mousePos.current.targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Ambient rotation (disabled if reduced motion)
      if (!prefersReducedMotion) {
        angleY += 0.0035;
        angleX = 0.18 + Math.sin(angleY * 0.6) * 0.08 + mousePos.current.y * 0.6;
      }

      const totalAngleY = angleY + mousePos.current.x * 0.8;
      const cosY = Math.cos(totalAngleY);
      const sinY = Math.sin(totalAngleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D nodes to 2D
      const projectedNodes = nodes.map((node) => {
        // Yaw (Y-axis rotation)
        const x1 = node.baseX * cosY - node.baseZ * sinY;
        const z1 = node.baseZ * cosY + node.baseX * sinY;

        // Pitch (X-axis rotation)
        const y2 = node.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.baseY * sinX;

        // Perspective projection
        const scale = focalLength / (focalLength + z2 + 220);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;

        return {
          ...node,
          screenX,
          screenY,
          scale,
          z2,
        };
      });

      // Periodic pulse generation
      if (!prefersReducedMotion) {
        pulseTimer++;
        if (pulseTimer % (isMobile ? 18 : 10) === 0) {
          spawnPulse();
        }
      }

      // 1. Draw Synaptic Connection Lines
      for (let i = 0; i < connections.length; i++) {
        const conn = connections[i];
        const p1 = projectedNodes[conn.a];
        const p2 = projectedNodes[conn.b];

        if (!p1 || !p2) continue;

        const avgZ = (p1.z2 + p2.z2) / 2;
        const alpha = Math.max(0.04, Math.min(0.45, (1 - conn.dist / maxConnectionDistance) * ((avgZ + 180) / 360)));

        ctx.beginPath();
        ctx.moveTo(p1.screenX, p1.screenY);
        ctx.lineTo(p2.screenX, p2.screenY);
        ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 0.75})`;
        ctx.lineWidth = Math.max(0.6, (p1.scale + p2.scale) * 0.5);
        ctx.stroke();

        // 2. Draw Traveling Synaptic Pulses (Data Packets)
        if (!prefersReducedMotion) {
          for (let pIdx = conn.pulses.length - 1; pIdx >= 0; pIdx--) {
            const pulse = conn.pulses[pIdx];
            pulse.progress += pulse.speed;

            if (pulse.progress >= 1) {
              conn.pulses.splice(pIdx, 1);
              continue;
            }

            // Current pulse coordinate along connection
            const pulseX = p1.screenX + (p2.screenX - p1.screenX) * pulse.progress;
            const pulseY = p1.screenY + (p2.screenY - p1.screenY) * pulse.progress;
            const pulseScale = (p1.scale + (p2.scale - p1.scale) * pulse.progress);

            const glowR = pulse.color === 'violet' ? 168 : (pulse.color === 'emerald' ? 0 : 0);
            const glowG = pulse.color === 'violet' ? 85 : (pulse.color === 'emerald' ? 255 : 242);
            const glowB = pulse.color === 'violet' ? 247 : (pulse.color === 'emerald' ? 157 : 254);

            // Glowing pulse packet
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, pulse.size * pulseScale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${glowR}, ${glowG}, ${glowB}, 0.95)`;
            ctx.shadowColor = `rgba(${glowR}, ${glowG}, ${glowB}, 1)`;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.shadowBlur = 0; // reset
          }
        }
      }

      // 3. Draw Synaptic Nodes (Sorted by Z for proper depth ordering)
      const sortedNodes = [...projectedNodes].sort((a, b) => a.z2 - b.z2);

      for (let i = 0; i < sortedNodes.length; i++) {
        const n = sortedNodes[i];
        const rad = Math.max(1.2, n.radius * n.scale);
        const depthAlpha = Math.max(0.2, Math.min(1, (n.z2 + 200) / 380));

        // Outer glow
        const gradient = ctx.createRadialGradient(
          n.screenX, n.screenY, 0,
          n.screenX, n.screenY, rad * 3.5
        );
        gradient.addColorStop(0, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${depthAlpha * 0.8})`);
        gradient.addColorStop(0.5, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${depthAlpha * 0.25})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(n.screenX, n.screenY, rad * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Solid Core
        ctx.beginPath();
        ctx.arc(n.screenX, n.screenY, rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${depthAlpha * 0.95})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animFrameId.current = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main NeuralHero Component
// ---------------------------------------------------------------------------
export default function NeuralHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Dynamic role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }, []);

  // Framer Motion staggered orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-24 sm:pt-28 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#040711] overflow-hidden"
    >
      {/* 1. Ambient Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[380px] sm:h-[480px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-20" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-20" />

      {/* 2. 3D Neural Cortex Canvas Visual Centerpiece */}
      <NeuralCortexCanvas />

      {/* 3. Subtle HUD Scanline & Radial Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,7,17,0.5)_60%,rgba(4,7,17,0.95)_100%)]" 
      />
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.7)_50%)] bg-[length:100%_4px]" 
      />

      {/* 4. Main Hero Content Layer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Cortex Telemetry Pill */}
        <motion.div variants={itemVariants} className="mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_0_20px_rgba(0,242,254,0.18)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="tracking-wide">NEURAL CORTEX v2.4 // {portfolioData.personal.availability}</span>
          </div>
        </motion.div>

        {/* Profile Avatar & Cybernetic Ring */}
        <motion.div variants={itemVariants} className="relative mb-5 group">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 shadow-[0_0_25px_rgba(0,242,254,0.25)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#070b16]">
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                }}
              />
            </div>
          </div>
          {/* Online badge */}
          <span 
            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#040711] shadow-[0_0_12px_rgba(0,255,157,0.8)]" 
            title="System Active"
          />
        </motion.div>

        {/* Hero Name & Title */}
        <motion.div variants={itemVariants} className="space-y-2 mb-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {portfolioData.personal.name}
          </h1>
          <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span>@{portfolioData.personal.handle}</span>
            <span className="text-zinc-600">•</span>
            <span>Bengaluru, India</span>
          </div>
        </motion.div>

        {/* Dynamic Role Tagline */}
        <motion.div variants={itemVariants} className="h-9 sm:h-11 flex items-center justify-center mb-4">
          <div className="relative inline-block overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="text-base sm:text-2xl font-mono font-bold text-gradient-cyan block drop-shadow-sm"
              >
                {portfolioData.personal.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Hero Bio Description */}
        <motion.p 
          variants={itemVariants} 
          className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mb-7 leading-relaxed font-normal"
        >
          {portfolioData.personal.bio}
        </motion.p>

        {/* Quick Telemetry Chips */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 max-w-3xl"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-cyan-500/20 text-zinc-300 text-[11px] sm:text-xs font-mono">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Vigilo (AST Security Scanner)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-indigo-500/20 text-zinc-300 text-[11px] sm:text-xs font-mono">
            <Network className="w-3.5 h-3.5 text-indigo-400" />
            <span>SmartBuy-AI Agent</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-cyan-500/20 text-zinc-300 text-[11px] sm:text-xs font-mono">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>IIT Patna ERP (RBAC)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-purple-500/20 text-zinc-300 text-[11px] sm:text-xs font-mono">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>0.042s AST Fast Cache</span>
          </div>
        </motion.div>

        {/* Interactive Action CTAs */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 w-full mb-8"
        >
          {/* Primary CTA: Explore Projects */}
          <a
            href="#projects"
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold flex items-center justify-center gap-2 transition-all text-xs sm:text-sm font-mono shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Repositories</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Vigilo Showcase CTA */}
          <a
            href="#vigilo-showcase"
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#080d1a]/80 hover:bg-zinc-800/80 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs sm:text-sm font-mono shadow-[0_0_15px_rgba(0,255,157,0.15)] hover:-translate-y-0.5"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Vigilo Scanner</span>
          </a>

          {/* Launch Terminal CTA */}
          <a
            href="#terminal"
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#080d1a]/80 hover:bg-zinc-800/80 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs sm:text-sm font-mono shadow-[0_0_15px_rgba(0,242,254,0.12)] hover:-translate-y-0.5"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Launch CLI</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#080d1a]/80 hover:bg-zinc-800/80 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all text-xs sm:text-sm font-mono hover:-translate-y-0.5"
            aria-label="Copy Sanjiv's Email"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Social Badges & Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#080d1a]/80 border border-white/10 text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all text-xs shadow-sm hover:scale-110"
            aria-label="GitHub Profile"
            title="GitHub (@Sanjiv215)"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#080d1a]/80 border border-white/10 text-zinc-300 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-950/20 transition-all text-xs shadow-sm hover:scale-110"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://pypi.org/project/vigilo/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#080d1a]/80 border border-white/10 text-zinc-300 hover:text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-950/20 transition-all text-xs shadow-sm hover:scale-110"
            aria-label="PyPI Package (vigilo)"
            title="PyPI Package (vigilo)"
          >
            <FaPython className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          variants={itemVariants}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-1.5 text-zinc-500 text-[11px] font-mono select-none"
        >
          <span>EXPLORE ARCHITECTURE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
