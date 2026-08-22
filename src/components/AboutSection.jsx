import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Heart, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const valueIcons = {
  Layers: Layers,
  Zap: Zap,
  Heart: Heart
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            Engineering Mindset
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold mt-3 tracking-tight"
          >
            Architecting With <span className="text-gradient-cyan">Purpose &amp; Precision</span>
          </motion.h2>
        </div>

        {/* Stat Counters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 text-center hover:border-cyan-500/40 transition-all"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400 font-mono mb-2">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.values.map((val, index) => {
            const IconComponent = valueIcons[val.icon] || Award;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 hover:-translate-y-1.5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {val.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
