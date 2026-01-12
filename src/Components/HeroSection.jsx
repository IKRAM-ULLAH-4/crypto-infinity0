import React, { useState } from "react";
import "@fontsource/montserrat/600.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./HeroSection.css";
import SecureLaunchModal from "./SecureLaunchModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-white"
    >
      <div className="container text-center hero-content">
        <h1 className="hero-title animate__animated animate__fadeInDown animate__delay-1s">
          Launch Your Crypto Authority
        </h1>

        <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-2s">
          We connect your project with a <strong>fast-growing crypto community</strong>.  
          Achieve visibility with expert-led promotions on Twitter and Telegram.
        </p>

        {/* Primary CTA */}
        <button
          className="btn btn-hero animate__animated animate__zoomIn animate__delay-3s"
          onClick={() => setIsModalOpen(true)}
        >
          Secure Your Launch Slot <FaExternalLinkAlt className="ms-2" size={14} />
        </button>

        {/* Modal */}
        <SecureLaunchModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default HeroSection;
