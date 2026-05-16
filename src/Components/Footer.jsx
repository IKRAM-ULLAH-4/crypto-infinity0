import React from "react";
import {
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
  FaRocket,
  FaArrowUp,
} from "react-icons/fa";

import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
  const { bg } = useTheme();

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "https://twitter.com/Cryptoinfinitys",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: FaTelegramPlane,
      href: "https://t.me/Cryptoinfinitys",
      label: "Telegram",
      color: "#0088cc",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@crypto_infinity01",
      label: "YouTube",
      color: "#ff0000",
    },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Strategy", href: "#strategy" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`position-relative overflow-hidden ${
        bg ? "text-light" : "text-dark"
      }`}
      style={{
        background: bg
          ? "linear-gradient(135deg,#020617,#000000,#07111f)"
          : "linear-gradient(135deg,#f8fafc,#ffffff,#eff6ff)",
        borderTop: bg
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
          background: bg
            ? `
            radial-gradient(circle at top left, rgba(0,245,160,0.15), transparent 25%),
            radial-gradient(circle at bottom right, rgba(0,217,245,0.12), transparent 25%)
          `
            : `
            radial-gradient(circle at top left, rgba(0,245,160,0.08), transparent 25%),
            radial-gradient(circle at bottom right, rgba(0,217,245,0.08), transparent 25%)
          `,
        }}
      />

      {/* GRID EFFECT */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
          opacity: bg ? 0.04 : 0.025,
          backgroundImage:
            "linear-gradient(to right,#00F5A0 1px,transparent 1px),linear-gradient(to bottom,#00F5A0 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div
        className="container position-relative"
        style={{
          zIndex: 2,
          paddingTop: "90px",
          paddingBottom: "40px",
        }}
      >
        <div className="row g-5 align-items-start">
          {/* LEFT */}
          <div className="col-lg-5 text-center text-lg-start">
            {/* LOGO */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4">
              <div
                className="rounded-4 d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  background:
                    "linear-gradient(135deg,#00F5A0,#00D9F5)",
                  boxShadow:
                    "0 0 25px rgba(0,245,160,0.35)",
                }}
              >
                <FaRocket className="text-dark fs-3" />
              </div>

              <div className="ms-3">
                <h3 className="fw-black mb-0">
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg,#00F5A0,#00D9F5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Crypto
                  </span>{" "}
                  Infinity
                </h3>

                <small
                  className={
                    bg
                      ? "text-light opacity-75"
                      : "text-secondary"
                  }
                >
                  Web3 Marketing Network
                </small>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className={`mb-4 ${
                bg
                  ? "text-light opacity-75"
                  : "text-secondary"
              }`}
              style={{
                lineHeight: "1.9",
                maxWidth: "500px",
              }}
            >
              Helping meme coins, NFT brands, AI startups,
              and Web3 ecosystems dominate Telegram,
              Twitter, YouTube, and global crypto communities
              with real engagement and explosive visibility.
            </p>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: bg
                        ? "rgba(255,255,255,0.06)"
                        : "#fff",
                      border: bg
                        ? "1px solid rgba(255,255,255,0.08)"
                        : "1px solid rgba(0,0,0,0.06)",
                      color: item.color,
                      fontSize: "1.2rem",
                      transition: "0.3s ease",
                      backdropFilter: "blur(16px)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-6px)";
                      e.currentTarget.style.boxShadow = `0 0 25px ${item.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0px)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* CENTER */}
          <div className="col-md-6 col-lg-3 text-center text-lg-start">
            <h5
              className="fw-bold mb-4"
              style={{
                color: "#00F5A0",
              }}
            >
              Quick Links
            </h5>

            <div className="d-flex flex-column gap-3">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-decoration-none ${
                    bg
                      ? "text-light opacity-75"
                      : "text-secondary"
                  }`}
                  style={{
                    transition: "0.3s ease",
                    width: "fit-content",
                    margin: "0 auto",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00F5A0";
                    e.currentTarget.style.transform =
                      "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.transform =
                      "translateX(0px)";
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-6 col-lg-4 text-center text-lg-start">
            <div
              className="rounded-5 p-4"
              style={{
                background: bg
                  ? "rgba(255,255,255,0.05)"
                  : "#fff",
                border: bg
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(0,0,0,0.06)",
                backdropFilter: "blur(18px)",
              }}
            >
              <h5
                className="fw-bold mb-3"
                style={{
                  color: "#00D9F5",
                }}
              >
                Ready To Go Viral?
              </h5>

              <p
                className={`small mb-4 ${
                  bg
                    ? "text-light opacity-75"
                    : "text-secondary"
                }`}
                style={{
                  lineHeight: "1.8",
                }}
              >
                Launch your next crypto campaign with our
                global Web3 promotion ecosystem.
              </p>

              <a
                href="https://t.me/Cryptoinfinitys"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100 py-3 rounded-pill fw-bold border-0"
                style={{
                  background:
                    "linear-gradient(135deg,#00F5A0,#00D9F5)",
                  color: "#000",
                  boxShadow:
                    "0 0 25px rgba(0,245,160,0.25)",
                }}
              >
                Join Community
                <FaTelegramPlane className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className={`d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 pt-4 gap-3 ${
            bg
              ? "border-top border-secondary"
              : "border-top"
          }`}
        >
          <p
            className={`small mb-0 text-center ${
              bg
                ? "text-light opacity-75"
                : "text-secondary"
            }`}
          >
            © {new Date().getFullYear()} Crypto Infinity.
            All Rights Reserved | Powering Web3 Visibility
            & Growth.
          </p>

          {/* SCROLL TOP */}
          <a
            href="#home"
            className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
            style={{
              width: "50px",
              height: "50px",
              background:
                "linear-gradient(135deg,#00F5A0,#00D9F5)",
              color: "#000",
              boxShadow:
                "0 0 20px rgba(0,245,160,0.25)",
            }}
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;