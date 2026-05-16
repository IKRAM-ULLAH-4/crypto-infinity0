import React from "react";
import {
  FaArrowRight,
  FaPlay,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaRocket,
  FaStar,
  FaBolt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

import herophoto from "../assets/herophoto.avif";

const HeroSection = () => {
  const { bg } = useTheme();

  return (
    <section
      id="home"
      className={`position-relative overflow-hidden d-flex align-items-center ${
        bg ? "bg-black text-light" : "bg-white text-dark"
      }`}
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* BACKGROUND */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
          background: bg
            ? `
            radial-gradient(circle at top left, rgba(0,245,160,0.18), transparent 25%),
            radial-gradient(circle at bottom right, rgba(0,217,245,0.15), transparent 25%),
            linear-gradient(135deg,#020617,#000000,#07111f)
          `
            : `
            radial-gradient(circle at top left, rgba(0,245,160,0.08), transparent 25%),
            radial-gradient(circle at bottom right, rgba(0,217,245,0.08), transparent 25%),
            linear-gradient(135deg,#f8fafc,#ffffff,#eff6ff)
          `,
        }}
      />

      {/* GRID EFFECT */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
          opacity: bg ? 0.05 : 0.03,
          backgroundImage:
            "linear-gradient(to right,#00F5A0 1px,transparent 1px),linear-gradient(to bottom,#00F5A0 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* BLUR EFFECTS */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "450px",
          height: "450px",
          background: "#00F5A0",
          filter: "blur(140px)",
          opacity: 0.18,
          top: "-100px",
          left: "-100px",
          zIndex: 0,
        }}
      />

      <div
        className="position-absolute rounded-circle"
        style={{
          width: "450px",
          height: "450px",
          background: "#00D9F5",
          filter: "blur(140px)",
          opacity: 0.18,
          bottom: "-120px",
          right: "-120px",
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 text-center text-lg-start">
            {/* TOP BADGE */}
            <div
              className={`d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill fw-semibold mb-4 ${
                bg
                  ? "border border-info text-info"
                  : "bg-white shadow-sm text-primary"
              }`}
              style={{
                backdropFilter: "blur(20px)",
                background: bg
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.85)",
              }}
            >
              <FaBolt />
              #1 Web3 Marketing Community
            </div>

            {/* HEADING */}
            <h1
              className="fw-black mb-4"
              style={{
                fontSize: "clamp(2.8rem,7vw,6.2rem)",
                lineHeight: "1.05",
                fontWeight: "900",
                letterSpacing: "-2px",
              }}
            >
              Make Your{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#00F5A0,#00D9F5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Crypto Project
              </span>{" "}
              Go Viral Worldwide.
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`fs-5 mb-5 ${
                bg ? "text-light opacity-75" : "text-secondary"
              }`}
              style={{
                maxWidth: "650px",
                lineHeight: "1.9",
              }}
            >
              We help meme coins, AI startups, NFT brands, DeFi ecosystems,
              and Web3 communities dominate Telegram, X, YouTube, Binance
              Live, and the entire crypto market with real engagement and
              explosive growth.
            </p>

            {/* BUTTONS */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Link
                to="/aboutus"
                className="btn btn-lg px-5 py-3 rounded-pill fw-bold border-0"
                style={{
                  background:
                    "linear-gradient(135deg,#00F5A0,#00D9F5)",
                  color: "#000",
                  boxShadow:
                    "0 0 35px rgba(0,245,160,0.35)",
                }}
              >
                Launch Your Project
                <FaArrowRight className="ms-2" />
              </Link>

              <button
                className={`btn btn-lg px-5 py-3 rounded-pill fw-semibold ${
                  bg ? "btn-outline-light" : "btn-outline-dark"
                }`}
                style={{
                  backdropFilter: "blur(12px)",
                }}
              >
                <FaPlay className="me-2" />
                Watch Showcase
              </button>
            </div>

            {/* STATS */}
            <div className="row g-3 mt-5">
              {[
                {
                  icon: <FaUsers />,
                  value: "140K+",
                  label: "Community Reach",
                },
                {
                  icon: <FaChartLine />,
                  value: "850+",
                  label: "Projects Promoted",
                },
                {
                  icon: <FaShieldAlt />,
                  value: "24/7",
                  label: "Growth Support",
                },
              ].map((item, index) => (
                <div className="col-12 col-sm-4" key={index}>
                  <div
                    className={`rounded-4 p-4 h-100 ${
                      bg
                        ? "border border-secondary"
                        : "bg-white shadow-sm"
                    }`}
                    style={{
                      background: bg
                        ? "rgba(255,255,255,0.05)"
                        : "#fff",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    <div
                      className="mb-3"
                      style={{
                        fontSize: "1.4rem",
                        color: "#00F5A0",
                      }}
                    >
                      {item.icon}
                    </div>

                    <h3
                      className="fw-bold"
                      style={{
                        background:
                          "linear-gradient(135deg,#00F5A0,#00D9F5)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {item.value}
                    </h3>

                    <p
                      className={`small mb-0 ${
                        bg
                          ? "text-light opacity-75"
                          : "text-secondary"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="position-relative d-flex justify-content-center">
              {/* GLOW */}
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: "520px",
                  height: "520px",
                  background:
                    "linear-gradient(135deg,#00F5A0,#00D9F5)",
                  opacity: 0.2,
                  filter: "blur(140px)",
                  zIndex: 0,
                }}
              />

              {/* IMAGE */}
              <div
                className="position-relative"
                style={{
                  zIndex: 2,
                  width: "100%",
                  maxWidth: "620px",
                }}
              >
                <img
                  src={herophoto}
                  alt="Crypto Hero"
                  className="img-fluid rounded-5 shadow-lg"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    border: bg
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.08)",
                  }}
                />

                {/* TOP FLOATING CARD */}
                <div
                  className={`position-absolute top-0 start-0 rounded-4 p-3 p-md-4 ${
                    bg
                      ? "border border-secondary text-light"
                      : "bg-white shadow"
                  }`}
                  style={{
                    width: "220px",
                    transform: "translate(-10%, -20%)",
                    backdropFilter: "blur(18px)",
                    background: bg
                      ? "rgba(255,255,255,0.06)"
                      : "#fff",
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background:
                          "linear-gradient(135deg,#00F5A0,#00D9F5)",
                      }}
                    >
                      <FaRocket className="text-dark" />
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        Trending AMA
                      </h6>

                      <p className="small mb-0 opacity-75">
                        AI Meme Coin 🚀
                      </p>
                    </div>
                  </div>
                </div>

                {/* BOTTOM FLOATING CARD */}
                <div
                  className={`position-absolute bottom-0 end-0 rounded-4 p-3 p-md-4 ${
                    bg
                      ? "border border-secondary text-light"
                      : "bg-white shadow"
                  }`}
                  style={{
                    width: "230px",
                    transform: "translate(10%, 20%)",
                    backdropFilter: "blur(18px)",
                    background: bg
                      ? "rgba(255,255,255,0.06)"
                      : "#fff",
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background:
                          "linear-gradient(135deg,#00F5A0,#00D9F5)",
                      }}
                    >
                      <FaStar className="text-dark" />
                    </div>

                    <div>
                      <h4
                        className="fw-bold mb-1"
                        style={{
                          background:
                            "linear-gradient(135deg,#00F5A0,#00D9F5)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        +250%
                      </h4>

                      <p className="small opacity-75 mb-0">
                        Viral Growth Rate
                      </p>
                    </div>
                  </div>
                </div>

                {/* LIVE BADGE */}
                <div
                  className="position-absolute rounded-pill fw-bold px-4 py-3 d-none d-md-block"
                  style={{
                    top: "50%",
                    right: "-40px",
                    background:
                      "linear-gradient(135deg,#00F5A0,#00D9F5)",
                    color: "#000",
                    boxShadow:
                      "0 0 30px rgba(0,245,160,0.35)",
                  }}
                >
                  🔥 LIVE AMA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;