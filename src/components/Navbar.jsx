import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./components.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/Services", label: "Services" },
  { to: "/About", label: "About" },
  { to: "/Projects", label: "Projects" },
  { to: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={"navbar" + (scrolled ? " navbar-scrolled" : "")}>
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Sabina Timalsina Logo" />
        </Link>

        <div className="nav-links">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={"nav-link" + (location.pathname === to ? " nav-link-active" : "")}
            >
              {label}
              <span className="nav-link-underline" />
            </Link>
          ))}
        </div>

        <div className="navbar-cta">
          <Link to="/Contact" className="contact-btn">
            Contact Me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <button
          className={"hamburger" + (isMenuOpen ? " hamburger-open" : "")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className={"mobile-overlay" + (isMenuOpen ? " mobile-overlay-open" : "")}>
        <div className="mobile-menu">
          {navLinks.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className={"mobile-link" + (location.pathname === to ? " mobile-link-active" : "")}
              style={{ animationDelay: i * 0.07 + "s" }}
            >
              <span className="mobile-link-num">0{i + 1}</span>
              {label}
            </Link>
          ))}
          <Link to="/Contact" className="mobile-contact-btn">
            Contact Me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}