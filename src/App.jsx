import { useState, useEffect, useRef } from 'react';
import 'animate.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Layout,
  Globe,
  Award,
  ChevronDown,
  Menu,
  X,
  Share2,
  Palette,
  Camera,
  Film,
  Package,
  Megaphone,
  Check,
  Play,
  Volume2,
  TrendingUp,
  Code,
  PenTool,
  Briefcase,
  Smartphone,
  ShoppingCart
} from 'lucide-react';

// Partner Logo Imports (Removed since we use inline SVG/Text logos)

// Case Study Project Images
import projectSaraas from './assets/projects/saraas.png';
import projectYelo from './assets/projects/yelo.png';
import projectTantashala from './assets/projects/tantashala.png';
import projectGovt from './assets/projects/govt.png';
import projectTenderBites from './assets/projects/tenderbites.png';
import projectApsara from './assets/projects/apsara.png';

// Service Hover Background Images
import serviceWebsite from './assets/services/website_dev.png';
import serviceSoftware from './assets/services/software_dev.png';
import serviceMobile from './assets/services/mobile_dev.png';
import serviceEcommerce from './assets/services/ecommerce_dev.png';
import serviceBrandDesign from './assets/services/brand_design.png';
import serviceDigitalMarketing from './assets/services/digital_marketing.png';
import serviceMediaProduction from './assets/services/media_production.png';
import serviceHRSolutions from './assets/services/hr_solutions.png';

const CASE_STUDIES = [
  {
    title: 'Transforming Saraas Group Into A Modern Brand With Tech, HR & Marketing Support',
    shortTitle: 'Saraas Group Transformation',
    description: 'End-to-end business consulting and brand transformation for a multi-vertical enterprise. Delivered digital presence, HR restructuring, and marketing strategy.',
    image: projectSaraas,
    tags: ['Branding', 'Consulting', 'HR'],
    animation: 'animate__fadeInLeft',
    delay: '0.2s',
  },
  {
    title: 'Building YELO Into A Modern Coworking & Community Brand',
    shortTitle: 'YELO Coworking & Community',
    description: 'YELO is a bike service app in Bhubaneswar, Odisha, offering doorstep two wheeler repair and maintenance. Customers can book services, track repairs, and pay online through the app and website.',
    image: projectYelo,
    tags: ['App Design', 'Branding', 'Marketing'],
    animation: 'animate__fadeInRight',
    delay: '0.4s',
  },
  {
    title: 'Elevating Tantashala From Local Handloom Store To A Digital First Fashion Brand',
    shortTitle: 'Tantashala Digital Fashion',
    description: 'Complete digital transformation of a traditional handloom business with e-commerce integration, social media strategy, and premium brand positioning.',
    image: projectTantashala,
    tags: ['E-Commerce', 'Fashion', 'Digital'],
    animation: 'animate__fadeInUp',
    delay: '0.6s',
  },
  {
    title: 'UnderGrads X Government Initiatives',
    shortTitle: 'Government Partnerships & Events',
    description: 'Partnered with government bodies to execute community development programs, event management, and public outreach campaigns at scale.',
    image: projectGovt,
    tags: ['Government', 'Events', 'Outreach'],
    animation: 'animate__zoomIn',
    delay: '0.8s',
  },
];

