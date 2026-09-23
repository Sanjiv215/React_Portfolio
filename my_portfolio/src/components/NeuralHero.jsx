import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Layers,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaPython } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// ---------------------------------------------------------------------------
// 3D Neural Cortex Canvas (Linear/Apple Minimalist 60 FPS Visual Engine)
// ---------------------------------------------------------------------------
function CortexCanvasVisual() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Neural Cortex parameters
    const nodeCount = isMobile ? 32 : 64;
    const maxConnectionDist = isMobile ? 110 : 145;
    const focalLength = 340;

    // Palette: Clean Cyan, Electric Indigo, Luminescent Emerald
    const colors = [
      { r: 0, g: 242, b: 254 },   // Cyan
      { r: 99, g: 102, b: 241 },  // Indigo
      { r: 168, g: 85, b: 247 },  // Violet
      { r: 16, g: 185, b: 129 },  // Emerald
    ];

    // Dual-hemisphere brain geometry
    const nodes = [];
    const radX = isMobile ? 120 : 170;
    const radY = isMobile ? 75 : 105;
    const radZ = isMobile ? 90 : 125;

    for (let i = 0; i < nodeCount; i++) {
      const hemisphere = i % 2 === 0 ? -1 : 1;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.85 + 0.15;

      const offsetX = hemisphere * (radX * 0.32);
      const x = offsetX + (r * radX * Math.sin(phi) * Math.cos(theta) * 0.8);
      const y = (r * radY * Math.sin(phi) * Math.sin(theta)) * 0.88;
      const z = (r * radZ * Math.cos(phi));

      nodes.push({
        x, y, z,
        baseX: x, baseY: y, baseZ: z,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Connect nodes
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        const dz = nodes[i].baseZ - nodes[j].baseZ;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxConnectionDist) {
          connections.push({
            a: i,
            b: j,
            dist,
            pulses: []
          });
        }
      }
    }

    // Synaptic action pulse spawner
    const spawnPulse = () => {
      if (connections.length === 0) return;
      const conn = connections[Math.floor(Math.random() * connections.length)];
      if (conn.pulses.length < 2) {
        conn.pulses.push({
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
          color: Math.random() > 0.4 ? 'cyan' : 'violet',
          size: Math.random() * 2.2 + 2,
        });
      }
    };

    let pulseTick = 0;
    let angleY = 0;
    let angleX = 0.12;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / (width || 1) - 0.5;
      const y = (e.clientY - rect.top) / (height || 1) - 0.5;
      mousePos.current.targetX = x * 0.6;
      mousePos.current.targetY = y * 0.6;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      if (!prefersReducedMotion) {
        angleY += 0.003;
        angleX = 0.14 + Math.sin(angleY * 0.5) * 0.06 + mousePos.current.y * 0.4;
      }

      const totalAngleY = angleY + mousePos.current.x * 0.6;
      const cosY = Math.cos(totalAngleY);
      const sinY = Math.sin(totalAngleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D nodes
      const projected = nodes.map((node) => {
        const x1 = node.baseX * cosY - node.baseZ * sinY;
        const z1 = node.baseZ * cosY + node.baseX * sinY;
        const y2 = node.baseY * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.baseY * sinX;

        const scale = focalLength / (focalLength + z2 + 180);
        return {
          ...node,
          screenX: centerX + x1 * scale,
          screenY: centerY + y2 * scale,
          scale,
          z2,
        };
      });

      if (!prefersReducedMotion) {
        pulseTick++;
        if (pulseTick % (isMobile ? 16 : 8) === 0) spawnPulse();
      }

      // Draw connections
      for (let i = 0; i < connections.length; i++) {
        const conn = connections[i];
        const p1 = projected[conn.a];
        const p2 = projected[conn.b];
        if (!p1 || !p2) continue;

        const avgZ = (p1.z2 + p2.z2) / 2;
        const alpha = Math.max(0.03, Math.min(0.38, (1 - conn.dist / maxConnectionDist) * ((avgZ + 160) / 320)));

        ctx.beginPath();
        ctx.moveTo(p1.screenX, p1.screenY);
        ctx.lineTo(p2.screenX, p2.screenY);
        ctx.strokeStyle = `rgba(0, 242, 254, ${alpha * 0.65})`;
        ctx.lineWidth = Math.max(0.5, (p1.scale + p2.scale) * 0.45);
        ctx.stroke();

        // Synaptic light pulses
        if (!prefersReducedMotion) {
          for (let pIdx = conn.pulses.length - 1; pIdx >= 0; pIdx--) {
            const pulse = conn.pulses[pIdx];
            pulse.progress += pulse.speed;
            if (pulse.progress >= 1) {
              conn.pulses.splice(pIdx, 1);
              continue;
            }

            const px = p1.screenX + (p2.screenX - p1.screenX) * pulse.progress;
            const py = p1.screenY + (p2.screenY - p1.screenY) * pulse.progress;
            const pScale = (p1.scale + (p2.scale - p1.scale) * pulse.progress);

            const isCyan = pulse.color === 'cyan';
            ctx.beginPath();
            ctx.arc(px, py, pulse.size * pScale, 0, Math.PI * 2);
            ctx.fillStyle = isCyan ? 'rgba(0, 242, 254, 0.95)' : 'rgba(168, 85, 247, 0.95)';
            ctx.shadowColor = isCyan ? '#00f2fe' : '#a855f7';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      // Draw nodes
      const sorted = [...projected].sort((a, b) => a.z2 - b.z2);
      for (let i = 0; i < sorted.length; i++) {
        const n = sorted[i];
        const rad = Math.max(1, n.radius * n.scale);
        const depthAlpha = Math.max(0.2, Math.min(1, (n.z2 + 160) / 320));

        // Soft halo
        const grad = ctx.createRadialGradient(n.screenX, n.screenY, 0, n.screenX, n.screenY, rad * 3);
        grad.addColorStop(0, `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${depthAlpha * 0.7})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(n.screenX, n.screenY, rad * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Node core
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
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Clean Apple-meets-Linear Minimal Cortex Hero
// ---------------------------------------------------------------------------
export default function NeuralHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }, []);

  return (
    <section id="home" className="relative w-full pt-6 sm:pt-10 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* 1. Micro Telemetry Badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl text-zinc-300 text-[11px] sm:text-xs font-mono shadow-sm hover:border-cyan-500/30 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-400">STATUS //</span>
          <span className="text-zinc-100 font-medium">{portfolioData.personal.availability}</span>
        </div>
      </motion.div>

      {/* 2. Editorial Headline & Refined Linear-Style Typography */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-6 sm:mb-8"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-white leading-[0.98] sm:leading-[0.95]">
          {portfolioData.personal.name}
        </h1>
        
        <div className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl text-zinc-400 font-normal tracking-tight">
          Architecting{' '}
          <span className="text-zinc-100 font-semibold underline decoration-cyan-500/40 decoration-2 underline-offset-4">
            intelligent systems
          </span>{' '}
          &amp; resilient developer infrastructure.
        </div>

        {/* Dynamic Role Pill */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Specialty:</span>
          <div className="h-6 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="text-xs sm:text-sm font-mono font-bold text-cyan-400"
              >
                {portfolioData.personal.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* 3. Compact High-Signal Bio & CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center mb-10 sm:mb-12 w-full max-w-xl text-center"
      >
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {portfolioData.personal.bio}
        </p>

        {/* Minimal High-Craft Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Repositories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="#vigilo-showcase"
            className="px-4 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-zinc-200 hover:text-white hover:border-white/25 font-medium text-xs sm:text-sm flex items-center gap-2 transition-all hover:bg-white/[0.08]"
          >
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Vigilo Scanner</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-4 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-zinc-300 hover:text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-all hover:bg-white/[0.08]"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* 4. Full-Bleed Cinematic Cortex Frame (Centerpiece) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative rounded-2xl sm:rounded-3xl border border-white/[0.1] bg-[#05070f] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85)] group"
      >
        {/* Top Control Bar / Telemetry Strip */}
        <div className="h-10 sm:h-11 px-4 sm:px-5 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[11px] text-zinc-400 font-medium hidden sm:inline">
              cortex.diagnostic.live // sanjiv-prasad
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <Activity className="w-3 h-3 animate-pulse" /> 60 FPS
            </span>
            <span className="hidden md:inline text-zinc-500">AST LATENCY: 0.042s</span>
            <span className="text-cyan-400 font-semibold">CORTEX ONLINE</span>
          </div>
        </div>

        {/* 3D Visual Arena */}
        <div className="relative h-[340px] sm:h-[460px] md:h-[520px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#05070f] via-[#04060d] to-[#020307]">
          {/* Ambient Glows behind canvas */}
          <div className="absolute w-[450px] sm:w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute w-[350px] sm:w-[500px] h-[250px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Subtle Grid backdrop */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          {/* Canvas Engine */}
          <CortexCanvasVisual />

          {/* Left Overlay Card (Diagnostics) */}
          <div className="hidden lg:block absolute bottom-6 left-6 p-4 rounded-xl border border-white/[0.08] bg-black/60 backdrop-blur-xl text-left font-mono text-[11px] space-y-2 pointer-events-none">
            <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider">Engine Specs</div>
            <div className="flex items-center gap-3 text-zinc-300">
              <span className="text-cyan-400 font-semibold">Core:</span> Python, FastAPI, React
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <span className="text-emerald-400 font-semibold">Vigilo:</span> AST Static Analysis Engine
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <span className="text-indigo-400 font-semibold">Agents:</span> SmartBuy-AI Multi-agent
            </div>
          </div>

          {/* Right Overlay Badge (Social Links) */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2 p-1.5 rounded-full border border-white/[0.08] bg-black/60 backdrop-blur-xl z-20">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-blue-400 hover:bg-white/10 transition-colors"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://pypi.org/project/vigilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-emerald-400 hover:bg-white/10 transition-colors"
              title="PyPI Package (vigilo)"
            >
              <FaPython className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
