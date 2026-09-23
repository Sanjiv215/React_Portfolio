import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const hasEmailConfig = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all form fields.' });
      return;
    }

    if (!hasEmailConfig) {
      setStatus({ type: 'info', message: `Email config is pending. Please reach out directly to ${portfolioData.personal.email}` });
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
    <section id="contact" className="py-8 sm:py-14 px-4 sm:px-6 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full studio-pill text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          Let’s Connect & Collaborate
        </h2>
        <p className="text-zinc-400 mt-1 text-xs sm:text-sm">
          Open to internship roles, software collaborations, and developer tooling discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="p-6 rounded-3xl studio-card space-y-4">
            <h3 className="text-base font-bold text-white">Contact Details</h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Feel free to reach out directly via email, phone, or connected social channels.
            </p>

            {/* Direct Points */}
            <div className="space-y-3.5 pt-4 border-t border-white/10">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Email Address</span>
                  <div className="flex items-center gap-1.5">
                    <a href={`mailto:${portfolioData.personal.email}`} className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors truncate font-medium">
                      {portfolioData.personal.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 rounded text-zinc-400 hover:text-white"
                      title="Copy Email"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Phone / WhatsApp</span>
                  <div className="flex items-center gap-1.5">
                    <a href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm font-mono text-white hover:text-emerald-300 transition-colors truncate font-medium">
                      {portfolioData.personal.phone}
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1 rounded text-zinc-400 hover:text-white"
                      title="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Location</span>
                  <p className="text-xs sm:text-sm font-medium text-white">{portfolioData.personal.location}</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2.5">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-full studio-pill hover:bg-white/10 text-zinc-200 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
              >
                <FaGithub className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono flex items-center justify-center gap-2 transition-all font-semibold"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 rounded-3xl studio-card space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-300 font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Sanjiv Prasad"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-300 font-medium">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-300 font-medium">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Software Role / Collaboration"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-300 font-medium">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            {status.message && (
              <div
                className={`p-3 rounded-xl text-xs font-mono flex items-center gap-2 ${
                  status.type === 'success'
                    ? 'bg-emerald-950/50 border border-emerald-500/40 text-emerald-300'
                    : 'bg-zinc-900 border border-white/15 text-zinc-200'
                }`}
              >
                {status.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 font-bold text-xs sm:text-sm font-mono flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              <span>{sending ? 'Sending Message...' : 'Send Message'}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