const SERVICES = [
  {
    title: 'Website Development',
    number: '01',
    badge: 'WEBSITE DEVELOPMENT',
    icon: Globe,
    description: "Custom, responsive websites tailored to your brand's unique needs.",
    image: serviceWebsite
  },
  {
    title: 'Software Development',
    number: '02',
    badge: 'SOFTWARE DEVELOPMENT',
    icon: Code,
    description: 'Scalable, robust software solutions to drive your business forward.',
    image: serviceSoftware
  },
  {
    title: 'Mobile App Development',
    number: '03',
    badge: 'MOBILE APP DEVELOPMENT',
    icon: Smartphone,
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    image: serviceMobile
  },
  {
    title: 'E-Commerce Development',
    number: '04',
    badge: 'E-COMMERCE DEVELOPMENT',
    icon: ShoppingCart,
    description: 'Secure, high-converting online stores built on modern platforms.',
    image: serviceEcommerce
  },
  {
    title: 'UI/UX & Brand Design',
    number: '05',
    badge: 'UI/UX & BRAND DESIGN',
    icon: Palette,
    description: 'Sleek, modern UI/UX design and custom digital brand identities.',
    image: serviceBrandDesign
  },
  {
    title: 'Digital Marketing & SEO',
    number: '06',
    badge: 'DIGITAL MARKETING & SEO',
    icon: TrendingUp,
    description: 'Data-driven marketing campaigns, SEO scaling, and organic growth.',
    image: serviceDigitalMarketing
  },
  {
    title: 'Content & Media Production',
    number: '07',
    badge: 'CONTENT & MEDIA PRODUCTION',
    icon: Film,
    description: 'Premium video production, motion graphics, and social content assets.',
    image: serviceMediaProduction
  },
  {
    title: 'HR & Talent Solutions',
    number: '08',
    badge: 'HR & TALENT SOLUTIONS',
    icon: Briefcase,
    description: 'HR restructuring, talent acquisition, and organizational development to scale your team.',
    image: serviceHRSolutions
  }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 0.8
    }
  }
};


