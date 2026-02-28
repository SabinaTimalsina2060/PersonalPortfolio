import React from 'react';
import './pages.css';
import profilePic from '../assets/profile-pic.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        {/* Left Content */}
        <div className="hero-left">
          <div className="hello-badge">
            <span>Hello There!</span> 👋
          </div>

          <h1 className="hero-title">
            I'm <span className="highlight">Sabina Timalsina,</span><br />
            Mechanical Engineering <br />
            Undergrad.
          </h1>

          <p className="hero-description">
       I’m an undergraduate Mechanical Engineering student passionate about designing efficient and innovative solutions to real-world challenges.
          </p>

          <div className="cta-buttons">
            <a href="#portfolio" className="cta-button">
              View Portfolio <span className="btn-arrow">›</span>
            </a>
            <a href="#hireme" className="cta-button-outline">
              Hire Me <span className="btn-arrow">›</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-right">
          <div className="profile-wrapper">
            {/* Decorative circle behind image */}
            <div className="profile-bg-circle"></div>

            <img
              src={profilePic}
              alt="Sabina Timalsina"
              className="profile-img"
            />

            {/* Floating Badges */}
            <div className="badge badge-top-right">
              <span className="badge-circle">✦</span>
              <span>Design Engineer</span>
            </div>

            <div className="badge badge-bottom-center">
              <span>Industrial Designer</span>
            </div>

            <div className="badge badge-mid-right">
             Mechanical Design
            </div>

            {/* Decorative plus signs */}
            <div className="deco-plus top-plus">+</div>
            <div className="deco-plus bottom-plus">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;