import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaBolt,
  FaYoutube,
  FaTwitter,
  FaTerminal,
  FaHandshake,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../Context/ThemeContext";

const AMAPackages = () => {
  const { bg } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const telegramLink = "https://t.me/IrfanZareen";

  const packages = [
    {
      title: "TG Intro Ads",
      price: 100,
      desc: "Telegram exposure boost",
      icon: <FaTerminal />,
      features: ["Pinned Post", "Community Intro", "Link Placement"],
    },
    {
      title: "X (Twitter) Ads",
      price: 100,
      desc: "Viral Twitter reach",
      icon: <FaTwitter />,
      features: ["Promotional Tweet", "Investor Reach", "Hashtag Boost"],
    },
    {
      title: "Telegram AMA",
      price: 400,
      desc: "Community engagement session",
      icon: <FaTerminal />,
      features: ["1h AMA", "Announcement", "Custom Graphics"],
      isPopular: true,
    },
    {
      title: "YouTube Review",
      price: 500,
      desc: "Deep project breakdown",
      icon: <FaYoutube />,
      features: ["Full Video Review", "Bio Link", "Social Push"],
    },
    {
      title: "X Space AMA",
      price: 550,
      desc: "Live audience exposure",
      icon: <FaTwitter />,
      features: ["Voice Space", "Recorded Session", "Global Reach"],
    },
    {
      title: "Partnership Plan",
      price: 1000,
      desc: "Full ecosystem growth",
      icon: <FaHandshake />,
      features: [
        "TG + X Campaign",
        "AMA Session",
        "Website Listing",
        "Growth Funnel",
      ],
      isBest: true,
    },
  ];

  const sectionStyle = {
    background: bg ? "#070b14" : "#f6f8fc",
    padding: "90px 0",
    position: "relative",
    overflow: "hidden",
    transition: "0.3s ease",
  };

  const gradient = {
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const card = {
    background: bg ? "rgba(255,255,255,0.06)" : "#fff",
    border: bg
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid rgba(0,0,0,0.06)",
    borderRadius: "20px",
    padding: "24px",
    minWidth: "280px",
    backdropFilter: "blur(14px)",
    transition: "0.3s ease",
    boxShadow: bg
      ? "0 20px 40px rgba(0,0,0,0.35)"
      : "0 15px 30px rgba(0,0,0,0.08)",
    position: "relative",
  };

  const iconBox = {
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    color: "#000",
    marginBottom: "12px",
  };

  const button = {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    borderRadius: "12px",
    border: "none",
    fontWeight: "600",
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    color: "#000",
    cursor: "pointer",
  };

  return (
    <section id="ama-packages" style={sectionStyle}>
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold" style={{ color: bg ? "#fff" : "#111", fontSize: "2.4rem" }}>
            Grow Your{" "}
            <span style={gradient}>Ecosystem</span>
          </h2>

          <p style={{ color: bg ? "rgba(255,255,255,0.6)" : "#666" }}>
            Premium marketing packages designed for real crypto growth.
          </p>
        </div>

        {/* SCROLL ROW */}
        <div
          className="d-flex gap-4 overflow-auto pb-3"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              style={{
                ...card,
                border: pkg.isPopular
                  ? "1px solid rgba(0,245,160,0.4)"
                  : card.border,
              }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >

              {/* BADGE */}
              {pkg.isPopular && (
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "#00F5A0",
                    color: "#000",
                    fontSize: "0.7rem",
                    padding: "4px 10px",
                    borderRadius: "50px",
                    fontWeight: "700",
                  }}
                >
                  <FaBolt /> POPULAR
                </div>
              )}

              {/* ICON */}
              <div style={iconBox}>{pkg.icon}</div>

              {/* TITLE */}
              <h5 style={{ color: bg ? "#fff" : "#111", fontWeight: "700" }}>
                {pkg.title}
              </h5>

              {/* PRICE */}
              <h3 style={{ color: "#00F5A0", fontWeight: "800" }}>
                ${pkg.price}
              </h3>

              {/* FEATURES */}
              <ul style={{ padding: 0, listStyle: "none", marginTop: "10px" }}>
                {pkg.features.map((f, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      color: bg ? "rgba(255,255,255,0.7)" : "#555",
                      fontSize: "0.9rem",
                      marginBottom: "6px",
                    }}
                  >
                    <FaCheckCircle color="#00F5A0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button style={button} onClick={() => window.open(telegramLink)}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AMAPackages;