import React from 'react';
import { FaTwitter, FaTelegramPlane, FaRocket } from 'react-icons/fa'; // Icons for branding and CTAs

const Navbar = () => {
  const BG_COLOR = '#0A0A0A'; // Deep Black background
  const ACCENT_COLOR = '#00FFFF'; // Electric Cyan accent
  const CTA_BUTTON_BG = '#FF7F50'; // Vibrant Orange/Coral for the main CTA

  return (
    <nav 
      className="navbar navbar-expand-lg fixed-top py-3" 
      style={{
        backgroundColor: BG_COLOR,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Subtle line separator
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Adds depth
      }}
    >
      <div className="container-fluid">
        {/* Brand/Logo - Styled for Premium Look */}
        <a 
          className="navbar-brand fw-bold" 
          href="#home" 
          style={{ 
            color: ACCENT_COLOR, 
            fontSize: '1.5rem', 
            letterSpacing: '1px' 
          }}
        >
          <FaRocket size={20} className="me-2" /> Crypto<span style={{ color: '#fff' }}>Infinity</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span> {/* Ensures icon is visible on dark BG */}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* Navigation Links - Use <a> for Smooth Hash Scrolling */}
            <li className="nav-item">
              <a className="nav-link" href="#home" style={{ color: '#fff', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ACCENT_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#problem-solution" style={{ color: '#fff', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ACCENT_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>Strategy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-we-work" style={{ color: '#fff', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ACCENT_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>Process</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us" style={{ color: '#fff', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ACCENT_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>Authority</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#admin" style={{ color: '#fff', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ACCENT_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>Team</a>
            </li>


            {/* Primary Call to Action Button */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a 
                className="btn text-white fw-bold px-4 py-2" 
                href="#start" // Directs to the form section
                style={{
                  background: CTA_BUTTON_BG,
                  transition: 'all 0.3s ease',
                  borderRadius: '50px',
                  boxShadow: '0 0 15px rgba(255, 127, 80, 0.5)',
                  textTransform: 'uppercase'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = ACCENT_COLOR}
                onMouseOut={(e) => e.currentTarget.style.background = CTA_BUTTON_BG}
              >
                Secure Launch Slot
              </a>
            </li>
            
            {/* Secondary CTA/Social Link (FIXED: Added https:// to the href) */}
            <li className="nav-item ms-3 mt-2 mt-lg-0 d-none d-lg-block">
              <a 
                className="btn btn-outline-light px-4 py-2" 
                href="https://t.me/Cryptoinfinitynews" // <-- FIX APPLIED HERE
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    color: ACCENT_COLOR,
                    borderColor: ACCENT_COLOR,
                    transition: 'all 0.3s ease',
                    borderRadius: '50px',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = ACCENT_COLOR}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <FaTelegramPlane className="me-2" /> Join Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;