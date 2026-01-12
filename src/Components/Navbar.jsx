import React, { useState } from "react";
import { FaTwitter, FaTelegramPlane, FaRocket, FaExternalLinkAlt } from "react-icons/fa";
import SecureLaunchModal from "./SecureLaunchModal";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <FaRocket size={22} className="me-2" />
            <span className="brand-primary">Crypto</span>
            <span className="brand-secondary">Infinity</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-center">
              {["Home", "Strategy", "Process", "about-us", "Admin"].map(
                (item, idx) => (
                  <li className="nav-item" key={idx}>
                    <a
                      className="nav-link"
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}

              {/* Navbar CTA Button */}
              <li className="nav-item mt-2 mt-lg-0">
                <button
                  className="btn btn-primary btn-cta"
                  onClick={() => setIsModalOpen(true)}
                >
                  Secure Launch Slot <FaExternalLinkAlt className="ms-1" />
                </button>
              </li>

              <li className="nav-item mt-2 mt-lg-0 d-none d-lg-block">
                <a
                  className="btn btn-outline-cta"
                  href="https://t.me/Cryptoinfinitynews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane className="me-2" />
                  Join Community
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal for Navbar */}
      <SecureLaunchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
