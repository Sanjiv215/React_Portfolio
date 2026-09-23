import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const INITIAL_HISTORY = [
  {
    type: 'system',
    content: `Sanjiv OS [Version 3.2.0 (x86_64-apple-darwin26)]
Developer CLI Shell & Diagnostic Console
Type "help" to list commands or "vigilo" to run security analysis.`
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
          content: `Available commands:
  help         - Show this command manual
  about        - View Sanjiv's background & objective
  projects     - List the core production systems
  smartbuy     - SmartBuy-AI agentic browser architecture
  vigilo       - Execute simulated AST security vulnerability scan
  pysentra     - Python code diagnostics engine info
  iit-patna    - IIT Patna ERP Portal architecture details
  skills       - List technical capabilities (Python, FastAPI, React, etc.)
  experience   - Display career milestones & internship history
  education    - Display university & academic timeline
  github       - View GitHub metrics and top repositories
  contact      - Output communication channels (email & phone)
  clear        - Clear terminal screen
  sudo hire-me - Launch recruitment protocol 🎉`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'response',
          content: `NAME: ${portfolioData.personal.name}
ROLE: ${portfolioData.personal.roleTitle}
EDUCATION: B.Tech CSE (AI/ML) @ SVYASA University
LOCATION: ${portfolioData.personal.location}
STATUS: ${portfolioData.personal.availability}

OBJECTIVE:
${portfolioData.personal.bio}`
        });
        break;

      case 'smartbuy':
      case 'smartbuy-ai':
      case 'smartbuyai':
        newHistory.push({
          type: 'response',
          content: `[SMARTBUY-AI — AGENTIC PRICE COMPARISON BROWSER]
Category: AI & Agents
Tech Stack: Python, FastAPI, React, AI Agents, Browser Automation, Web Scraping
Description:
  • Autonomous agentic browser for real-time product price comparison across e-commerce platforms.
  • Interactive browser interface with instant filtering and deals normalization.
  • FastAPI backend supporting asynchronous task orchestration and scraper pipelines.
GitHub: https://github.com/Sanjiv215/SmartBuy-AI`
        });
        break;

      case 'vigilo':
        newHistory.push({
          type: 'response',
          content: `[VIGILO-CLI v1.2.0] Initializing AST Static Code Scanner...
Scanning targets in ./src / repositories ...

[✓] AST parsed: 2,410 nodes evaluated
[✓] Rule Matchers: CWE-95 (eval), CWE-89 (SQLi), CWE-798 (Secrets), CWE-78 (Cmd Injection)
[✓] Caching Engine: Active (0.042s latency)
[✓] Result: 0 Vulnerabilities Detected in current build!

PyPI Installation: pip install vigilo
GitHub: https://github.com/Sanjiv215/VIGILO-Python-Package`
        });
        break;

      case 'pysentra':
        newHistory.push({
          type: 'response',
          content: `[PYSENTRA DIAGNOSTIC ENGINE]
License: Apache 2.0
Description: Intelligent Python-based platform for automated code analysis, AST inspection, and security monitoring.
Repository: https://github.com/Sanjiv215/PySentra`
        });
        break;

      case 'iit-patna':
      case 'erp':
      case 'erp-portal':
        newHistory.push({
          type: 'response',
          content: `[IIT PATNA ERP & TASK MANAGER]
Role: Fullstack developer intern
Project: Enterprise Resource Planning (ERP) Portal & Task Manager
Tech Stack: React, JavaScript, NodeJS, ExpressJS, MongoDB, RESTful APIs
Key Contributions:
  • Architected role-based access control (RBAC) security system.
  • Built multi-tenant task assignment workflows & reporting dashboards.
  • Designed optimized database query schemas for high-concurrency client data.`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          content: `CORE PRODUCTION SYSTEMS:
${portfolioData.projects.map(p => `  • ${p.title}\n    Category: ${p.category} | Tech: ${p.tech.join(', ')}\n    URL: ${p.liveUrl}`).join('\n\n')}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          content: `TECHNICAL ARSENAL (${portfolioData.skills.length} Stack Tools):
${portfolioData.skills.map(s => `  • ${s.name.padEnd(20, ' ')} [${s.category}] - ${s.level}% (${s.desc})`).join('\n')}`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'response',
          content: `CAREER & INTERNSHIP HISTORY:
${portfolioData.experiences.filter(e => e.type === 'Internship').map(e => `  [${e.period}] ${e.role} @ ${e.company}\n  ${e.description}`).join('\n\n')}`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'response',
          content: `ACADEMIC TIMELINE:
${portfolioData.experiences.filter(e => e.type === 'Education').map(e => `  [${e.period}] ${e.role} @ ${e.company}\n  ${e.description}`).join('\n\n')}`
        });
        break;

      case 'github':
        newHistory.push({
          type: 'response',
          content: `GITHUB METRICS (@Sanjiv215):
  • Profile: ${portfolioData.personal.github}
  • Featured: SmartBuy-AI, Vigilo, ERP_PORTAL, PySentra, my_portfolio
  • Focus: Python, FastAPI, React, AI Agents, AST Security Tools`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          content: `COMMUNICATION CHANNELS:
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
          content: `🎉 HIRE PROTOCOL EXECUTED! 🎉
Initiating calendar connection for ${portfolioData.personal.email}...
Ready to engineer exceptional software together!`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          content: `Command not found: "${cmd}". Type "help" to see all valid commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section id="terminal" className="py-8 sm:py-14 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
      <div>
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 border-b border-white/10 pb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full studio-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Shell</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Interactive CLI Console
          </h2>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="studio-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl bg-zinc-950/90 relative group"
        >
          {/* Top highlight bar */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          {/* Bar */}
          <div className="bg-zinc-950 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-zinc-300">sanjiv@darwin:~ (zsh)</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 studio-pill px-2.5 py-0.5 rounded-full font-semibold">
              Interactive CLI
            </span>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm bg-zinc-950/80 min-h-[250px] max-h-[360px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'user' && (
                  <div className="text-white font-semibold flex items-center gap-2">
                    <span className="text-emerald-400">➜</span>
                    <span>{item.content}</span>
                  </div>
                )}
                {item.type === 'system' && (
                  <div className="text-zinc-400 border-l-2 border-cyan-500/50 pl-3 my-1 whitespace-pre-wrap">{item.content}</div>
                )}
                {item.type === 'response' && (
                  <pre className="text-zinc-200 whitespace-pre-wrap font-mono overflow-x-auto text-xs bg-zinc-900/40 p-3 rounded-xl border border-white/5">{item.content}</pre>
                )}
                {item.type === 'success' && (
                  <div className="text-emerald-300 font-medium p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]">{item.content}</div>
                )}
                {item.type === 'error' && (
                  <div className="text-red-400 font-mono bg-red-950/30 p-2.5 rounded-xl border border-red-500/20">{item.content}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleCommand} className="bg-zinc-950/90 px-4 py-3 border-t border-white/10 flex items-center gap-3">
            <span className="text-emerald-400 font-mono font-bold text-sm">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type "projects", "vigilo", "skills", or "help"...'
              className="flex-1 bg-transparent text-zinc-100 font-mono text-xs sm:text-sm focus:outline-none placeholder:text-zinc-600 min-w-0"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-white/10 text-zinc-200 hover:text-white hover:bg-white/20 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
