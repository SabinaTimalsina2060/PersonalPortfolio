import React, { useEffect, useRef } from 'react';
import './Home.css';
import profilePic from '../assets/profile-pic.png';
import About from "./About.jsx"
import Projects from "./Projects.jsx"
import Contact from './Contact.jsx'
import Services from "./Services.jsx"
const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.animate-in');
    elements?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`;
      el.classList.add('start-animation');
    });
  }, []);

  return (
    <div className="home-container" ref={heroRef}>
      {/* Decorative background blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />

      <div className="hero-section">
        {/* ===== LEFT CONTENT ===== */}
        <div className="hero-left">
          <div className="hello-badge animate-in">
            <span className="badge-dot" />
            <span>Hello There!</span>
            <span>👋</span>
          </div>

          <h1 className="hero-title animate-in">
            I'm <span className="highlight">Sabina Timalsina</span>,<br />
            Mechanical Engineering<br />
            Undergrad.
          </h1>

          <p className="hero-description animate-in">
            Undergraduate Mechanical Engineering student passionate about designing
            efficient and innovative solutions to real-world challenges.
          </p>

          <div className="stats-row animate-in">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Study</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Tools</span>
            </div>
          </div>

          <div className="cta-buttons animate-in">
            <a href="#portfolio" className="cta-button">
              View Portfolio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#hireme" className="cta-button-outline">
              Hire Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Social links */}
          <div className="social-row animate-in">
            <a href="https://www.linkedin.com/in/sabina-timalsina-03bb4a386" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </a>
            <a href="mailto:sabinatimalsina2060@gmail.com" className="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="hero-right animate-in">
          <div className="profile-wrapper">
            {/* Decorative ring */}
            <div className="profile-ring ring-outer" />
            <div className="profile-ring ring-inner" />
            <div className="profile-bg-circle" />

            <img
              src={profilePic}
              alt="Sabina Timalsina"
              className="profile-img"
            />

            {/* Floating Badges */}
            <div className="badge badge-top-right float-badge">
              <span className="badge-icon">✦</span>
              <span>Design Engineer</span>
            </div>

            <div className="badge badge-bottom-left float-badge-slow">
              <span className="badge-icon">⚙️</span>
              <span>Industrial Designer</span>
            </div>

            <div className="badge badge-mid-right float-badge-medium">
              <span className="badge-icon">📐</span>
              <span>Mechanical Design</span>
            </div>

            {/* Decorative dots */}
            <div className="deco-dots">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="deco-dot" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator animate-in">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
};

export default Home;
<Services/>