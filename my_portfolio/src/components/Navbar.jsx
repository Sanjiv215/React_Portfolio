import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, Shield, ArrowUpRight, Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Vigilo', href: '#vigilo-showcase' },
  { name: 'Projects', href: '#projects' },
  { name: 'Freelance', href: '#freelance' },
  { name: 'Skills', href: '#skills' },
  { name: 'Terminal', href: '#terminal' },
  { name: 'Timeline', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 140;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#060a14]/90 backdrop-blur-2xl border-cyan-500/20 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(0,242,254,0.12)]'
            : 'bg-[#080d1a]/70 backdrop-blur-xl border-white/10 shadow-xl'
        }`}
      >
        {/* Brand & Telemetry Indicator */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-black text-xs font-mono font-black shadow-[0_0_12px_rgba(0,242,254,0.5)] border border-cyan-400/40">
              C
            </div>
            <span className="font-mono text-xs sm:text-sm font-bold tracking-tight">
              sanjiv<span className="text-cyan-400">.cortex</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-[10px] font-mono text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>NODE // LIVE</span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-0.5 text-xs font-mono font-medium text-zinc-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '') || (link.name === 'Timeline' && activeSection === 'experience');
            const isVigilo = link.name === 'Vigilo';
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 font-semibold shadow-[0_0_12px_rgba(0,242,254,0.2)]'
                      : 'hover:text-zinc-200 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {isVigilo && <Shield className="w-3 h-3 text-emerald-400" />}
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-400/40 transition-all text-xs"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-cyan-300" /> : <Moon className="w-3.5 h-3.5 text-zinc-700" />}
          </button>

          {/* Resume Download */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Sanjiv-Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition-all font-mono font-bold shadow-[0_0_18px_rgba(0,242,254,0.4)]"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 inset-x-3 rounded-2xl p-5 border border-cyan-500/20 md:hidden shadow-2xl bg-[#080d1a]/95 backdrop-blur-3xl"
          >
            <ul className="flex flex-col gap-2 font-mono text-xs text-zinc-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3.5 rounded-xl hover:bg-white/5 hover:text-cyan-300 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {link.name === 'Vigilo' && <Shield className="w-4 h-4 text-emerald-400" />}
                      <span>{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10 mt-1">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Sanjiv-Resume.pdf"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-cyan-400 text-black font-bold text-xs font-mono shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
