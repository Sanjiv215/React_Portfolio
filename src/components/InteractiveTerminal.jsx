import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Shield, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const INITIAL_HISTORY = [
  {
    type: 'system',
    content: `Welcome to Sanjiv OS v3.0.0 (x86_64-apple-darwin26)
Interactive Shell & Developer Command Center
Type "help" to explore commands or "vigilo" to run a security scan.`
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
  help         - Show this help menu
  about        - View Sanjiv's background, journey & engineering philosophy
  vigilo       - Execute simulated AST security vulnerability scan
  iit-patna    - Details regarding Full-Stack ERP development at IIT Patna
  skills       - List technical capabilities & security tools
  projects     - Output featured applications and PyPI package
  experience   - Display career milestones & internship history
  github       - View GitHub profile stats & repositories
  contact      - Output direct contact details & social channels
  clear        - Clear terminal screen
  sudo hire-me - Launch celebratory recruitment protocol 🎉`
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
[✓] Caching Engine: Active (0.042s scan latency)
[✓] Result: 0 Vulnerabilities Detected in current build!

PyPI Installation: pip install vigilo
GitHub: https://github.com/Sanjiv215/VIGILO-Python-Package`
        });
        break;

      case 'iit-patna':
        newHistory.push({
          type: 'response',
          content: `[IIT PATNA INTERNSHIP DETAILS]
Role: Full-Stack Development Intern
Project: Enterprise Resource Planning (ERP) Portal & Task Manager
Tech Stack: React, JavaScript, Node.js, Express, MongoDB, REST APIs
Key Contributions:
  • Architected role-based access control (RBAC) security system.
  • Built multi-tenant task assignment workflows & reporting dashboards.
  • Designed optimized database query schemas for high-concurrency client data.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          content: `TECHNICAL ARSENAL:
${portfolioData.skills.map(s => `  • ${s.name.padEnd(30, ' ')} [${s.category}] - ${s.level}%`).join('\n')}`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          content: `FEATURED REPOSITORIES & SYSTEMS:
${portfolioData.projects.map(p => `  • ${p.title}\n    Category: ${p.category} | Tech: ${p.tech.join(', ')}\n    URL: ${p.liveUrl}`).join('\n\n')}`
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
  • Flagship Repos: Vigilo-Python-Package, Advait, SmartBuy-AI, ERP_PORTAL, PySentra, PotHole-Detector
  • Focus Areas: DevTools, Security AST, AI Agents, Full-Stack React/FastAPI`
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
    <section id="terminal" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            Interactive CLI Shell
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight"
          >
            Developer Command <span className="text-gradient-cyan">Terminal</span>
          </motion.h2>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/50"
        >
          {/* Bar */}
          <div className="bg-slate-950 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>sanjiv@darwin:~ (zsh)</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
              vigilo v1.2
            </span>
          </div>

          {/* Body */}
          <div className="p-5 font-mono text-xs sm:text-sm bg-slate-950/95 min-h-[320px] max-h-[440px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'user' && (
                  <div className="text-cyan-400 font-bold">{item.content}</div>
                )}
                {item.type === 'system' && (
                  <div className="text-gray-400 border-l-2 border-cyan-500 pl-3 my-1 whitespace-pre-wrap">{item.content}</div>
                )}
                {item.type === 'response' && (
                  <pre className="text-gray-300 whitespace-pre-wrap font-mono">{item.content}</pre>
                )}
                {item.type === 'success' && (
                  <div className="text-emerald-400 font-bold p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">{item.content}</div>
                )}
                {item.type === 'error' && (
                  <div className="text-red-400 font-mono">{item.content}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Form Input */}
          <form onSubmit={handleCommand} className="bg-slate-900/90 px-4 py-3 border-t border-white/10 flex items-center gap-3">
            <span className="text-emerald-400 font-mono font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Try typing "vigilo", "iit-patna", "skills", or "help"...'
              className="flex-1 bg-transparent text-gray-200 font-mono text-xs sm:text-sm focus:outline-none placeholder:text-gray-600"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
