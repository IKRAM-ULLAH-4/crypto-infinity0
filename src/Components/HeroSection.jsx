import React from "react";
// import heroBackground from "../assets/logo.jpeg"; // REMOVE: We're using a CSS background
import "@fontsource/montserrat/600.css"; // Use one high-impact font for authority
import { FaExternalLinkAlt } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section
      id="home"
      // Removed style={{ backgroundImage }}
      className="hero-section d-flex align-items-center text-white"
    >
      {/* Gradient Overlay and Background are now handled entirely by CSS for a dynamic effect */}
      
      {/* Content */}
      <div className="container text-center hero-content">
        <h1 className="hero-title animate__animated animate__fadeInDown animate__delay-1s">
          Launch Your Crypto Authority
        </h1>

        <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-2s">
          We connect your project with a <strong>140,000+ verified crypto community</strong>. 
          Achieve explosive growth with expert-led promotion on Twitter, Telegram, and Binance Live.
        </p>

        <a
          href="#start"
          className="btn btn-hero animate__animated animate__zoomIn animate__delay-3s"
        >
          Secure Your Launch Slot <FaExternalLinkAlt className="ms-2" size={14} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;