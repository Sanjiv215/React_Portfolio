import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, FileText, Terminal, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Vigilo', href: '#vigilo-showcase' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Terminal', href: '#terminal' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 glass-panel px-5 py-2.5 flex items-center justify-between ${
          scrolled ? 'shadow-2xl border-white/15 bg-zinc-950/85 backdrop-blur-xl' : 'border-white/10 bg-zinc-950/50'
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors"
        >
          <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xs font-mono font-bold">
            S
          </div>
          <span className="font-mono">sanjiv<span className="text-zinc-500">.dev</span></span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            const isVigilo = link.name === 'Vigilo';
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive ? 'text-white bg-white/10 font-semibold' : 'hover:text-zinc-200 hover:bg-white/5'
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
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all text-xs"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-zinc-300" /> : <Moon className="w-3.5 h-3.5 text-zinc-700" />}
          </button>

          {/* Resume Link */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Sanjiv-Resume.pdf"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all font-mono"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300"
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
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 glass-panel rounded-3xl p-6 border border-white/10 md:hidden shadow-2xl bg-zinc-950/95"
          >
            <ul className="flex flex-col gap-3 font-medium text-sm text-zinc-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-2 py-2 px-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.name === 'Vigilo' && <Shield className="w-4 h-4 text-emerald-400" />}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Sanjiv-Resume.pdf"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs font-mono"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
