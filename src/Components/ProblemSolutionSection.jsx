import React from "react";
import { useTheme } from "../Context/ThemeContext";
import {
  FaExclamationTriangle,
  FaRocket,
  FaMicrochip,
  FaHandshake,
} from "react-icons/fa";

const ProblemSolutionSection = () => {
  const { bg } = useTheme();

  const sectionStyle = {
    background: bg ? "#070b14" : "#f6f8fc",
    transition: "0.3s ease",
    position: "relative",
    overflow: "hidden",
    padding: "80px 0",
  };

  const cardBase = {
    borderRadius: "20px",
    padding: "28px",
    height: "100%",
    backdropFilter: "blur(14px)",
    transition: "0.3s ease",
  };

  const problemCard = {
    ...cardBase,
    background: bg
      ? "rgba(255,255,255,0.05)"
      : "#ffffff",
    border: bg
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid rgba(0,0,0,0.06)",
    boxShadow: bg
      ? "0 20px 40px rgba(0,0,0,0.4)"
      : "0 15px 30px rgba(0,0,0,0.08)",
  };

  const solutionCard = {
    ...problemCard,
    border: "1px solid rgba(0,245,160,0.25)",
  };

  const titleGradient = {
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const iconBox = (color) => ({
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: color,
    color: "#000",
    flexShrink: 0,
  });

  const textPrimary = {
    color: bg ? "#fff" : "#111",
  };

  const textMuted = {
    color: bg ? "rgba(255,255,255,0.65)" : "#666",
  };

  const item = {
    display: "flex",
    gap: "14px",
    marginBottom: "18px",
  };

  return (
    <section id="process" style={sectionStyle}>

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
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "2.4rem", ...textPrimary }}>
            The{" "}
            <span style={{ color: "#ff6b6b" }}>Problem</span> vs{" "}
            <span style={titleGradient}>Our Solution</span>
          </h2>

          <p style={{ maxWidth: "650px", margin: "10px auto", ...textMuted }}>
            Most crypto projects fail due to poor visibility, fake engagement and weak authority.
            We solve that with real distribution and real growth systems.
          </p>
        </div>

        <div className="row g-4">

          {/* PROBLEM */}
          <div className="col-12 col-lg-6">
            <div style={problemCard}>

              <h4 className="fw-bold mb-4" style={{ color: "#ff6b6b" }}>
                Critical Web3 Problems
              </h4>

              <div style={item}>
                <div style={iconBox("rgba(255,107,107,0.15)")}>
                  <FaExclamationTriangle />
                </div>
                <div>
                  <h6 style={textPrimary}>Low Organic Reach</h6>
                  <p style={textMuted}>
                    New projects get buried under noise and never reach real investors.
                  </p>
                </div>
              </div>

              <div style={item}>
                <div style={iconBox("rgba(255,107,107,0.15)")}>
                  <FaExclamationTriangle />
                </div>
                <div>
                  <h6 style={textPrimary}>Fake Engagement Problem</h6>
                  <p style={textMuted}>
                    Bots destroy trust and reduce real community conversion.
                  </p>
                </div>
              </div>

              <div style={item}>
                <div style={iconBox("rgba(255,107,107,0.15)")}>
                  <FaExclamationTriangle />
                </div>
                <div>
                  <h6 style={textPrimary}>No Brand Authority</h6>
                  <p style={textMuted}>
                    Projects fail to build long-term credibility in the market.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SOLUTION */}
          <div className="col-12 col-lg-6">
            <div style={solutionCard}>

              <h4 className="fw-bold mb-4" style={{ color: "#00F5A0" }}>
                Crypto Infinity Solution
              </h4>

              <div style={item}>
                <div style={iconBox("rgba(0,245,160,0.15)")}>
                  <FaRocket />
                </div>
                <div>
                  <h6 style={textPrimary}>Tier-1 Exposure</h6>
                  <p style={textMuted}>
                    Direct access to high-quality crypto communities & influencers.
                  </p>
                </div>
              </div>

              <div style={item}>
                <div style={iconBox("rgba(0,245,160,0.15)")}>
                  <FaMicrochip />
                </div>
                <div>
                  <h6 style={textPrimary}>Content Engine Growth</h6>
                  <p style={textMuted}>
                    Every campaign converts into viral short-form content.
                  </p>
                </div>
              </div>

              <div style={item}>
                <div style={iconBox("rgba(0,245,160,0.15)")}>
                  <FaHandshake />
                </div>
                <div>
                  <h6 style={textPrimary}>Instant Trust Building</h6>
                  <p style={textMuted}>
                    Leverage our network for immediate credibility and adoption.
                  </p>
                </div>
              </div>

              <div className="text-center mt-4 pt-3 border-top" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <span style={titleGradient} className="fw-bold">
                  Stop hype. Start real growth.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;