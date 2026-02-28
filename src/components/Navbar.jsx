import React, { Component } from "react";
import logo from "../assets/logo.png"; // Assuming you have the logo in assets folder
import { Link } from "react-router-dom";
import "../components/components.css"
export class Navbar extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  render() {
    return (
      <nav className="navbar-div">
        {/* Logo with lavender circular background */}
        <img className="main-logo" src={logo} alt="Logo" />

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="hover:text-[#9A7DFF]">Home</Link>
          <Link to="/Services" className="hover:text-[#9A7DFF]">Services</Link>
          <Link to="/About" className="hover:text-[#9A7DFF]">About</Link>
          <Link to="/Projects" className="hover:text-[#9A7DFF]">Projects</Link>
          <Link to="/Contact" className="hover:text-[#9A7DFF]">Contact</Link>
        </div>

        {/* Contact Me button */}
        <div className="hidden md:flex">
          <Link to="/Contact" className="contact-btn">Contact Me</Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button onClick={this.toggleMenu} className="hamburger-button">
          <i className="fas fa-bars"></i>
        </button>

        {/* Mobile Menu */}
        {this.state.isMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="block py-2 hover:text-[#9A7DFF]">Home</Link>
            <Link to="/Services" className="block py-2 hover:text-[#9A7DFF]">Services</Link>
            <Link to="/About" className="block py-2 hover:text-[#9A7DFF]">About</Link>
            <Link to="/Projects" className="block py-2 hover:text-[#9A7DFF]">Projects</Link>
            <Link to="/Contact" className="block py-2 hover:text-[#9A7DFF]">Contact</Link>
            <Link to="/Contact" className="block  mt-4 bg-[#9A7DFF] text-white px-6 py-2 rounded-full text-center hover:bg-[#6A56C5] transition duration-300">
              Contact Me
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;