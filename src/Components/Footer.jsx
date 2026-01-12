import React from "react";
import { FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const ICON_COLOR = "#00FFFF";
  const TEXT_COLOR = "#A0A0A0";

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "https://twitter.com/Cryptoinfinitys",
      color: "#1DA1F2",
    },
    {
      icon: FaTelegramPlane,
      href: "https://t.me/Cryptoinfinitys",
      color: "#0088CC",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@crypto_infinity01",
      color: "#FF0000",
    },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Strategy", href: "#strategy" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#start" },
  ];

  return (
    <footer
      className="text-white py-5"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        fontFamily: "Roboto, sans-serif",
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
                color: "#fff",
                transition: "all 0.3s ease",
                fontSize: "1.5rem",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = link.color;
                e.currentTarget.style.transform = "scale(1.2)";
                e.currentTarget.style.textShadow = `0 0 8px ${link.color}`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              <link.icon />
            </a>
          ))}
        </div>

        {/* Navigation */}
        <div className="mb-4 d-flex flex-wrap justify-content-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="mx-3 my-1 text-decoration-none"
              style={{ color: TEXT_COLOR }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = ICON_COLOR)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = TEXT_COLOR)
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mb-0 small" style={{ color: TEXT_COLOR }}>
          © {new Date().getFullYear()} Crypto Infinity. All Rights Reserved.  
          | Powering Web3 Visibility & Growth
        </p>
      </div>
    </footer>
  );
};

export default Footer;
