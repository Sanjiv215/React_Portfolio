import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Shield, Code, Terminal, Cpu, Calendar, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const DOCK_ITEMS = [
  {
    id: 'finder',
    label: 'Finder (About)',
    href: '#about',
    icon: Folder,
    gradient: 'from-blue-500 to-cyan-400',
    color: 'text-white'
  },
  {
    id: 'vigilo',
    label: 'Vigilo Scanner',
    href: '#vigilo-showcase',
    icon: Shield,
    gradient: 'from-emerald-500 to-teal-600',
    color: 'text-white'
  },
  {
    id: 'projects',
    label: 'Repositories',
    href: '#projects',
    icon: Code,
    gradient: 'from-indigo-500 to-purple-600',
    color: 'text-white'
  },
  {
    id: 'skills',
    label: 'System Profiler',
    href: '#skills',
    icon: Cpu,
    gradient: 'from-cyan-600 to-blue-700',
    color: 'text-white'
  },
  {
    id: 'terminal',
    label: 'Terminal.app',
    href: '#terminal',
    icon: Terminal,
    gradient: 'from-zinc-800 to-zinc-950',
    color: 'text-emerald-400'
  },
  {
    id: 'experience',
    label: 'Calendar & History',
    href: '#experience',
    icon: Calendar,
    gradient: 'from-amber-500 to-orange-600',
    color: 'text-white'
  },
  {
    id: 'contact',
    label: 'Mail.app',
    href: '#contact',
    icon: Mail,
    gradient: 'from-sky-500 to-blue-600',
    color: 'text-white'
  }
];

export default function Dock() {
  return (
    <div className="fixed bottom-3 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto rounded-3xl bg-zinc-950/70 backdrop-blur-2xl border border-white/15 px-3 py-2 flex items-center gap-2 shadow-2xl shadow-black/80">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="relative group flex flex-col items-center">
              {/* Tooltip */}
              <div className="absolute -top-10 px-2.5 py-1 rounded-md bg-zinc-900/90 text-white text-[11px] font-sans font-medium whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                {item.label}
              </div>

              {/* Icon button */}
              <motion.a
                href={item.href}
                whileHover={{ scale: 1.28, y: -6 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/20 shadow-md flex items-center justify-center ${item.color} transition-all`}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
              </motion.a>

              {/* Running Dot Indicator */}
              <span className="w-1 h-1 rounded-full bg-white/60 mt-1" />
            </div>
          );
        })}

        {/* Divider */}
        <div className="w-[1px] h-8 bg-white/15 mx-1" />

        {/* GitHub External App Icon */}
        <div className="relative group flex flex-col items-center">
          <div className="absolute -top-10 px-2.5 py-1 rounded-md bg-zinc-900/90 text-white text-[11px] font-sans font-medium whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            GitHub (@Sanjiv215)
          </div>
          <motion.a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.28, y: -6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-zinc-900 border border-white/20 shadow-md flex items-center justify-center text-white"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
          <span className="w-1 h-1 rounded-full bg-white/30 mt-1" />
        </div>

        {/* LinkedIn External App Icon */}
        <div className="relative group flex flex-col items-center">
          <div className="absolute -top-10 px-2.5 py-1 rounded-md bg-zinc-900/90 text-white text-[11px] font-sans font-medium whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            LinkedIn Profile
          </div>
          <motion.a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.28, y: -6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-600 border border-white/20 shadow-md flex items-center justify-center text-white"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>
          <span className="w-1 h-1 rounded-full bg-white/30 mt-1" />
        </div>
      </div>
    </div>
  );
}
