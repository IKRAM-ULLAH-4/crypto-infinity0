import React from 'react';
import { FaTwitter, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa'; // Import necessary social icons

const Footer = () => {
  const ICON_COLOR = '#00FFFF'; // Electric Cyan for accent

  return (
    <footer 
      className="text-white py-5"
      style={{
        background: '#0A0A0A', // Deep Black
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Subtle top border
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <div className="container text-center">
        
        {/* Social Icons */}
        <div className="mb-4">
          <a 
            href="https://twitter.com/youraccount" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-3"
            style={{ transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.color = ICON_COLOR}
            onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
          >
            <FaTwitter size={24} />
          </a>
          
          <a 
            href="https://t.me/yourchannel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-3"
            style={{ transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.color = ICON_COLOR}
            onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
          >
            <FaTelegramPlane size={24} />
          </a>
          
          <a 
            href="https://linkedin.com/company/yourcompany" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white mx-3 d-none d-md-inline" // Optionally hide on mobile
            style={{ transition: 'color 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.color = ICON_COLOR}
            onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
        
        {/* Navigation Links (Best Practice) */}
        <div className="mb-4 small">
            <a href="#home" className="text-muted mx-3 text-decoration-none" style={{ transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ICON_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#A0A0A0'}>Home</a>
            <a href="#about-us" className="text-muted mx-3 text-decoration-none" style={{ transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ICON_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#A0A0A0'}>About</a>
            <a href="#how-we-work" className="text-muted mx-3 text-decoration-none" style={{ transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ICON_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#A0A0A0'}>Process</a>
            <a href="#start" className="text-muted mx-3 text-decoration-none" style={{ transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = ICON_COLOR} onMouseOut={(e) => e.currentTarget.style.color = '#A0A0A0'}>Contact</a>
        </div>

        {/* Copyright */}
        <p className="mb-0 small" style={{ color: '#A0A0A0' }}>
          &copy; 2025 Crypto Infinity. All Rights Reserved. | Designed for High-Growth Web3 Projects
        </p>
      </div>
    </footer>
  );
};

export default Footer;