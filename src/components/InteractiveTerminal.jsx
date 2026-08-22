import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const INITIAL_HISTORY = [
  {
    type: 'system',
    content: 'Welcome to Sanjiv OS v2.4.0 (x86_64-apple-darwin26)\nType "help" to view all available commands.'
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
      particleCount: 120,
      spread: 70,
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
  help           - Show this menu
  about          - Display engineer bio & availability
  skills         - List technical skills & categories
  projects       - Show featured portfolio applications
  contact        - Output email address & social links
  clear          - Reset terminal history
  sudo hire-me   - Trigger instant hiring sequence 🎉`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'response',
          content: `${portfolioData.personal.name} | ${portfolioData.personal.roleTitle}
Location: ${portfolioData.personal.location}
Status: ${portfolioData.personal.availability}
Bio: ${portfolioData.personal.bio}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          content: `Technical Stack:
${portfolioData.skills.map(s => `• ${s.name} (${s.category})`).join('\n')}`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          content: `Featured Projects:
${portfolioData.projects.map(p => `• ${p.title}: ${p.shortDescription} [${p.liveUrl}]`).join('\n')}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          content: `Email: ${portfolioData.personal.email}
GitHub: ${portfolioData.personal.github}
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
          content: `🎉 HIRE SEQUENCE ACTIVATED! 🎉
Requesting calendar invite for ${portfolioData.personal.email}...
Let's build something extraordinary together!`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          content: `Command not found: "${cmd}". Type "help" for a list of available commands.`
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
            Geeky Developer <span className="text-gradient-cyan">Terminal</span>
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
              <span>bash - sanjiv@macbook-pro:~</span>
            </div>
            <span className="text-[10px] font-mono text-gray-500">utf-8</span>
          </div>

          {/* Body */}
          <div className="p-5 font-mono text-xs sm:text-sm bg-slate-950/95 min-h-[320px] max-h-[420px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'user' && (
                  <div className="text-cyan-400 font-bold">{item.content}</div>
                )}
                {item.type === 'system' && (
                  <div className="text-gray-400 border-l-2 border-cyan-500 pl-3 my-1">{item.content}</div>
                )}
                {item.type === 'response' && (
                  <pre className="text-gray-300 whitespace-pre-wrap font-mono">{item.content}</pre>
                )}
                {item.type === 'success' && (
                  <div className="text-emerald-400 font-bold p-3 rounded bg-emerald-950/40 border border-emerald-500/30">{item.content}</div>
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
              placeholder='Try typing "help" or "sudo hire-me"...'
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
