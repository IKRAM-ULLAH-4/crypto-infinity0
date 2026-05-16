import React, { useState } from "react";
import {
  FaTelegramPlane,
  FaExternalLinkAlt,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import SecureLaunchModal from "./SecureLaunchModal";
import { useTheme } from "../Context/ThemeContext";

import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { bg, setbg } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "About", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top py-3"
        style={{
          background: bg
            ? "rgba(10,15,25,0.82)"
            : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(18px)",
          borderBottom: bg
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(0,0,0,0.06)",
          transition: "0.3s ease",
          zIndex: 999,
        }}
      >
        <div className="container-fluid px-3 px-lg-5">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className={`navbar-brand d-flex align-items-center gap-3 text-decoration-none ${
              bg ? "text-light" : "text-dark"
            }`}
          >
            {/* LOGO IMAGE */}
            <div
              className="overflow-hidden rounded-4"
              style={{
                width: "58px",
                height: "58px",
                border: "2px solid rgba(0,245,160,0.35)",
                flexShrink: 0,
                boxShadow: bg
                  ? "0 0 25px rgba(0,245,160,0.18)"
                  : "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={logo}
                alt="Crypto Infinity Logo"
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            {/* BRAND TEXT */}
            <div className="d-flex flex-column lh-sm">
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: "800",
                  background:
                    "linear-gradient(135deg,#00F5A0,#00D9F5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Crypto Infinity
              </span>

              <small
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "1.2px",
                  opacity: 0.7,
                  color: bg ? "#fff" : "#111",
                }}
              >
                WEB3 GROWTH AGENCY
              </small>
            </div>
          </Link>

          {/* ================= TOGGLER ================= */}
          <button
            className={`navbar-toggler border-0 shadow-none ${
              bg ? "text-light" : "text-dark"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* ================= MENU ================= */}
          <div
            className={`collapse navbar-collapse ${
              isOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2 mt-4 mt-lg-0">

              {/* NAV ITEMS */}
              {navItems.map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`nav-link fw-semibold px-3 py-2 rounded-pill ${
                      bg ? "text-light" : "text-dark"
                    }`}
                    style={{
                      transition: "0.3s ease",
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* THEME BUTTON */}
              <li className="nav-item mt-3 mt-lg-0">
                <button
                  onClick={() => setbg(!bg)}
                  className="btn border-0 rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    background:
                      "linear-gradient(135deg,#00F5A0,#00D9F5)",
                    color: "#000",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {bg ? <FaSun /> : <FaMoon />}
                </button>
              </li>

              {/* CTA BUTTON */}
              <li className="nav-item mt-3 mt-lg-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn px-4 py-3 fw-bold rounded-pill border-0"
                  style={{
                    background:
                      "linear-gradient(135deg,#00F5A0,#00D9F5)",
                    color: "#000",
                    boxShadow:
                      "0 10px 30px rgba(0,245,160,0.25)",
                    transition: "0.3s ease",
                  }}
                >
                  Secure Launch
                  <FaExternalLinkAlt className="ms-2" />
                </button>
              </li>

              {/* TELEGRAM BUTTON */}
              <li className="nav-item mt-3 mt-lg-0">
                <a
                  href="https://t.me/Cryptoinfinitynews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-pill px-4 py-3 fw-semibold"
                  style={{
                    border: bg
                      ? "1px solid rgba(255,255,255,0.15)"
                      : "1px solid rgba(0,0,0,0.08)",
                    color: bg ? "#fff" : "#111",
                    background: bg
                      ? "rgba(255,255,255,0.05)"
                      : "#fff",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <FaTelegramPlane className="me-2" />
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ================= MODAL ================= */}
      <SecureLaunchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;