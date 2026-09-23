import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Shield, Sparkles, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const INITIAL_HISTORY = [
  {
    type: 'system',
    content: `CORTEX NEURAL OS [Version 4.8.0-darwin-x64]
Diagnostic Shell & Security Telemetry Interface
Type "help" to list available telemetry commands or "vigilo" to initiate AST scan.`
  }
];

export default function InteractiveTerminal() {
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', content: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          content: `AVAILABLE CORTEX PROTOCOLS:
  help         - Display command manual
  about        - View identity matrix & system parameters
  projects     - List production grade architectures
  smartbuy     - Inspect SmartBuy-AI autonomous browser pipeline
  vigilo       - Trigger AST static security vulnerability scanner
  pysentra     - Python code diagnostics engine overview
  iit-patna    - IIT Patna ERP platform specs
  skills       - Query technical stack proficiency
  experience   - Display career milestones & internship telemetry
  education    - Display academic credentials & milestones
  github       - Query live repository telemetry
  contact      - Open direct communication protocol
  clear        - Clear console screen
  sudo hire-me - Execute priority recruitment protocol`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'response',
          content: `[IDENTITY MATRIX]
NAME:        ${portfolioData.personal.name}
ROLE:        ${portfolioData.personal.roleTitle}
CREDENTIALS: B.Tech CSE (AI/ML) @ SVYASA University
LOCATION:    ${portfolioData.personal.location}
STATUS:      ${portfolioData.personal.availability}

[CORE OBJECTIVE]
${portfolioData.personal.bio}`
        });
        break;

      case 'smartbuy':
      case 'smartbuy-ai':
      case 'smartbuyai':
        newHistory.push({
          type: 'response',
          content: `[SMARTBUY-AI // AGENTIC PRICE ENGINE]
Category: AI & Browser Agents
Stack: Python, FastAPI, React, Playwright, Scraper Pipelines
Capabilities:
  • Real-time price aggregation across global commerce nodes.
  • Autonomous agentic workflows with deal normalization.
  • High-throughput FastAPI asynchronous backend.
Source: https://github.com/Sanjiv215/SmartBuy-AI`
        });
        break;

      case 'vigilo':
        newHistory.push({
          type: 'response',
          content: `[VIGILO-CLI v1.2.0] Initializing AST Static Code Scanner...
Target scope: ./src / enterprise repositories

[✓] AST parsed: 2,410 nodes evaluated
[✓] Security Rules: CWE-95 (eval), CWE-89 (SQLi), CWE-798 (Hardcoded Keys), CWE-78 (OS Command)
[✓] Diagnostic Latency: 0.042s (Indexed cache hit)
[✓] Integrity Status: 0 Critical Vulnerabilities Detected!

PyPI Package: pip install vigilo
Source: https://github.com/Sanjiv215/VIGILO-Python-Package`
        });
        break;

      case 'pysentra':
        newHistory.push({
          type: 'response',
          content: `[PYSENTRA CODE DIAGNOSTICS]
License: Apache 2.0
Overview: Real-time static analysis and semantic AST inspection framework for Python codebases.
Source: https://github.com/Sanjiv215/PySentra`
        });
        break;

      case 'iit-patna':
      case 'erp':
      case 'erp-portal':
        newHistory.push({
          type: 'response',
          content: `[IIT PATNA ERP & TASK PLATFORM]
Role: Fullstack Developer Intern
Tech: React, JavaScript, Node.js, Express, MongoDB, RESTful APIs
Highlights:
  • Engineered Role-Based Access Control (RBAC) security matrix.
  • Optimized high-concurrency database queries for academic administrative workflows.`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          content: `PRODUCTION ARCHITECTURES:
${portfolioData.projects.map(p => `  • [${p.id.toUpperCase()}] ${p.title}\n    Category: ${p.category} | Tech: ${p.tech.join(', ')}\n    URL: ${p.liveUrl}`).join('\n\n')}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          content: `TELEMETRY STACK (${portfolioData.skills.length} Nodes Online):
${portfolioData.skills.map(s => `  • ${s.name.padEnd(18, ' ')} [${s.category}] - ${s.level}%`).join('\n')}`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'response',
          content: `CAREER & INTERNSHIP TELEMETRY:
${portfolioData.experiences.filter(e => e.type === 'Internship').map(e => `  [${e.period}] ${e.role} @ ${e.company}\n  ${e.description}`).join('\n\n')}`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'response',
          content: `ACADEMIC TELEMETRY:
${portfolioData.experiences.filter(e => e.type === 'Education').map(e => `  [${e.period}] ${e.role} @ ${e.company}\n  ${e.description}`).join('\n\n')}`
        });
        break;

      case 'github':
        newHistory.push({
          type: 'response',
          content: `GITHUB TELEMETRY (@Sanjiv215):
  • Core Focus: Python, FastAPI, React, AI Agents, AST Security Systems
  • Profile: ${portfolioData.personal.github}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          content: `COMMUNICATION NODES:
  Email:    ${portfolioData.personal.email}
  Phone:    ${portfolioData.personal.phone}
  GitHub:   ${portfolioData.personal.github}
  LinkedIn: ${portfolioData.personal.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo hire-me':
      case 'hire-me':
        triggerConfetti();
        newHistory.push({
          type: 'success',
          content: `[PROTOCOL EXECUTED] Recruitment pipeline acknowledged!
Connecting directly to ${portfolioData.personal.email}...
Ready to engineer high-performance systems together!`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          content: `ERR: Unknown protocol "${cmd}". Type "help" for active commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section id="terminal" className="py-12 sm:py-20 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
      <div>
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 border-b border-cyan-500/20 pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full cortex-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f2fe]" />
            <Terminal className="w-3.5 h-3.5" />
            <span>[ CONSOLE // INTERACTIVE TELEMETRY ]</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
            Developer Shell <span className="text-cyan-400 font-mono text-xl sm:text-2xl font-normal">05</span>
          </h2>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="cortex-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,242,254,0.1)] relative group"
        >
          {/* Corner HUD Brackets */}
          <div className="hud-corner-tl" />
          <div className="hud-corner-tr" />
          <div className="hud-corner-bl" />
          <div className="hud-corner-br" />

          {/* Top Bar */}
          <div className="bg-[#03060d] px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#00ff9d]" />
              <span className="text-xs font-mono text-cyan-300">sanjiv@cortex-node:~ (zsh)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-cyan-400 cortex-pill px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                SHELL LIVE
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm bg-black/70 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'user' && (
                  <div className="text-white font-bold flex items-center gap-2">
                    <span className="text-cyan-400">➜</span>
                    <span>{item.content}</span>
                  </div>
                )}
                {item.type === 'system' && (
                  <div className="text-cyan-300/80 border-l-2 border-cyan-400 pl-3 my-1 whitespace-pre-wrap">{item.content}</div>
                )}
                {item.type === 'response' && (
                  <pre className="text-zinc-200 whitespace-pre-wrap font-mono overflow-x-auto text-xs bg-black/60 p-3 rounded-xl border border-cyan-500/15">{item.content}</pre>
                )}
                {item.type === 'success' && (
                  <div className="text-emerald-300 font-medium p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 shadow-[0_0_20px_rgba(0,255,157,0.2)]">{item.content}</div>
                )}
                {item.type === 'error' && (
                  <div className="text-rose-400 font-mono bg-rose-950/40 p-2.5 rounded-xl border border-rose-500/30">{item.content}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleCommand} className="bg-[#03060d] px-4 py-3 border-t border-cyan-500/20 flex items-center gap-3">
            <span className="text-cyan-400 font-mono font-bold text-sm">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Try "projects", "vigilo", "skills", or "help"...'
              className="flex-1 bg-transparent text-cyan-200 font-mono text-xs sm:text-sm focus:outline-none placeholder:text-zinc-600 min-w-0"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 hover:text-white hover:bg-cyan-500/40 transition-all border border-cyan-500/30"
              aria-label="Send command"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
