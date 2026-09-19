import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery, Sliders, Sun, Moon, Search, FileText } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';

export default function MenuBar() {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState('');
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);

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
    <header className="fixed top-0 inset-x-0 z-50 h-7 bg-zinc-950/70 backdrop-blur-2xl border-b border-white/10 text-zinc-300 text-[12px] font-sans px-3 flex items-center justify-between select-none">
      {/* Left Menu Section */}
      <div className="flex items-center gap-4 relative">
        {/* Apple Logo */}
        <div className="relative">
          <button
            onClick={() => setAppleMenuOpen(!appleMenuOpen)}
            className="text-white hover:text-zinc-300 transition-colors p-0.5 rounded focus:outline-none"
            aria-label="Apple Menu"
          >
            <Apple className="w-3.5 h-3.5 fill-white text-white" />
          </button>

          {/* Apple Dropdown */}
          {appleMenuOpen && (
            <div
              className="absolute top-7 left-0 w-56 rounded-xl bg-zinc-900/90 backdrop-blur-2xl border border-white/15 shadow-2xl p-1.5 text-xs text-zinc-200 z-50"
              onMouseLeave={() => setAppleMenuOpen(false)}
            >
              <div className="px-2.5 py-1.5 font-semibold text-white border-b border-white/10 flex items-center justify-between">
                <span>About This Engineer</span>
                <span className="text-[10px] font-mono text-zinc-400">macOS 15</span>
              </div>
              <a
                href="#about"
                onClick={() => setAppleMenuOpen(false)}
                className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                System Overview
              </a>
              <a
                href="#skills"
                onClick={() => setAppleMenuOpen(false)}
                className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Tech Specs &amp; Stack
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                download="Sanjiv-Resume.pdf"
                onClick={() => setAppleMenuOpen(false)}
                className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Download Resume PDF
              </a>
              <div className="border-t border-white/10 my-1" />
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAppleMenuOpen(false)}
                className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                GitHub Profile (@Sanjiv215)
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAppleMenuOpen(false)}
                className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          )}
        </div>

        {/* Active App Title */}
        <span className="font-semibold text-white tracking-tight">
          Sanjiv Prasad
        </span>

        {/* Navigation Menus */}
        <nav className="hidden sm:flex items-center gap-3 text-zinc-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#vigilo-showcase" className="hover:text-white transition-colors">Vigilo</a>
          <a href="#projects" className="hover:text-white transition-colors">Repositories</a>
          <a href="#skills" className="hover:text-white transition-colors">Tech Specs</a>
          <a href="#terminal" className="hover:text-white transition-colors">Terminal</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

      {/* Right Status Items */}
      <div className="flex items-center gap-3 text-zinc-300 text-[11px] font-mono">
        {/* Resume Button */}
        <a
          href={portfolioData.personal.resumeUrl}
          download="Sanjiv-Resume.pdf"
          className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors text-[11px]"
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
        <Wifi className="w-3.5 h-3.5" />

        {/* Battery */}
        <div className="flex items-center gap-1">
          <span>100%</span>
          <Battery className="w-3.5 h-3.5" />
        </div>

        {/* Control Center */}
        <Sliders className="w-3.5 h-3.5 hidden sm:block" />

        {/* Clock */}
        <span className="font-sans text-white text-[12px] pl-1 font-medium">
          {time || 'Sat Sep 19 10:30 PM'}
        </span>
      </div>
    </header>
  );
}
