import React from 'react';
import { FaTwitter, FaTelegramPlane, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const ICON_COLOR = '#00FFFF'; // Electric Cyan accent
  const TEXT_COLOR = '#A0A0A0'; // Muted gray text for readability

  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/youraccount', color: '#1DA1F2' },
    { icon: FaTelegramPlane, href: 'https://t.me/yourchannel', color: '#0088CC' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com/company/yourcompany', color: '#0077B5' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about-us' },
    { label: 'Process', href: '#how-we-work' },
    { label: 'Contact', href: '#start' },
  ];

  return (
    <footer 
      className="text-white py-5"
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <div className="container text-center">

        {/* Social Icons */}
        <div className="mb-4 d-flex justify-content-center">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              style={{
                color: '#fff',
                transition: 'all 0.3s ease',
                fontSize: '1.5rem',
              }}
              onMouseOver={e => {
                e.currentTarget.style.color = link.color;
                e.currentTarget.style.transform = 'scale(1.2)';
                e.currentTarget.style.textShadow = `0 0 8px ${link.color}`;
              }}
              onMouseOut={e => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              <link.icon />
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="mb-4 d-flex flex-wrap justify-content-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="mx-3 my-1 text-decoration-none"
              style={{
                color: TEXT_COLOR,
                transition: 'color 0.3s ease',
              }}
              onMouseOver={e => e.currentTarget.style.color = ICON_COLOR}
              onMouseOut={e => e.currentTarget.style.color = TEXT_COLOR}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mb-0 small" style={{ color: TEXT_COLOR }}>
          &copy; { (new Date()).getFullYear()} Crypto Infinity. All Rights Reserved. | Designed for High-Growth Web3 Projects
        </p>
      </div>
    </footer>
  );
};

export default Footer;
