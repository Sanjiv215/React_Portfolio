import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(width / 22), 60);
    const particles = [];

    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.4 + 0.15,
        colorType: Math.random() > 0.6 ? 'cyan' : Math.random() > 0.3 ? 'emerald' : 'white'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight = theme === 'light';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= Math.cos(angle) * force * 1.4;
            p.y -= Math.sin(angle) * force * 1.4;
          }
        }

        let pFill = isLight ? `rgba(100, 116, 139, ${p.alpha * 0.6})` : `rgba(255, 255, 255, ${p.alpha})`;
        if (!isLight) {
          if (p.colorType === 'cyan') pFill = `rgba(56, 189, 248, ${p.alpha + 0.2})`;
          else if (p.colorType === 'emerald') pFill = `rgba(52, 211, 153, ${p.alpha + 0.2})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = pFill;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * (isLight ? 0.06 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isLight
              ? `rgba(148, 163, 184, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <>
      {/* Ambient background radiant aura lights (Vespine-inspired lightness & contrast) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[15%] left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] opacity-70 animate-pulse transition-opacity duration-1000" />
        <div className="absolute top-1/3 -right-[10%] w-[650px] h-[650px] rounded-full bg-violet-600/10 blur-[150px] opacity-60 transition-opacity duration-1000" />
        <div className="absolute top-2/3 -left-[10%] w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-[140px] opacity-65 transition-opacity duration-1000" />
        <div className="absolute -bottom-[10%] right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px] opacity-60 transition-opacity duration-1000" />
      </div>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-60 transition-opacity duration-500"
      />
    </>
  );
}
