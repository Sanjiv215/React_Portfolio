import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import BackgroundCanvas from '../components/BackgroundCanvas';
import Navbar from '../components/Navbar';
import NeuralHero from '../components/NeuralHero';
import AboutSection from '../components/AboutSection';
import VigiloShowcase from '../components/VigiloShowcase';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import InteractiveTerminal from '../components/InteractiveTerminal';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Dock from '../components/MacOS/Dock';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#040711] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-300 font-sans antialiased overflow-x-hidden">
        {/* Ambient Canvas & Neural Synaptic Grid */}
        <BackgroundCanvas />
        
        {/* Floating Cortex HUD Capsule Header */}
        <Navbar />

        {/* Main Content Telemetry Sections */}
        <main className="pt-16 sm:pt-20 space-y-16 sm:space-y-28 pb-28 sm:pb-32">
          <NeuralHero />
          <AboutSection />
          <VigiloShowcase />
          <ProjectsSection />
          <SkillsSection />
          <InteractiveTerminal />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Cortex Minimal HUD Footer */}
        <Footer />

        {/* Floating macOS Dock */}
        <Dock />
      </div>
    </ThemeProvider>
  );
}
