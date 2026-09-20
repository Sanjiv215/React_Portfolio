import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Folder, Shield, Code, Briefcase, Terminal, Cpu, Calendar, Mail } from 'lucide-react';
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
    id: 'freelance',
    label: 'Freelance Work',
    href: '#freelance',
    icon: Briefcase,
    gradient: 'from-violet-600 to-pink-500',
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

function DockIcon({ mouseX, item, isExternal = false, customIcon: CustomIcon = null, customBg = '' }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // macOS dock magnification curve (scales smoothly on hover, graceful fallback on mobile)
  const widthSync = useTransform(distance, [-100, 0, 100], [38, 56, 38]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 280, damping: 18 });

  const Icon = CustomIcon || item?.icon;
  const href = isExternal ? item?.href : item?.href;
  const label = item?.label;

  return (
    <div className="relative group flex flex-col items-center shrink-0">
      {/* Tooltip (hidden on touch/small devices) */}
      <div className="hidden sm:block absolute -top-11 px-2.5 py-1 rounded-md bg-zinc-900/90 text-white text-[11px] font-sans font-medium whitespace-nowrap border border-white/15 opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl z-50">
        {label}
      </div>

      {/* Dock Item Button */}
      <motion.a
        ref={ref}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={{ width, height: width }}
        whileTap={{ scale: 0.92 }}
        className={`rounded-xl sm:rounded-2xl ${
          customBg || `bg-gradient-to-br ${item?.gradient}`
        } border border-white/25 shadow-lg flex items-center justify-center ${
          item?.color || 'text-white'
        } transition-shadow hover:shadow-cyan-500/20`}
        aria-label={label}
      >
        {Icon && <Icon className="w-1/2 h-1/2 drop-shadow-sm" />}
      </motion.a>

      {/* Running App Dot */}
      <span className="w-1 h-1 rounded-full bg-white/70 mt-1" />
    </div>
  );
}

export default function Dock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-2 sm:bottom-3 inset-x-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto max-w-[98vw] sm:max-w-none overflow-x-auto no-scrollbar rounded-2xl sm:rounded-[24px] bg-white/40 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/30 dark:border-white/15 px-2.5 sm:px-3.5 py-1.5 sm:py-2 flex items-end gap-1.5 sm:gap-2.5 shadow-2xl shadow-black/40"
        style={{ minHeight: '52px' }}
      >
        {DOCK_ITEMS.map((item) => (
          <DockIcon key={item.id} mouseX={mouseX} item={item} />
        ))}

        {/* Divider */}
        <div className="w-[1px] h-7 sm:h-9 bg-black/15 dark:bg-white/20 mx-0.5 sm:mx-1 mb-2 self-center shrink-0" />

        {/* GitHub App Icon */}
        <DockIcon
          mouseX={mouseX}
          item={{ label: 'GitHub (@Sanjiv215)', href: portfolioData.personal.github }}
          isExternal
          customIcon={FaGithub}
          customBg="bg-zinc-900 text-white"
        />

        {/* LinkedIn App Icon */}
        <DockIcon
          mouseX={mouseX}
          item={{ label: 'LinkedIn Profile', href: portfolioData.personal.linkedin }}
          isExternal
          customIcon={FaLinkedin}
          customBg="bg-blue-600 text-white"
        />
      </motion.div>
    </div>
  );
}
