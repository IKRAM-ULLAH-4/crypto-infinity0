import React from "react";
import {
  FaRocket,
  FaUsers,
  FaBullhorn,
  FaShieldAlt,
  FaGlobe,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

const Infinity = () => {
  const { bg } = useTheme();

  const features = [
    {
      icon: <FaBullhorn />,
      title: "Viral Crypto Marketing",
      desc: "Strategic promotion campaigns across Telegram, X, Binance Live, YouTube, and top Web3 communities.",
    },
    {
      icon: <FaUsers />,
      title: "Real Community Growth",
      desc: "We focus on verified engagement and investor-focused exposure instead of fake bot traffic.",
    },
    {
      icon: <FaRocket />,
      title: "Launch Acceleration",
      desc: "Helping meme coins, AI startups, NFT brands, and DeFi projects dominate the market.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Trusted Reputation",
      desc: "Crypto Infinity is built on authority, trust, partnerships, and long-term ecosystem growth.",
    },
  ];

  const stats = [
    {
      value: "140K+",
      label: "Community Reach",
      icon: <FaUsers />,
    },
    {
      value: "850+",
      label: "Projects Promoted",
      icon: <FaChartLine />,
    },
    {
      value: "5+",
      label: "Years Experience",
      icon: <FaHandshake />,
    },
    {
      value: "24/7",
      label: "Growth Support",
      icon: <FaGlobe />,
    },
  ];

  const socialLinks = [
    {
      icon: <FaTelegramPlane />,
      href: "https://t.me/Cryptoinfinitys",
      color: "#00F5A0",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/Cryptoinfinitys",
      color: "#00D9F5",
    },
    {
      icon: <FaYoutube />,
      href: "https://youtube.com/@crypto_infinity01",
      color: "#FF4D4D",
    },
  ];

  return (
    <section
      className={`position-relative overflow-hidden ${
        bg ? "bg-black text-light" : "bg-light text-dark"
      }`}
      style={{
        minHeight: "100vh",
        paddingTop: "130px",
        paddingBottom: "100px",
      }}
    >
      {/* BACKGROUND */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          zIndex: 0,
          background: bg
            ? `
              radial-gradient(circle at top left, rgba(0,245,160,0.12), transparent 25%),
              radial-gradient(circle at bottom right, rgba(0,217,245,0.12), transparent 25%),
              linear-gradient(135deg,#020617,#000000,#07111f)
            `
            : `
              radial-gradient(circle at top left, rgba(0,245,160,0.06), transparent 25%),
              radial-gradient(circle at bottom right, rgba(0,217,245,0.06), transparent 25%),
              linear-gradient(135deg,#f8fafc,#ffffff,#eff6ff)
            `,
        }}
      />

      {/* GRID */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          zIndex: 0,
          opacity: bg ? 0.04 : 0.025,
          backgroundImage:
            "linear-gradient(to right,#00F5A0 1px,transparent 1px), linear-gradient(to bottom,#00F5A0 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="container position-relative" style={{ zIndex: 5 }}>
        {/* HERO */}
        <div className="text-center mb-5">
          <div
            className={`d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill fw-semibold mb-4 ${
              bg
                ? "border border-info text-info"
                : "bg-white shadow-sm text-primary"
            }`}
            style={{
              backdropFilter: "blur(12px)",
              background: bg
                ? "rgba(255,255,255,0.05)"
                : "rgba(255,255,255,0.8)",
            }}
          >
            <FaRocket />
            Web3 Growth Ecosystem
          </div>

          <h1
            className="fw-black mb-4"
            style={{
              fontSize: "clamp(2.8rem,7vw,5.8rem)",
              lineHeight: "1.05",
              fontWeight: "900",
              letterSpacing: "-2px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Crypto Infinity
            </span>
          </h1>

          <p
            className={`mx-auto fs-5 ${
              bg ? "text-light opacity-75" : "text-secondary"
            }`}
            style={{
              maxWidth: "850px",
              lineHeight: "1.9",
            }}
          >
            Crypto Infinity is a next-generation Web3 marketing and community
            growth platform helping crypto startups, meme coins, NFT brands,
            AI projects, and blockchain ecosystems gain explosive visibility,
            verified engagement, and long-term authority in the crypto space.
          </p>
        </div>

        {/* STATS */}
        <div className="row g-4 mb-5">
          {stats.map((item, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div
                className={`h-100 rounded-5 p-4 text-center ${
                  bg ? "border border-secondary" : "bg-white shadow-sm"
                }`}
                style={{
                  background: bg
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    fontSize: "1.8rem",
                    color: "#00F5A0",
                  }}
                >
                  {item.icon}
                </div>

                <h2
                  className="fw-bold mb-1"
                  style={{
                    background:
                      "linear-gradient(135deg,#00F5A0,#00D9F5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.value}
                </h2>

                <p
                  className={`mb-0 ${
                    bg ? "text-light opacity-75" : "text-secondary"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ABOUT CONTENT */}
        <div className="row align-items-center g-5 mb-5">
          {/* LEFT */}
          <div className="col-lg-6">
            <div
              className={`rounded-5 p-4 p-lg-5 h-100 ${
                bg ? "border border-secondary" : "bg-white shadow"
              }`}
              style={{
                background: bg
                  ? "rgba(255,255,255,0.04)"
                  : "#ffffff",
                backdropFilter: "blur(16px)",
              }}
            >
              <h2
                className="fw-bold mb-4"
                style={{
                  fontSize: "2.3rem",
                }}
              >
                Building The Future Of{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#00F5A0,#00D9F5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Web3 Visibility
                </span>
              </h2>

              <p
                className={`mb-4 ${
                  bg ? "text-light opacity-75" : "text-secondary"
                }`}
                style={{
                  lineHeight: "1.9",
                  fontSize: "1.05rem",
                }}
              >
                Crypto Infinity was created to solve one of the biggest
                problems in Web3 — authentic exposure. Most projects struggle
                to reach real communities, investors, and influencers.
              </p>

              <p
                className={`mb-0 ${
                  bg ? "text-light opacity-75" : "text-secondary"
                }`}
                style={{
                  lineHeight: "1.9",
                  fontSize: "1.05rem",
                }}
              >
                Our mission is to connect high-potential blockchain projects
                with active crypto communities through powerful marketing,
                strategic partnerships, live AMAs, influencer collaborations,
                and viral ecosystem growth strategies.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="row g-4">
              {features.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div
                    className={`h-100 rounded-5 p-4 ${
                      bg
                        ? "border border-secondary"
                        : "bg-white shadow-sm"
                    }`}
                    style={{
                      background: bg
                        ? "rgba(255,255,255,0.04)"
                        : "#fff",
                      backdropFilter: "blur(12px)",
                      transition: "0.3s ease",
                    }}
                  >
                    <div
                      className="mb-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "70px",
                        height: "70px",
                        background:
                          "linear-gradient(135deg,#00F5A0,#00D9F5)",
                        color: "#000",
                        fontSize: "1.5rem",
                      }}
                    >
                      {item.icon}
                    </div>

                    <h4 className="fw-bold mb-3">{item.title}</h4>

                    <p
                      className={`mb-0 ${
                        bg
                          ? "text-light opacity-75"
                          : "text-secondary"
                      }`}
                      style={{
                        lineHeight: "1.8",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`rounded-5 p-4 p-lg-5 text-center ${
            bg ? "border border-secondary" : "bg-white shadow"
          }`}
          style={{
            background: bg
              ? "rgba(255,255,255,0.04)"
              : "#fff",
            backdropFilter: "blur(16px)",
          }}
        >
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(2rem,5vw,3.5rem)",
            }}
          >
            Ready To Scale Your{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#00F5A0,#00D9F5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Crypto Project?
            </span>
          </h2>

          <p
            className={`mx-auto mb-4 ${
              bg ? "text-light opacity-75" : "text-secondary"
            }`}
            style={{
              maxWidth: "700px",
              lineHeight: "1.8",
            }}
          >
            Join hundreds of successful projects leveraging Crypto Infinity
            for explosive growth, trusted partnerships, and global Web3
            exposure.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg,#00F5A0,#00D9F5)",
                    color: "#000",
                    fontSize: "1.4rem",
                    transition: "0.3s ease",
                  }}
                >
                  {item.icon}
                </div>
              </a>
            ))}
          </div>

          <Link
            to="/"
            className="btn btn-lg px-5 py-3 rounded-pill fw-bold border-0"
            style={{
              background:
                "linear-gradient(135deg,#00F5A0,#00D9F5)",
              color: "#000",
              boxShadow: "0 0 40px rgba(0,245,160,0.3)",
            }}
          >
            Back To Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Infinity;