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

    const particleCount = Math.min(Math.floor(width / 20), 55);
    const particles = [];
    const pulses = [];

    const mouse = {
      x: null,
      y: null,
      radius: 160
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
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        colorType: Math.random() > 0.5 ? 'cyan' : Math.random() > 0.25 ? 'emerald' : 'violet'
      });
    }

    let pulseTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = theme === 'light';

      // Draw subtle neural grid overlay
      if (!isLight) {
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.025)';
        ctx.lineWidth = 1;
        const gridSize = 64;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      // Update and draw particles
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
            p.x -= Math.cos(angle) * force * 1.5;
            p.y -= Math.sin(angle) * force * 1.5;
          }
        }

        let pColor = isLight ? `rgba(15, 23, 42, ${p.alpha * 0.6})` : `rgba(0, 242, 254, ${p.alpha})`;
        if (!isLight) {
          if (p.colorType === 'emerald') pColor = `rgba(0, 255, 157, ${p.alpha + 0.1})`;
          else if (p.colorType === 'violet') pColor = `rgba(139, 92, 246, ${p.alpha + 0.1})`;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = pColor;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * (isLight ? 0.08 : 0.16);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isLight
              ? `rgba(148, 163, 184, ${alpha})`
              : p.colorType === 'emerald'
              ? `rgba(0, 255, 157, ${alpha})`
              : `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();

            // Spawn synaptic electrical pulses periodically
            if (pulseTimer % 45 === 0 && Math.random() > 0.85 && pulses.length < 12) {
              pulses.push({
                fromX: p.x,
                fromY: p.y,
                toX: p2.x,
                toY: p2.y,
                progress: 0,
                speed: 0.02 + Math.random() * 0.03,
                color: p.colorType
              });
            }
          }
        }
      }

      // Draw active electrical synaptic pulses
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pulse = pulses[k];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(k, 1);\n          continue;
        }

        const currX = pulse.fromX + (pulse.toX - pulse.fromX) * pulse.progress;
        const currY = pulse.fromY + (pulse.toY - pulse.fromY) * pulse.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color === 'emerald' ? '#00ff9d' : '#00f2fe';
        ctx.shadowBlur = 8;
        ctx.shadowColor = pulse.color === 'emerald' ? '#00ff9d' : '#00f2fe';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      pulseTimer++;
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
      {/* Ambient glowing neural aura gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] left-1/3 w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[150px] opacity-70 animate-pulse" />
        <div className="absolute top-1/3 -right-[15%] w-[650px] h-[650px] rounded-full bg-violet-600/10 blur-[160px] opacity-60" />
        <div className="absolute top-2/3 -left-[10%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[150px] opacity-65" />
      </div>

      <canvas
        ref={canvasRef}
        aria-hidden=\"true\"
        className=\"fixed inset-0 pointer-events-none z-0 opacity-70 transition-opacity duration-500\"
      />
    </>
  );
}