/* ===== Case Studies Section Component ===== */
function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredProject = CASE_STUDIES[activeIndex];

  return (
    <section id="work" className="portfolio-section">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-pink-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="portfolio-container">
        {/* Section Header */}
        <div className="portfolio-header">
          <div>
            <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-purple-400 block mb-2">
              Selected Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight">
              Case Studies
            </h2>
          </div>
        </div>

        {/* Split Layout */}
        <div className="portfolio-split">
          {/* Left Side: Content */}
          <div className="portfolio-details">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="portfolio-tags">
                  {featuredProject.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="portfolio-title">
                  {featuredProject.title}
                </h3>

                <p className="portfolio-description">
                  {featuredProject.description}
                </p>

                <div style={{ marginTop: '36px' }}>
                  <button className="portfolio-cta">
                    <span>See case study</span>
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full">
            <div className="portfolio-image-frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="portfolio-image"
                  />
                  <div className="portfolio-vignette" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="portfolio-list">
          {CASE_STUDIES.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="portfolio-list-item"
                style={{ opacity: isActive ? 1 : 0.3 }}
              >
                <div className="portfolio-list-left">
                  <span className="portfolio-list-index">
                    {`0${index + 1}`}
                  </span>
                  <h4 className="portfolio-list-title">
                    {project.shortTitle}
                  </h4>
                </div>
                <div className="portfolio-list-right">
                  <span className="portfolio-list-tags">
                    {project.tags.join('  •  ')}
                  </span>
                  <div className="portfolio-list-arrow">
                    <ArrowRight style={{ width: '18px', height: '18px' }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ===== About Section Component ===== */
function AboutSection() {
  const [activeTab, setActiveTab] = useState('About');

  return (
    <section
      id="about"
      className="relative z-10 w-full overflow-hidden bg-[#0c0817] border-t border-white/[0.08]"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-900/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Full-width centered column */}
      <div
        className="relative z-10 w-full flex flex-col items-center text-center"
        style={{ maxWidth: '1100px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px' }}
      >
        <p
          className="w-full text-center font-sans text-lg sm:text-2xl font-bold tracking-[0.3em] text-purple-400 uppercase"
          style={{ marginBottom: '48px' }}
        >
          Partner For Digital Solutions
        </p>

        {/* Tab Buttons — centered, with proper underline indicator */}
        <div
          className="relative flex items-center justify-center gap-2 sm:gap-6 w-full"
          style={{ marginBottom: '80px', marginTop: '24px' }}
        >
          {/* Divider line that runs across full width */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]" />

          {['About', 'Process', 'Implementation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 px-2.5 sm:px-5 font-sans text-base sm:text-xl font-bold tracking-[0.18em] uppercase transition-colors duration-300 cursor-pointer ${activeTab === tab ? 'text-white' : 'text-white/35 hover:text-white/65'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="aboutTabLine"
                  className="absolute bottom-[-1px] left-2.5 sm:left-5 right-2.5 sm:right-5 h-[2.5px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Area — always centered */}
        <div className="w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="w-full flex flex-col items-center"
            >
              {/* Body Paragraph — centered, constrained width */}
              <p
                className="font-sans text-white/85 text-center"
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 22px)',
                  lineHeight: '1.8',
                  maxWidth: '820px',
                  marginBottom: '64px',
                }}
              >
                {activeTab === 'About' && 'We are a mix of business oriented minds and creative thinkers, passionate about taking your ideas to the next level. Our team brings together experienced professionals from the industry and young, innovative Gen Z talent, creating the perfect balance to move your brand story forward.'}
                {activeTab === 'Process' && "Our process is simple yet powerful. First, we DISCUSS to understand your real challenges. Then we BRAINSTORM together, combining our expertise with your vision. We move forward to SOLVE by implementing clear, practical steps. And we continue to REFINE through regular feedback — because the goal isn't just to deliver, but to create long lasting customer satisfaction."}
                {activeTab === 'Implementation' && "Over the years, we've worked with clients across industries, government projects, and NGOs. The common thread? They value our ability to simplify problems, deliver consistently, and build long term partnerships. Most importantly, our clients are happy working with us and that's what keeps us going."}
              </p>

              {/* ── About: 3 Stat Cards ── */}
              {activeTab === 'About' && (
                <div
                  className="grid grid-cols-1 sm:grid-cols-3 w-full"
                  style={{ gap: '24px', maxWidth: '840px' }}
                >
                  {[
                    { val: '5+', label: 'Years in Business' },
                    { val: '50+', label: 'Completed Projects' },
                    { val: '32%', label: 'Average KPI Improvement' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg"
                      style={{ padding: '40px 24px' }}
                    >
                      <span
                        className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 leading-none"
                        style={{ fontSize: 'clamp(48px, 7vw, 64px)', marginBottom: '12px' }}
                      >
                        {stat.val}
                      </span>
                      <span className="font-sans text-white/75 text-sm sm:text-base font-medium tracking-wide text-center">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Process: 4 Step Cards ── */}
              {activeTab === 'Process' && (
                <div
                  className="grid grid-cols-2 sm:grid-cols-4 w-full"
                  style={{ gap: '20px', maxWidth: '900px' }}
                >
                  {[
                    { num: '01', title: 'Discuss' },
                    { num: '02', title: 'Brainstorm' },
                    { num: '03', title: 'Solve' },
                    { num: '04', title: 'Refine' },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="relative flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden"
                      style={{ padding: '36px 20px' }}
                    >
                      {/* Ghost number watermark */}
                      <span
                        className="absolute top-2 right-3 font-serif font-black text-white/[0.04] leading-none select-none pointer-events-none"
                        style={{ fontSize: '80px' }}
                      >
                        {step.num}
                      </span>
                      <span className="font-sans text-purple-400 font-bold text-xs sm:text-[13px] uppercase tracking-[0.22em] mb-4 relative z-10">
                        Step {step.num}
                      </span>
                      <h3 className="font-serif text-white font-bold text-xl sm:text-2xl relative z-10">
                        {step.title}
                      </h3>
                    </div>
                  ))}
                </div>
              )}

              {/* ── Implementation: Area Capsules ── */}
              {activeTab === 'Implementation' && (
                <div
                  className="flex flex-wrap items-center justify-center"
                  style={{ gap: '16px', maxWidth: '700px' }}
                >
                  {['Brand Management', 'Digital Marketing', 'Corporate Videos'].map((area, i) => (
                    <div
                      key={i}
                      className="rounded-full border border-purple-500/25 bg-purple-500/[0.06] text-white/95 font-sans font-bold tracking-[0.15em] uppercase backdrop-blur-md hover:border-purple-500/55 hover:bg-purple-500/[0.12] transition-all duration-300 cursor-default"
                      style={{ padding: '16px 36px', fontSize: '15px' }}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}



/* ===== Footer Component ===== */
/* ===== Footer Component ===== */
function Footer({ onOpenModal }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main 5-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand / Description / Socials */}
          <div className="footer-brand-col">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-inner">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>
              <span className="font-serif font-medium text-[15px] uppercase tracking-[0.18em] transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                UNDERGRADSMEDIA
              </span>
            </a>

            <p className="footer-brand-description">
              High-speed, premium, AI-orchestrated consulting and execution for modern business development, design, and media production.
            </p>

            {/* Social Icons Row with Circular Hover */}
            <div className="footer-socials-row">
              <a href="#" className="footer-social-icon" aria-label="Twitter">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="YouTube">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.556a3.003 3.003 0 0 0-2.11 2.107C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.482 20.5 12 20.5 12 20.5s7.518 0 9.388-.556a3.003 3.003 0 0 0 2.11-2.107C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <span className="footer-col-title">Services</span>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">Web Dev</a></li>
              <li><a href="#services" className="footer-link">Software Dev</a></li>
              <li><a href="#services" className="footer-link">Mobile Apps</a></li>
              <li><a href="#services" className="footer-link">E-Commerce</a></li>
              <li><a href="#services" className="footer-link">UI/UX Design</a></li>
              <li><a href="#services" className="footer-link">Talent & HR</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-col">
            <span className="footer-col-title">Company</span>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#work" className="footer-link">Our Clients</a></li>
              <li><a href="#work" className="footer-link">Case Studies</a></li>
              <li><a href="#" className="footer-link">Our Blog</a></li>
              <li><a href="#" className="footer-link">Careers <span className="text-[9px] font-bold text-pink-500 bg-pink-500/10 px-1.5 py-0.5 rounded ml-1">New</span></a></li>
              <li><a href="#" className="footer-link">Brand Assets</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col">
            <span className="footer-col-title">Resources</span>
            <ul className="footer-links-list">
              <li><button onClick={onOpenModal} className="footer-link text-left cursor-pointer">Help Centre</button></li>
              <li><a href="#" className="footer-link">API Reference</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 5: Contact / App Download Badges */}
          <div className="footer-col">
            <span className="footer-col-title">Contact</span>
            <ul className="footer-links-list mb-3">
              <li><button onClick={onOpenModal} className="footer-link text-left cursor-pointer">Support</button></li>
              <li><a href="mailto:hello@undergradsmedia.com" className="footer-contact-email">hello@undergradsmedia.com</a></li>
            </ul>

            {/* Vertically aligned App store badges with gap-12 */}
            <div className="footer-badges-wrapper">
              <a href="#" className="footer-badge-btn group">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.63.73-1.18 1.87-1.03 2.98 1.12.09 2.27-.57 2.98-1.42z" />
                </svg>
                <div className="flex flex-col items-start leading-[1]">
                  <span className="text-[7px] text-white/40 uppercase">Download on the</span>
                  <span className="text-[10px] font-bold text-white/80 group-hover:text-white transition-colors">App Store</span>
                </div>
              </a>

              <a href="#" className="footer-badge-btn group">
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.783 12 3.609 22.186A2.245 2.245 0 0 1 3 20.598V3.402c0-.62.227-1.192.609-1.588zm1.214-.803c.164-.067.345-.104.536-.104.436 0 .83.189 1.109.492l10.87 6.275L14.77 13 4.823 1.011zm0 21.978L14.77 13l2.568 5.34-10.87 6.275a1.272 1.272 0 0 1-1.109.492c-.191 0-.372-.037-.536-.104L4.823 22.989zm13.11-12.72l3.418-1.974c.48-.277.809-.796.809-1.388s-.329-1.111-.809-1.388L18.42 5.861 15.772 13l2.648 1.139z" />
                </svg>
                <div className="flex flex-col items-start leading-[1]">
                  <span className="text-[7px] text-white/40 uppercase">Get it on</span>
                  <span className="text-[10px] font-bold text-white/80 group-hover:text-white transition-colors">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <span>&copy; {currentYear} UnderGradsMedia. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Security</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
            <a href="#" className="footer-bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Design & Media Production',
    message: ''
  });

  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500/30 selection:text-white">
      {/* Pinned Light-Themed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c0817]/70 backdrop-blur-[20px] border-b border-white/[0.08] h-[72px] transition-all duration-300">
        <div
          className="h-full flex items-center justify-between border-l border-r border-white/[0.08]"
          style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px' }}
        >
          {/* Logo with purple/white gradient script style */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-inner">
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            </div>
            <span className="font-serif font-medium text-[15px] uppercase tracking-[0.18em] transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              UNDERGRADSMEDIA
            </span>
          </a>

          {/* Desktop Nav Links + Divider + CTA */}
          <div className="flex items-center gap-8 h-full">
            <nav className="hidden md:flex items-center gap-8">
              {['home', 'services', 'work'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setActiveSection(item)}
                  className={`font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 relative py-1 ${activeSection === item ? 'text-purple-400' : 'text-white/60 hover:text-purple-400'
                    }`}
                >
                  {item}
                  {/* Active Indicator */}
                  {activeSection === item && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(124,58,237,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-5 bg-white/[0.08]" />

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => {
                  setFormData({ name: '', email: '', company: '', service: 'Design & Media Production', message: '' });
                  setIsModalOpen(true);
                  setFormSubmitted(false);
                }}
                className="nav-cta-btn"
              >
                <span>Let's Start</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-purple-400 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 border-b border-white/10 bg-[#0c0817]/98 backdrop-blur-[20px] py-6 px-8 flex flex-col gap-5 md:hidden shadow-xl"
          >
            {['home', 'services', 'work'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => {
                  setActiveSection(item);
                  setMobileMenuOpen(false);
                }}
                className={`font-sans text-sm font-bold tracking-widest uppercase transition-colors ${activeSection === item ? 'text-purple-400' : 'text-white/70 hover:text-purple-400'
                  }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                setFormData({ name: '', email: '', company: '', service: 'Design & Media Production', message: '' });
                setIsModalOpen(true);
                setFormSubmitted(false);
                setMobileMenuOpen(false);
              }}
              className="nav-cta-btn w-full justify-center"
            >
              <span>Let's Start</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </header>

      {/* Hero / Parallax Screen */}
      <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Layer */}
        <div className="layer" />



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
              <button
                onClick={() => {
                  setFormData({ name: '', email: '', company: '', service: 'Design & Media Production', message: '' });
                  setIsModalOpen(true);
                  setFormSubmitted(false);
                }}
                className="hero-cta-btn group"
              >
                <Sparkles className="w-4.5 h-4.5 text-purple-200 group-hover:text-white transition-colors duration-300 relative z-10 flex-shrink-0" />
                <span className="relative z-10">Let's Build Together</span>
                <ArrowRight className="w-4.5 h-4.5 text-pink-200 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 relative z-10 flex-shrink-0" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-purple-400/40 animate-bounce">
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ===== About Section ===== */}
      <AboutSection />

      {/* Trusted Partners — Full-Width White Marquee Banner */}
      <div
        id="partners"
        className="relative z-10 w-full overflow-hidden flex items-center h-20 sm:h-24 bg-white border-y border-gray-200/80"
      >
        <div className="relative w-full h-full flex items-center">
          {/* Gradient Masks for Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

          {/* Scrolling Track */}
          <div className="marquee-track flex items-center">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="flex-shrink-0 flex items-center gap-20 sm:gap-24 px-4">
                {[
                  {
                    name: 'AXIOS',
                    render: () => (
                      <span className="font-sans font-bold tracking-wide text-2xl sm:text-3xl text-slate-800/90 select-none">
                        AXIOS
                      </span>
                    )
                  },
                  {
                    name: 'the BUMP',
                    render: () => (
                      <div className="flex items-baseline gap-0.5 text-slate-800/90 select-none">
                        <span className="font-sans font-medium text-xs sm:text-sm lowercase">the</span>
                        <span className="font-sans font-extrabold text-2xl sm:text-3xl uppercase tracking-tighter">BUMP</span>
                      </div>
                    )
                  },
                  {
                    name: 'FINSMES',
                    render: () => (
                      <div className="flex items-center gap-2 text-slate-800/90 select-none">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="6" y1="18" x2="18" y2="6" />
                          <line x1="12" y1="6" x2="18" y2="6" />
                          <line x1="18" y1="12" x2="18" y2="6" />
                        </svg>
                        <span className="font-sans font-semibold text-lg sm:text-xl tracking-[0.22em]">FINSMES</span>
                      </div>
                    )
                  },
                  {
                    name: 'TechCrunch',
                    render: () => (
                      <div className="flex items-center gap-2 text-slate-800/90 select-none">
                        <div className="flex items-center justify-center bg-slate-800/90 text-white font-sans font-black text-xs sm:text-sm leading-none" style={{ width: '22px', height: '22px', borderRadius: '2px', paddingRight: '0.5px' }}>
                          TC
                        </div>
                        <span className="font-sans font-bold text-xl sm:text-2xl tracking-tight">TechCrunch</span>
                      </div>
                    )
                  },
                  {
                    name: 'GLAMOUR',
                    render: () => (
                      <span className="font-serif font-bold text-2xl sm:text-3xl tracking-wider text-slate-800/90 select-none" style={{ fontFamily: '"Playfair Display", serif' }}>
                        GLAMOUR
                      </span>
                    )
                  },
                  {
                    name: 'NBC',
                    render: () => (
                      <div className="flex items-center gap-2 text-slate-800/90 select-none">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M50,45 C45,20 30,15 30,15 C30,15 40,25 46,42 Z" opacity="0.5" />
                          <path d="M50,45 C50,15 42,8 42,8 C42,8 48,18 50,40 Z" opacity="0.85" />
                          <path d="M50,45 C55,15 62,8 62,8 C62,8 56,18 54,40 Z" opacity="0.85" />
                          <path d="M50,45 C60,20 75,15 75,15 C75,15 65,25 58,42 Z" opacity="0.5" />
                          <path d="M50,45 C65,30 80,32 80,32 C80,32 68,36 59,45 Z" opacity="0.4" />
                          <path d="M50,45 C35,30 20,32 20,32 C20,32 32,36 41,45 Z" opacity="0.4" />
                          <path d="M50,38 C48,38 47,40 47,43 C47,50 50,56 50,56 C50,56 53,50 53,43 C53,40 52,38 50,38 Z" />
                        </svg>
                        <span className="font-sans font-bold text-lg sm:text-xl tracking-wide">NBC</span>
                      </div>
                    )
                  },
                  {
                    name: 'FORBES',
                    render: () => (
                      <span className="font-serif font-bold tracking-widest text-2xl sm:text-3xl text-slate-800/90 select-none" style={{ fontFamily: '"Playfair Display", serif' }}>
                        FORBES
                      </span>
                    )
                  },
                  {
                    name: 'Bloomberg',
                    render: () => (
                      <span className="font-sans font-bold tracking-tight text-2xl sm:text-3xl text-slate-800/90 select-none">
                        Bloomberg
                      </span>
                    )
                  },
                  {
                    name: 'WIRED',
                    render: () => (
                      <span className="font-sans font-bold tracking-tighter text-3xl sm:text-4xl text-slate-800/90 select-none" style={{ letterSpacing: '-0.03em' }}>
                        WIRED
                      </span>
                    )
                  },
                  {
                    name: 'THE VERGE',
                    render: () => (
                      <div className="flex items-center gap-1.5 text-slate-800/90 select-none">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800/80" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12,2 22,22 2,22" />
                        </svg>
                        <span className="font-sans font-bold tracking-tight text-xl sm:text-2xl uppercase">
                          THE VERGE
                        </span>
                      </div>
                    )
                  }
                ].map((partner, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center"
                  >
                    {partner.render()}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section — Rebuilt */}
      <section
        id="services"
        className="relative z-10 w-full overflow-hidden"
        style={{
          background: '#0c0817',
          paddingTop: '120px',
          paddingBottom: '120px',
        }}
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-pink-900/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Container — 1400px max, centered, responsive padding */}
        <div
          className="relative z-10"
          style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px' }}
        >

          {/* Section Header — Center aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <h2 className="font-serif" style={{ fontWeight: 600, fontSize: 'clamp(36px, 5vw, 52px)', color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: '16px' }}>
              Our Services
            </h2>
            <p className="font-sans" style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto' }}>
              Comprehensive digital solutions tailored to elevate your business.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="services-grid"
          >
            {SERVICES.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="service-card group"
                  onClick={() => {
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      service: service.title,
                      message: ''
                    });
                    setIsModalOpen(true);
                    setFormSubmitted(false);
                  }}
                >
                  {/* Hover background image & overlay */}
                  <div
                    className="service-card-bg"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="service-card-overlay" />

                  {/* Card Content Wrapper */}
                  <div className="service-card-content">
                    {/* Top Row: Number */}
                    <span className="service-card-number font-serif">
                      {service.number}
                    </span>

                    {/* Middle Section: Badge & Description */}
                    <div className="service-card-middle">
                      <span className="service-card-badge font-sans">
                        {service.badge}
                      </span>
                      <p className="service-card-description font-sans">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Row: Icon & Arrow Button */}
                    <div className="service-card-bottom">
                      <div className="service-card-icon">
                        <ServiceIcon style={{ width: '20px', height: '20px' }} />
                      </div>
                      <div className="service-card-arrow">
                        <ArrowRight style={{ width: '16px', height: '16px' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== Case Studies Section ===== */}
      <CaseStudiesSection />


      {/* ===== Footer Section ===== */}
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* Sleek Glassmorphic Lead Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-[#0c0817]/80 backdrop-blur-md cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="inquiry-modal-card"
          >
            {/* Ambient gradients */}
            <div className="absolute -right-16 -top-16 w-36 h-36 bg-purple-600/20 blur-[30px] rounded-full pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-pink-600/20 blur-[30px] rounded-full pointer-events-none" />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 cursor-pointer z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {!formSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="relative z-10"
              >
                <div className="mb-8">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase block mb-2">
                    Get Started
                  </span>
                  <h3 className="font-serif text-3xl font-semibold text-white tracking-tight leading-snug">
                    Let's build your brand
                  </h3>
                  <p className="text-white/55 text-sm leading-loose mt-3">
                    Fill in your details below and our production team will get in touch.
                  </p>
                </div>

                <div className="mb-8">
                  <label className="inquiry-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Jane Doe"
                    className="inquiry-input"
                  />
                </div>

                <div className="mb-8">
                  <label className="inquiry-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="jane@company.com"
                    className="inquiry-input"
                  />
                </div>

                <div className="mb-8">
                  <label className="inquiry-label">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="inquiry-select"
                  >
                    {SERVICES.map((service, idx) => (
                      <option key={idx} value={service.title} className="bg-[#0c0817]">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label className="inquiry-label">
                    Brief Project Notes *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us what you'd like to achieve..."
                    className="inquiry-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="inquiry-submit-btn mt-10"
                >
                  Submit Inquiry
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center justify-center relative z-10"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                  Thank you, {formData.name}!
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                  We have received your inquiry about <span className="text-purple-300 font-semibold">{formData.service}</span>. Our production team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/5 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default App;
