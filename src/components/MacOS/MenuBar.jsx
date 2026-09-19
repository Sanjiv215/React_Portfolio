import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Sliders, Sun, Moon, FileText, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';

export default function MenuBar() {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setTime(formatted.replace(/,/g, ''));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-7 bg-zinc-950/75 dark:bg-zinc-950/80 backdrop-blur-2xl border-b border-white/10 text-zinc-300 text-[12px] font-sans px-3 flex items-center justify-between select-none">
      {/* Left Menu Section */}
      <div className="flex items-center gap-3 relative">
        {/* Custom 'S' Monogram Icon (replaces Apple logo) */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-white/10 text-white font-bold text-[13px] tracking-tighter font-mono transition-colors focus:outline-none"
            aria-label="Sanjiv System Menu"
            title="Sanjiv OS"
          >
            <div className="w-4 h-4 rounded-[4px] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-black text-white shadow-sm border border-white/20">
              S
            </div>
          </button>

          {/* System Dropdown */}
          {menuOpen && (
            <div
              className="absolute top-7 left-0 w-60 rounded-xl bg-zinc-900/95 backdrop-blur-3xl border border-white/15 shadow-2xl p-1.5 text-xs text-zinc-200 z-50 animate-in fade-in zoom-in-95 duration-100"
              onMouseLeave={() => setMenuOpen(false)}
            >
              <div className="px-2.5 py-2 font-semibold text-white border-b border-white/10 flex items-center gap-2.5">
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  className="w-7 h-7 rounded-full object-cover border border-white/20 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <div className="text-xs font-bold leading-none">{portfolioData.personal.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-0.5">{portfolioData.personal.roleTitle}</div>
                </div>
              </div>

              <div className="py-1">
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  About This Engineer
                </a>
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Production Repositories
                </a>
                <a
                  href="#freelance"
                  onClick={() => setMenuOpen(false)}
                  className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Freelance Client Work
                </a>
                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  System Profiler &amp; Specs
                </a>
              </div>

              <div className="border-t border-white/10 my-1" />

              <a
                href={portfolioData.personal.resumeUrl}
                download="Sanjiv-Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium text-emerald-400 hover:text-white"
              >
                Download Resume (PDF)
              </a>

              <div className="border-t border-white/10 my-1" />

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                GitHub Profile (@Sanjiv215)
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          )}
        </div>

        {/* Active App Title */}
        <span className="font-semibold text-white tracking-tight pr-1">
          Sanjiv Prasad
        </span>

        {/* Standard macOS Menu Items */}
        <div className="hidden md:flex items-center gap-3 text-zinc-300 text-[12px]">
          <span className="hover:text-white cursor-default transition-colors">File</span>
          <span className="hover:text-white cursor-default transition-colors">Edit</span>
          <span className="hover:text-white cursor-default transition-colors">View</span>
          <span className="hover:text-white cursor-default transition-colors">Window</span>
          <span className="hover:text-white cursor-default transition-colors">Help</span>
        </div>

        {/* Quick Nav Anchor Links */}
        <nav className="hidden lg:flex items-center gap-3 text-zinc-400 pl-2 border-l border-white/10">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#vigilo-showcase" className="hover:text-white transition-colors">Vigilo</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#freelance" className="hover:text-white transition-colors">Freelance</a>
          <a href="#skills" className="hover:text-white transition-colors">Tech Specs</a>
          <a href="#terminal" className="hover:text-white transition-colors">Terminal</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

      {/* Right Status Items */}
      <div className="flex items-center gap-3 text-zinc-300 text-[11px] font-mono">
        {/* Resume Action */}
        <a
          href={portfolioData.personal.resumeUrl}
          download="Sanjiv-Resume.pdf"
          className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors text-[11px]"
        >
          <FileText className="w-3 h-3" />
          <span>Resume</span>
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-1 hover:text-white transition-colors"
          title="Toggle Dark / Light Mode"
        >
          {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-zinc-300" /> : <Moon className="w-3.5 h-3.5 text-zinc-700" />}
        </button>

        {/* Wi-Fi */}
        <Wifi className="w-3.5 h-3.5 text-zinc-300" />

        {/* Battery */}
        <div className="flex items-center gap-1">
          <span>100%</span>
          <Battery className="w-3.5 h-3.5 text-zinc-300" />
        </div>

        {/* Control Center */}
        <Sliders className="w-3.5 h-3.5 hidden sm:block text-zinc-300" />

        {/* Clock */}
        <span className="font-sans text-white text-[12px] pl-1 font-medium whitespace-nowrap">
          {time || 'Sat Sep 19 10:30 PM'}
        </span>
      </div>
    </header>
  );
}
