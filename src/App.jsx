import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Layout,
  Globe,
  Award,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';


function App() {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Create a spring physics wrapper around scrollY to eliminate scroll ticks and make movement butter-smooth.
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 85,    // Controls the speed of the snap
    damping: 25,      // Controls the cushioning/damping factor
    restDelta: 0.001
  });

  // Calculate the y translation for the background layer.
  const y = useTransform(smoothScrollY, [0, 1000], [0, 300]);

  return (
    <div className="relative min-h-screen bg-[#0c0817] font-sans selection:bg-purple-500/30 selection:text-white">
      {/* Sticky Floating Glassmorphism Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-50 rounded-full px-8 py-3.5 flex items-center justify-between border border-white/10 bg-white/[0.08] backdrop-blur-[24px] shadow-[0_8px_32px_rgba(139,92,246,0.15)] transition-all duration-300">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-inner">
            <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
          </div>
          <span className="font-sans font-semibold text-white tracking-[0.25em] text-sm uppercase group-hover:text-purple-200 transition-colors">
            Antigravity
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {['home', 'services', 'work'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActiveSection(item)}
              className={`font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 relative py-1 ${activeSection === item ? 'text-white' : 'text-white/75 hover:text-white'
                }`}
            >
              {item}
              {/* Active Indicator */}
              {activeSection === item && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="h-10 px-6 inline-flex items-center justify-center rounded-full text-xs font-semibold tracking-wider text-white uppercase bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-pink-400 border border-white/10 shadow-[0_4px_20px_rgba(168,85,247,0.2)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-3 rounded-3xl border border-white/10 bg-[#0c0817]/95 backdrop-blur-[20px] py-6 px-8 flex flex-col gap-5 md:hidden shadow-2xl shadow-purple-950/20"
          >
            {['home', 'services', 'work'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => {
                  setActiveSection(item);
                  setMobileMenuOpen(false);
                }}
                className={`font-display text-sm font-bold tracking-widest uppercase transition-colors ${activeSection === item ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-xs font-bold tracking-widest text-white uppercase bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 transition-all shadow-md"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero / Parallax Screen */}
      <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Parallax Background Layer */}
        <motion.div
          style={{ y }}
          className="layer"
        />



        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center justify-center text-center -mt-12">
          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/90 text-[10px] font-bold tracking-widest uppercase mb-5 backdrop-blur-md animate-float">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping"></span>
              Trusted by Innovative Brands
            </div>

            {/* Small Eyebrow */}
            <h2 className="text-xs sm:text-sm tracking-[0.3em] text-purple-300/90 mb-3 font-display uppercase font-semibold">
              Your One Stop Solution
            </h2>

            {/* Main Title */}
            <h1 className="font-serif font-semibold text-5xl sm:text-6xl md:text-7xl leading-tight md:leading-[1.15] tracking-tight mb-6 max-w-4xl text-white drop-shadow-sm">
              Business Consulting &<br />
              Execution
            </h1>

            {/* Description */}
            <p className="max-w-[650px] text-center text-white/90 text-lg sm:text-xl mb-16 font-sans leading-relaxed drop-shadow-sm">
              From planning to implementation in media, design, HR, marketing and technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center justify-center gap-12 mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center font-bold text-white text-xs tracking-widest uppercase font-display cursor-pointer gap-2 transition-colors duration-300 hover:text-purple-300"
              >
                Launch Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center font-bold text-white/70 text-xs tracking-widest uppercase font-display cursor-pointer transition-colors duration-300 hover:text-white"
              >
                Explore Work
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-purple-400/40 animate-bounce">
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* Main Content Area */}
      <main className="relative z-10 bg-[#0c0817] px-6 md:px-12 py-32">
        {/* Glow backdrop decorator */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4">
              Our Capabilities
            </h2>
            <p className="font-sans text-purple-300/50 max-w-xl mx-auto text-sm md:text-base">
              A full-service creative studio building interfaces and systems that push the boundaries of digital space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full blur-xl group-hover:bg-purple-500/10 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Visual Strategy</h3>
                <p className="font-sans text-sm text-purple-200/60 leading-relaxed">
                  We shape distinct, high-impact identities and product strategies that position your brand at the absolute forefront.
                </p>
              </div>
              <a href="#contact" className="mt-auto inline-flex items-center gap-2 text-xs font-bold tracking-wider text-purple-300 hover:text-white transition-colors uppercase group-hover:translate-x-1 duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-bl-full blur-xl group-hover:bg-pink-500/10 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-300">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Digital Architecture</h3>
                <p className="font-sans text-sm text-purple-200/60 leading-relaxed">
                  Fast, ultra-responsive web applications built with cutting-edge clean code, rich animations, and custom visual layers.
                </p>
              </div>
              <a href="#contact" className="mt-auto inline-flex items-center gap-2 text-xs font-bold tracking-wider text-purple-300 hover:text-white transition-colors uppercase group-hover:translate-x-1 duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="glass-card rounded-2xl p-8 flex flex-col gap-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full blur-xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Interactive Media</h3>
                <p className="font-sans text-sm text-purple-200/60 leading-relaxed">
                  Stunning motion graphics, video orchestrations, and graphic storytelling designed to lock-in client engagement.
                </p>
              </div>
              <a href="#contact" className="mt-auto inline-flex items-center gap-2 text-xs font-bold tracking-wider text-purple-300 hover:text-white transition-colors uppercase group-hover:translate-x-1 duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Showcase/Gallery Section */}
        <section id="work" className="max-w-7xl mx-auto mb-32 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white mb-4">
                Selected Works
              </h2>
              <p className="font-sans text-purple-300/50 max-w-md text-sm md:text-base">
                A brief overview of design projects pushing the envelope of interactivity and aesthetics.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/25 text-xs font-bold tracking-widest text-purple-300 hover:text-white uppercase transition-all duration-300 glass-button">
              View All Projects <Sparkles className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="glass-card rounded-2xl overflow-hidden group cursor-pointer animate-float-slow">
              <div className="h-64 sm:h-80 bg-gradient-to-tr from-purple-900/40 via-indigo-950/20 to-purple-800/10 relative flex items-center justify-center p-8 overflow-hidden">
                {/* Floating orb decorator inside project */}
                <div className="absolute w-48 h-48 bg-purple-600/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700" />
                <span className="font-display font-black text-2xl tracking-widest text-white/20 group-hover:text-purple-300/40 transition-colors uppercase duration-500">
                  COSMIC DESIGN
                </span>
              </div>
              <div className="p-8">
                <span className="text-[10px] font-bold tracking-widest uppercase text-purple-400">Web App / Branding</span>
                <h3 className="font-display font-bold text-xl text-white mt-2 mb-3 group-hover:text-purple-300 transition-colors">Aether Space Systems</h3>
                <p className="font-sans text-sm text-purple-200/50 leading-relaxed">
                  Crafting an interactive platform representing aetheric physics and modern space hardware design.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card rounded-2xl overflow-hidden group cursor-pointer animate-float">
              <div className="h-64 sm:h-80 bg-gradient-to-tr from-pink-900/20 via-indigo-950/20 to-purple-900/30 relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute w-48 h-48 bg-pink-500/10 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700" />
                <span className="font-display font-black text-2xl tracking-widest text-white/20 group-hover:text-pink-300/40 transition-colors uppercase duration-500">
                  NEBULA MEDIA
                </span>
              </div>
              <div className="p-8">
                <span className="text-[10px] font-bold tracking-widest uppercase text-pink-400">Visual Art / Media</span>
                <h3 className="font-display font-bold text-xl text-white mt-2 mb-3 group-hover:text-pink-300 transition-colors">Vortex Creative Collective</h3>
                <p className="font-sans text-sm text-purple-200/50 leading-relaxed">
                  Directing a beautiful, music-aligned digital visual show and launching a premium interactive site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="max-w-4xl mx-auto text-center scroll-mt-24 mb-16">
          <div className="glass-card rounded-3xl p-8 sm:p-16 relative overflow-hidden flex flex-col items-center">
            {/* Glowing orb decorator inside card */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

            <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 relative z-10 leading-tight">
              Ready to Launch Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                Next Digital Dimension?
              </span>
            </h2>
            <p className="font-sans text-purple-200/60 max-w-xl mb-10 text-sm md:text-base leading-relaxed relative z-10">
              Get in touch with us today. Let's discuss your design ideas, engineering challenges, or strategic campaigns. Let's build beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center relative z-10">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-full border border-purple-500/20 bg-purple-950/20 backdrop-blur-md text-white placeholder-purple-300/40 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 w-full sm:max-w-xs transition-all"
              />
              <button className="px-8 py-4 rounded-full font-semibold text-white tracking-wide bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-md hover:shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-display tracking-widest uppercase cursor-pointer">
                Connect Now
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="font-display font-semibold text-white tracking-wider text-xs">
              &copy; {new Date().getFullYear()} ANTIGRAVITY. ALL RIGHTS RESERVED.
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-2.5 rounded-full border border-purple-500/10 bg-purple-500/5 text-purple-300 hover:text-white hover:border-purple-400/30 transition-all cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="p-2.5 rounded-full border border-purple-500/10 bg-purple-500/5 text-purple-300 hover:text-white hover:border-purple-400/30 transition-all cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="#" className="p-2.5 rounded-full border border-purple-500/10 bg-purple-500/5 text-purple-300 hover:text-white hover:border-purple-400/30 transition-all cursor-pointer">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
