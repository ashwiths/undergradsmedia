import { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Layout,
  Globe,
  Award,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

// Partner Logo Imports
import logoTenderBites from './assets/partners/tender_bites.png';
import logoYelo from './assets/partners/yelo.png';
import logoPratyaksh from './assets/partners/pratyaksh.png';
import logoVylet from './assets/partners/vylet.png';
import logoNobleSupreme from './assets/partners/noble_supreme.png';
import logoYou from './assets/partners/you.png';
import logoApsaraRanch from './assets/partners/apsara_ranch.png';
import logoCivicFoundation from './assets/partners/civic_foundation.png';
import logoGreenValley from './assets/partners/green_valley.png';
import logoHdfcParivartan from './assets/partners/hdfc_parivartan.png';


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
    <div className="relative min-h-screen font-sans selection:bg-purple-500/30 selection:text-white">
      {/* Sticky Floating Glassmorphism Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[1120px] z-50 rounded-full px-8 py-3.5 flex items-center justify-between border border-white/[0.08] bg-white/[0.05] backdrop-blur-[14px] shadow-[0_4px_24px_rgba(139,92,246,0.08)] transition-all duration-300">
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
        <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 pt-32 pb-16 flex flex-col items-center justify-center text-center -mt-32">
          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/90 text-[10px] font-bold tracking-widest uppercase mb-8 backdrop-blur-md animate-float">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping"></span>
              Trusted by Innovative Brands
            </div>

            {/* Main Title */}
            <h1 className="font-serif font-semibold text-[46px] sm:text-[61px] md:text-[72px] leading-tight md:leading-[1.15] tracking-tight mb-12 max-w-none text-white drop-shadow-sm">
              Your One Stop Solution for<br />
              Business Consulting & Execution.
            </h1>

            {/* Description */}
            <p className="max-w-4xl text-center text-white/90 text-lg sm:text-xl mb-16 font-sans leading-relaxed drop-shadow-sm" style={{ marginTop: '28px' }}>
              From planning to implementation in media, design, HR, marketing and tech.<br />
              We simplify challenges with creativity,<br />
              communication and confidence.
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-center" style={{ marginTop: '20px' }}>
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 rounded-full cursor-pointer overflow-hidden transition-all duration-[300ms] hover:scale-[1.03] hover:-translate-y-[2px] active:scale-[0.97]"
                style={{
                  height: '48px',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  fontSize: '15px',
                  letterSpacing: '0.03em',
                  color: '#fff',
                  background: 'linear-gradient(135deg, rgba(192,132,252,0.48) 0%, rgba(236,72,153,0.48) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(192,132,252,0.6)',
                  boxShadow: '0 4px 30px rgba(168,85,247,0.38), inset 0 1px 0 rgba(255,255,255,0.15)',
                  transition: 'transform 300ms ease, box-shadow 300ms ease, background 300ms ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 10px 44px rgba(168,85,247,0.68), 0 0 0 1px rgba(192,132,252,0.72), inset 0 1px 0 rgba(255,255,255,0.24)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(200,140,255,0.65) 0%, rgba(244,85,165,0.65) 100%)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 4px 30px rgba(168,85,247,0.38), inset 0 1px 0 rgba(255,255,255,0.15)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(192,132,252,0.48) 0%, rgba(236,72,153,0.48) 100%)';
                }}
              >
                {/* Inner gradient overlay for depth */}
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)' }}
                />
                <Sparkles className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors duration-300 relative z-10 flex-shrink-0" />
                <span className="relative z-10">Let's Build Together</span>
                <ArrowRight className="w-5 h-5 text-pink-200 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 relative z-10 flex-shrink-0" />
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

      {/* Trusted Partners — Premium Animated Marquee */}
      <section
        id="partners"
        className="relative z-10 w-full overflow-hidden"
        style={{
          background: '#ffffff',
          paddingTop: '80px',
          paddingBottom: '80px',
        }}
      >

        {/* Heading — Framer Motion fade in */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-14 px-6 relative z-10"
        >
          <h2 className="font-serif font-semibold text-[28px] sm:text-[34px] text-[#0c0817] tracking-tight mb-3">
            Trusted By Leading{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">Brands</span>
          </h2>
          <p className="font-sans text-[#0c0817]/60 text-sm sm:text-base max-w-md mx-auto">
            Organizations and businesses that trust our expertise.
          </p>
        </motion.div>

        {/* Marquee — Framer Motion fade up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="marquee-wrapper relative"
        >
          {/* Gradient Masks for Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

          {/* Scrolling Track — two identical sets for seamless infinite loop */}
          <div className="marquee-track">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 px-4">
                {[
                  { name: 'Tender Bites', src: logoTenderBites },
                  { name: 'YELO', src: logoYelo },
                  { name: 'Pratyaksh', src: logoPratyaksh },
                  { name: 'Vylet', src: logoVylet },
                  { name: 'Noble Supreme', src: logoNobleSupreme },
                  { name: 'YOU', src: logoYou },
                  { name: 'Hotel Apsara Ranch', src: logoApsaraRanch },
                  { name: 'Civic Foundation', src: logoCivicFoundation },
                  { name: 'Green Valley', src: logoGreenValley },
                  { name: 'HDFC Parivartan', src: logoHdfcParivartan },
                ].map((partner, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div
                      className="flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-[1.06]"
                      style={{
                        width: '160px',
                        height: '100px',
                        background: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                        padding: '16px',
                      }}
                    >
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:brightness-110"
                        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
