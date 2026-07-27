import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const NAV_ITEMS = ['Home', 'About', 'Work', 'Experience', 'Contact'];

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  return (
    <>
      {/* ===== Header ===== */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z" fill="var(--orange)" stroke="var(--ink)" strokeWidth="1.2" strokeLinejoin="round" />
                <circle cx="19" cy="16" r="1.6" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="1" />
                <circle cx="4.5" cy="15" r="1.1" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="1" />
              </svg>
            </span>
            <span className="logo-text">
              THEJESH<br />N S
            </span>
          </a>

          <nav className="desktop-nav">
            {NAV_ITEMS.map((item, i) => (
              <React.Fragment key={item}>
                <a href={`#${item.toLowerCase()}`} className={i === 0 ? 'active' : ''}>
                  {item}
                </a>
                {i < NAV_ITEMS.length - 1 && <span className="nav-dot">·</span>}
              </React.Fragment>
            ))}
          </nav>

          <a href="mailto:thejesh1612004@gmail.com" className="nav-contact paper-stack">
            Contact
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span />
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mobile-nav"
          >
            {NAV_ITEMS.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="hero-text">
            <motion.span variants={fadeInUp} className="hero-sparkle">✦</motion.span>

            <motion.h1 variants={fadeInUp} className="hero-title">
              <span className="line">CRAFTING</span>
              <span className="line">WORLDS.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="hero-desc">
              I'm a game developer and full-stack engineer, building interactive
              worlds in Unity and clean, usable web apps with the MERN stack, from{' '}
              <strong>Tiruvallur, Tamil Nadu.</strong>
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a href="mailto:thejesh1612004@gmail.com" className="btn-black paper-stack">
                Contact Us
                <span className="arrow">↗</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="stat-card paper-stack-lg"
          >
            <div className="stat-card-top">
              <span className="stat-card-eyebrow">✦ MY WORK</span>
              <span className="stat-card-pill">
                <span className="pill-dot" /> AVAILABLE
              </span>
            </div>
            <div className="stat-card-bottom">
              <span className="stat-card-label">PROJECTS SHIPPED</span>
              <span className="stat-card-number">3</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="about-card paper-stack"
          >
            <div className="about-img-container">
              <img src="/tj1.png" alt="THEJESH N S" />
            </div>

            <div className="about-content">
              <h2>THEJESH N S</h2>
              <h3>Passionate Developer &amp; Problem Solver</h3>
              <p>
                I'm a passionate game developer and designer with expertise in Unity,
                3D art, and interactive storytelling. My journey has led me to master
                tools like Blender and Maya, creating immersive worlds and stunning
                visual experiences.
              </p>
              <p>
                I'm also skilled in building full-stack web applications using the
                MERN stack, along with crafting intuitive UI/UX designs — bridging
                the gap between technology and user experience.
              </p>

              <div className="about-tags">
                <span className="tag tag-orange">Unity</span>
                <span className="tag tag-orange">Blender</span>
                <span className="tag tag-orange">Maya</span>
                <span className="tag tag-yellow">MERN Stack</span>
                <span className="tag tag-yellow">Node.js</span>
                <span className="tag tag-yellow">MongoDB</span>
              </div>

              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="link-arrow">
                download resume →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Work: Spotlight Project ===== */}
      <section id="work" className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="spotlight-tags"
          >
            <span className="tag-black paper-stack">Recent Project</span>
            <span className="tag-yellow-flag">NEW · IN DEVELOPMENT</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="spotlight-grid"
          >
            <div className="spotlight-media">
              <div className="photo-stack">
                <img src="/game logo.png" alt="Fight to Death" />
                <span className="photo-badge">Solo Build</span>
              </div>
            </div>

            <div className="spotlight-content">
              <h2>FIGHT TO DEATH</h2>

              <div className="meta-row">
                <span className="meta-label">GENRE</span>
                <span className="meta-value">Arena Combat</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">BUILT WITH</span>
                <span className="meta-value">Unity, Blender</span>
              </div>

              <p>
                A thrilling arena combat game where criminals battle one-on-one for
                redemption. Designed, modeled, and built solo — from 3D art in
                Blender to full gameplay systems in Unity.
              </p>

              <div className="spotlight-stats">
                <div className="spotlight-stat">
                  <span className="spotlight-stat-number">1v1</span>
                  <span className="spotlight-stat-label">Combat Format</span>
                </div>
                <div className="spotlight-stat">
                  <span className="spotlight-stat-number">Solo</span>
                  <span className="spotlight-stat-label">Built By</span>
                </div>
                <div className="spotlight-stat">
                  <span className="spotlight-stat-number">2026</span>
                  <span className="spotlight-stat-label">Year</span>
                </div>
              </div>

              <div className="spotlight-cta">
                <a href="/Gdd Report.pdf" target="_blank" rel="noreferrer" className="btn-black paper-stack">
                  View Design Doc
                </a>
                <span className="spotlight-meta">full design document · pdf</span>
              </div>
            </div>
          </motion.div>

          {/* Other Work */}
          <div className="projects-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="project-card paper-stack"
            >
              <div className="project-img-wrapper">
                <img src="/VR.png" alt="VR Dungeon Explore" />
              </div>
              <div className="project-content">
                <h3>VR Dungeon / AR iPhone</h3>
                <p>A dual immersive experience: AR-powered 3D visualization and a VR adventure.</p>
                <div className="project-tags">
                  <span className="tag tag-orange">Unity C#</span>
                  <span className="tag tag-orange">Blender</span>
                </div>
                <a href="/AR VR Report 503.pdf" target="_blank" rel="noreferrer" className="link-arrow">
                  view report →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="project-card paper-stack"
            >
              <div className="project-img-wrapper">
                <img src="/Home ma.png" alt="Home Maker" />
              </div>
              <div className="project-content">
                <h3>Home Maker</h3>
                <p>A platform empowering homemakers to sell handmade products with seamless delivery.</p>
                <div className="project-tags">
                  <span className="tag tag-yellow">MERN</span>
                  <span className="tag tag-yellow">React.js</span>
                </div>
                <a href="/Home Maker final-1.pdf" target="_blank" rel="noreferrer" className="link-arrow">
                  view case study →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Experience: two-card layout ===== */}
      <section id="experience" className="section">
        <div className="container">
          <div className="teaser-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="teaser-card teaser-light paper-stack"
            >
              <div className="teaser-photo-stack">
                <img src="/tj3.png" alt="Thejesh at work" />
              </div>
              <h3>Electrical Maintenance</h3>
              <span className="teaser-sub">Izusu Motors India · 2022 – 2023</span>
              <p>
                A year of hands-on experience in electrical maintenance, trained in
                PLC, GOT, panel wiring, VFD, and other electrical equipment — a
                background that shaped how I approach systems and troubleshooting today.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="teaser-card teaser-dark paper-stack"
            >
              <span className="sticky-tag">Open Now</span>
              <span className="teaser-eyebrow">available for work!</span>
              <h3>Ready for what's next</h3>
              <p>
                Game dev, 3D art, or full-stack web — if you're building something
                and need hands-on help, I want to hear from you.
              </p>
              <a href="#contact" className="link-arrow link-arrow-light">let's talk →</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="section section-alt">
        <div className="container contact-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="contact-title">
              Get In <span>Touch</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="contact-grid">
              <a href="mailto:thejesh1612004@gmail.com" className="contact-card paper-stack">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <h3>Email</h3>
                <p>thejesh1612004@gmail.com</p>
              </a>

              <a href="tel:+917904690293" className="contact-card paper-stack">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <h3>Phone</h3>
                <p>+91 7904690293</p>
              </a>

              <div className="contact-card paper-stack location">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3>Location</h3>
                <p>Tiruvallur, Tamil Nadu,<br />India</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-copy">© 2026 Thejesh N S. All rights reserved.</span>
          <div className="footer-links">
            <a href="https://github.com/Thejesh16" target="_blank" rel="noreferrer">GitHub</a>
            <span className="nav-dot">·</span>
            <a href="https://www.linkedin.com/in/thejesh-ns-76ba2727a/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;