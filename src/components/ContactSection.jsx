import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import WindowFrame from './MacOS/WindowFrame';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const hasEmailConfig = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all form fields.' });
      return;
    }

    if (!hasEmailConfig) {
      setStatus({ type: 'info', message: `Form endpoint unavailable. Please email directly to ${portfolioData.personal.email}` });
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: portfolioData.personal.email
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: 'success', message: 'Message sent successfully! I will respond promptly.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Failed to send message via form. Please email directly.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 relative z-10 max-w-4xl mx-auto">
      <WindowFrame title="Mail.app — New Message to Sanjiv Prasad" icon={Mail}>
        {/* Section Header */}
        <div className="mb-6 pb-4 border-b border-white/10">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
            Communication
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Send Message
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/10 space-y-4">
              <h3 className="text-sm font-semibold text-white">Contact Card</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Open for software engineering opportunities, developer tooling collaborations, and technical discussions.
              </p>

              {/* Direct Points */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">Direct Email</span>
                    <div className="flex items-center gap-1.5">
                      <a href={`mailto:${portfolioData.personal.email}`} className="text-xs font-mono text-white hover:text-zinc-300 transition-colors truncate">
                        {portfolioData.personal.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded text-zinc-400 hover:text-white"
                        title="Copy Email"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">Location</span>
                    <p className="text-xs font-medium text-white">{portfolioData.personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                >
                  <FaLinkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-5 rounded-xl bg-zinc-900/60 border border-white/10 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400">From (Name)</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Sanjiv Prasad"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-white/10 text-white text-xs focus:border-white/30 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-zinc-400">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-white/10 text-white text-xs focus:border-white/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Engineering Role / Project Opportunity"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-white/10 text-white text-xs focus:border-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-zinc-400">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-white/10 text-white text-xs focus:border-white/30 focus:outline-none transition-colors resize-none"
                />
              </div>

              {status.message && (
                <div
                  className={`p-2.5 rounded-lg text-xs font-mono flex items-center gap-2 ${
                    status.type === 'success'
                      ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300'
                      : 'bg-zinc-900 border border-white/10 text-zinc-300'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> : <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full py-2.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-xs font-mono flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
              >
                <span>{sending ? 'Sending Message...' : 'Send Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      </WindowFrame>
    </section>
  );
}
