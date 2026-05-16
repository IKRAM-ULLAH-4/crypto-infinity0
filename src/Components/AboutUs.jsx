import React, { useEffect } from "react";
import { FaUsers, FaTrophy, FaRocket } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../Context/ThemeContext";

const AboutUs = () => {
  const { bg } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const sectionStyle = {
    background: bg ? "#070b14" : "#f6f8fc",
    color: bg ? "#fff" : "#111",
    padding: "90px 0",
    position: "relative",
    overflow: "hidden",
  };

  const gradientText = {
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const accentOrange = "#ff6b6b";

  const cardBase = {
    borderRadius: "18px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    backdropFilter: "blur(14px)",
    transition: "0.3s ease",
  };

  const statCard = {
    ...cardBase,
    background: bg
      ? "rgba(255,255,255,0.06)"
      : "#ffffff",
    border: bg
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid rgba(0,0,0,0.06)",
    boxShadow: bg
      ? "0 20px 40px rgba(0,0,0,0.35)"
      : "0 15px 30px rgba(0,0,0,0.08)",
  };

  const iconBox = (color) => ({
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: color,
    color: "#000",
    flexShrink: 0,
  });

  const textMuted = {
    color: bg ? "rgba(255,255,255,0.65)" : "#666",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "800",
  };

  return (
    <section id="about-us" padding="100" style={sectionStyle}>

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "rgba(0,245,160,0.12)",
          filter: "blur(120px)",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="container position-relative">

        {/* TITLE */}
        <div className="text-center mb-5" data-aos="fade-down">

          <h2 style={titleStyle}>
            The{" "}
            <span style={gradientText}>Authority</span> & Mission
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "12px auto",
              ...textMuted,
            }}
          >
            We don’t run campaigns — we build authority, trust, and real crypto adoption systems.
          </p>

        </div>

        <div className="row g-5 align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-7" data-aos="fade-right">

            <h3
              className="fw-bold mb-4"
              style={{ color: accentOrange }}
            >
              Our Crypto Marketing Edge
            </h3>

            <p style={{ fontSize: "1.1rem", ...textMuted, lineHeight: "1.8" }}>
              We are a performance-driven Web3 growth team focused on real investor exposure,
              not fake engagement or inflated metrics.
            </p>

            <p style={{ fontSize: "1.1rem", ...textMuted, lineHeight: "1.8" }}>
              Through verified networks across Binance Live, X Spaces, and Telegram ecosystems,
              we deliver sustainable visibility and trust for crypto projects.
            </p>

          </div>

          {/* RIGHT STATS */}
          <div className="col-12 col-lg-5">

            {/* STAT 1 */}
            <div className="mb-3" data-aos="zoom-in" data-aos-delay="200">
              <div style={statCard}>
                <div style={iconBox("rgba(0,245,160,0.15)")}>
                  <FaUsers />
                </div>

                <div>
                  <h3 className="fw-bold mb-0" style={{ color: "#00F5A0" }}>
                    140K+
                  </h3>
                  <small style={textMuted}>
                    Verified Community Reach
                  </small>
                </div>
              </div>
            </div>

            {/* STAT 2 */}
            <div className="mb-3" data-aos="zoom-in" data-aos-delay="350">
              <div style={statCard}>
                <div style={iconBox("rgba(255,107,107,0.15)")}>
                  <FaRocket />
                </div>

                <div>
                  <h3 className="fw-bold mb-0" style={{ color: accentOrange }}>
                    850+
                  </h3>
                  <small style={textMuted}>
                    Successful Project Launches
                  </small>
                </div>
              </div>
            </div>

            {/* STAT 3 */}
            <div data-aos="zoom-in" data-aos-delay="500">
              <div style={statCard}>
                <div style={iconBox("rgba(255,255,255,0.15)")}>
                  <FaTrophy />
                </div>

                <div>
                  <h3 className="fw-bold mb-0" style={{ color: "#fff" }}>
                    5+ Years
                  </h3>
                  <small style={textMuted}>
                    Industry Experience
                  </small>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;