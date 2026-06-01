import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">Portfolio</a>

          <nav className="desktop-nav">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-nav"
          >
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      <section id="home" className="hero">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="/v1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-image-absolute">
          <img src="/tj3.png" alt="Background Portrait" />
        </div>

        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="hero-thejesh">
              Hello, I'm
            </motion.span>
            <motion.span variants={fadeInUp} className="hero-greeting">
              Thejesh N S
            </motion.span>
            <motion.h1 variants={fadeInUp} className="hero-title">
              <span>Game Creator & </span>
              <span>Full Stack Developer </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="hero-desc">
              I'm a game developer and designer skilled in Unity, 3D art, and interactive storytelling. I create immersive worlds with Blender and Maya and build web applications with the MERN stack, all with a focus on clean UI/UX.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <a href="#contact" className="btn-contact">
                <span className="icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" width="16" height="16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span> Hire Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section section-secondary">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="about-card"
          >
            <div className="about-img-container">
              <img src="/tj1.png" alt="THEJESH N S" />
            </div>

            <div className="about-content">
              <h2>THEJESH N S</h2>
              <h3>Passionate Developer & Problem Solver</h3>

              <p>
                I'm a passionate game developer and designer with expertise in Unity, 3D art, and interactive storytelling. My journey in game development has led me to master tools like Blender and Maya, allowing me to create immersive game worlds and stunning visual experiences.
              </p>
              <p>
                In addition to game development, I'm skilled in building full-stack web applications using the MERN stack, along with crafting intuitive UI/UX designs. My goal is to bridge the gap between technology and user experience.
              </p>

              <div className="about-skills-tags">
                {['Unity', 'Blender', 'Maya', 'MERN Stack', '3D Modeling', 'UI/UX Design', 'Node.js', 'MongoDB'].map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="about-actions">
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-download">
                  Download Resume <span>↓</span>
                </a>
                <a href="#contact" className="btn-collab">
                  Let's Collaborate <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">My <span>Portfolio</span></h2>
          </motion.div>

          <div className="projects-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="project-card"
            >
              <div className="project-img-wrapper">
                <img src="/game logo.png" alt="FIGHT TO DEATH" className="project-img" />
              </div>
              <div className="project-content">
                <h3>FIGHT TO DEATH</h3>
                <p>A thrilling arena combat game where criminals battle one-on-one for redemption.</p>
                <div className="project-tags">
                  <span className="p-tag">Unity</span>
                  <span className="p-tag">Blender</span>
                </div>
                <div>
                  <a href="/Gdd Report.pdf" target="_blank" rel="noreferrer" className="project-link">
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="project-card"
            >
              <div className="project-img-wrapper">
                <img src="/VR.png" alt="VR Dungeon Explore" className="project-img" />
              </div>
              <div className="project-content">
                <h3>VR DUNGEON / AR IPHONE</h3>
                <p>A dual immersive experience showcasing AR-powered 3D visualization and a VR adventure.</p>
                <div className="project-tags">
                  <span className="p-tag">Unity C#</span>
                  <span className="p-tag">Blender</span>
                </div>
                <div>
                  <a href="/AR VR Report 503.pdf" target="_blank" rel="noreferrer" className="project-link">
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="project-card"
            >
              <div className="project-img-wrapper">
                <img src="/Home ma.png" alt="Home Maker" className="project-img" />
              </div>
              <div className="project-content">
                <h3>Home Maker</h3>
                <p>A platform empowering homemakers to sell handmade products with seamless delivery.</p>
                <div className="project-tags">
                  <span className="p-tag">MERN</span>
                  <span className="p-tag">React.js</span>
                </div>
                <div>
                  <a href="/Home Maker final-1.pdf" target="_blank" rel="noreferrer" className="project-link">
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-secondary">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">My <span>Experience</span></h2>
          </motion.div>

          <div className="timeline-wrapper">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="timeline-item"
            >
              <span className="timeline-date">2022 - 2023</span>
              <h3 className="timeline-title">Electrical Maintenance</h3>
              <h4 className="timeline-company">Izusu Motors India</h4>
              <p className="timeline-desc">
                I have one year experience in Electrical Maintenance and trained in PLC, GOT, Panel Wiring, VFD, and other Electrical Equipments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="contact-title">
              Get In <span>Touch</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="contact-grid">
              <a href="mailto:thejesh1612004@gmail.com" className="contact-card">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <h3>Email</h3>
                <p>thejesh1612004@gmail.com</p>
              </a>

              <a href="tel:+917904690293" className="contact-card">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <h3>Phone</h3>
                <p>+91 7904690293</p>
              </a>

              <div className="contact-card location">
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

      <footer className="footer">
        <div className="container">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="footer-social"
          >
            {/* ✅ FIX: <a was missing before href */}
            <a
              href="https://github.com/Thejesh16"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>

            {/* ✅ FIX: <a was missing before href */}
            
              <a href="https://www.linkedin.com/in/thejesh-ns-76ba2727a/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </motion.div>

          <motion.a
            href="#home"
            className="scroll-top-btn"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            aria-label="Scroll to top"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>

        </div>
      </footer>
    </>
  );
};

export default App;