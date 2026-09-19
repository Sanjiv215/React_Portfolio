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
  about        - View Sanjiv's background & engineering philosophy
  projects     - List the 4 featured systems
  vigilo       - Execute simulated AST security vulnerability scan
  pysentra     - Python code diagnostics engine info
  iit-patna    - IIT Patna ERP Portal architecture details
  thewoodwise  - The WoodWise full-stack e-commerce architecture
  skills       - List technical capabilities & security tools
  experience   - Display career milestones & internship history
  github       - View GitHub metrics and top repositories
  contact      - Output communication channels
  clear        - Clear terminal screen
  sudo hire-me - Launch recruitment protocol 🎉`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'response',
          content: `NAME: ${portfolioData.personal.name}
ROLE: ${portfolioData.personal.roleTitle}
EDUCATION: B.Tech Computer Science (AI & ML) @ UIT
LOCATION: ${portfolioData.personal.location}
STATUS: ${portfolioData.personal.availability}

BACKGROUND & MINDSET:
${portfolioData.personal.story}`
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
Description: Lightweight Python static code analyzer and AST diagnostic tool.
Repository: https://github.com/Sanjiv215/PySentra`
        });
        break;

      case 'iit-patna':
        newHistory.push({
          type: 'response',
          content: `[IIT PATNA ERP & TASK MANAGER]
Role: Full-Stack Development Intern
Project: Enterprise Resource Planning (ERP) Portal & Task Manager
Tech Stack: React, JavaScript, Node.js, Express, MongoDB, REST APIs
Key Contributions:
  • Architected role-based access control (RBAC) security system.
  • Built multi-tenant task assignment workflows & reporting dashboards.
  • Designed optimized database query schemas for high-concurrency client data.`
        });
        break;

      case 'thewoodwise':
        newHistory.push({
          type: 'response',
          content: `[THE WOODWISE FULL-STACK E-COMMERCE]
Tech Stack: React, Vite, Node.js, Express, MongoDB, Nodemailer, Axios
Features:
  • Email OTP user registration & password recovery.
  • Persistent cart and wishlist state management.
  • Dynamic product search, filtering, and pagination.
  • Session-token authenticated REST endpoints.`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          content: `FEATURED 4 SYSTEMS:
${portfolioData.projects.map(p => `  • ${p.title}\n    Category: ${p.category} | Tech: ${p.tech.join(', ')}\n    URL: ${p.liveUrl}`).join('\n\n')}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          content: `TECHNICAL ARSENAL:
${portfolioData.skills.map(s => `  • ${s.name.padEnd(30, ' ')} [${s.category}] - ${s.level}%`).join('\n')}`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'response',
          content: `CAREER & EDUCATION HISTORY:
${portfolioData.experiences.map(e => `  [${e.period}] ${e.role} @ ${e.company} (${e.type})\n  ${e.description}`).join('\n\n')}`
        });
        break;

      case 'github':
        newHistory.push({
          type: 'response',
          content: `GITHUB METRICS (@Sanjiv215):
  • Profile: ${portfolioData.personal.github}
  • Featured 4: Vigilo-Python-Package, PySentra, ERP_PORTAL, TheWoodWise
  • Focus: DevTools, Security AST, Full-Stack Architecture`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          content: `COMMUNICATION CHANNELS:
  Email:    ${portfolioData.personal.email}
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
    <section id="terminal" className="py-24 px-4 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-2"
          >
            05 / Interactive CLI
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Developer Console
          </motion.h2>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-zinc-950/90"
        >
          {/* Bar */}
          <div className="bg-zinc-900/60 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="text-xs font-mono text-zinc-400 ml-2">sanjiv@darwin:~ (zsh)</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
              vigilo v1.2
            </span>
          </div>

          {/* Body */}
          <div className="p-5 font-mono text-xs sm:text-sm bg-zinc-950/95 min-h-[300px] max-h-[400px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'user' && (
                  <div className="text-white font-medium">{item.content}</div>
                )}
                {item.type === 'system' && (
                  <div className="text-zinc-500 border-l border-zinc-700 pl-3 my-1 whitespace-pre-wrap">{item.content}</div>
                )}
                {item.type === 'response' && (
                  <pre className="text-zinc-300 whitespace-pre-wrap font-mono">{item.content}</pre>
                )}
                {item.type === 'success' && (
                  <div className="text-emerald-400 font-medium p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20">{item.content}</div>
                )}
                {item.type === 'error' && (
                  <div className="text-red-400 font-mono">{item.content}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleCommand} className="bg-zinc-900/40 px-4 py-3 border-t border-white/10 flex items-center gap-3">
            <span className="text-emerald-400 font-mono font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Try typing "vigilo", "thewoodwise", "projects", or "help"...'
              className="flex-1 bg-transparent text-zinc-200 font-mono text-xs sm:text-sm focus:outline-none placeholder:text-zinc-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-white/10 text-zinc-300 hover:text-white hover:bg-white/20 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
