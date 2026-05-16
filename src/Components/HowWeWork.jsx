import React, { useEffect } from "react";
import { FaRegLightbulb, FaBullhorn, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../Context/ThemeContext";

const HowWeWork = () => {
  const { bg } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const steps = [
    {
      number: "01",
      icon: FaRegLightbulb,
      title: "Strategic Alignment",
      description:
        "We analyze tokenomics, roadmap, and audience to build a high-conversion growth strategy.",
    },
    {
      number: "02",
      icon: FaBullhorn,
      title: "High-Impact Distribution",
      description:
        "We push your project across verified crypto channels for maximum real investor exposure.",
    },
    {
      number: "03",
      icon: FaChartLine,
      title: "Authority Scaling",
      description:
        "We turn campaigns into long-term assets like shorts, blogs, and community-driven content.",
    },
  ];

  const sectionStyle = {
    background: bg ? "#070b14" : "#f6f8fc",
    transition: "0.3s ease",
    padding: "90px 0",
    position: "relative",
    overflow: "hidden",
  };

  const titleStyle = {
    color: bg ? "#fff" : "#111",
    fontSize: "2.4rem",
    fontWeight: "800",
  };

  const gradientText = {
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const cardStyle = {
    background: bg
      ? "rgba(255,255,255,0.06)"
      : "#ffffff",
    border: bg
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid rgba(0,0,0,0.06)",
    borderRadius: "22px",
    padding: "28px",
    height: "100%",
    backdropFilter: "blur(14px)",
    transition: "0.3s ease",
    boxShadow: bg
      ? "0 20px 40px rgba(0,0,0,0.35)"
      : "0 15px 30px rgba(0,0,0,0.08)",
  };

  const iconBox = {
    width: "55px",
    height: "55px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    color: "#000",
    flexShrink: 0,
  };

  const numberStyle = {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: bg ? "rgba(255,255,255,0.5)" : "#888",
  };

  const textPrimary = {
    color: bg ? "#fff" : "#111",
  };

  const textMuted = {
    color: bg ? "rgba(255,255,255,0.65)" : "#666",
  };

  return (
    <section id="strategy" style={sectionStyle}>

      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(0,245,160,0.10)",
          filter: "blur(120px)",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="container position-relative">

        {/* HEADER */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 style={titleStyle}>
            Our{" "}
            <span style={gradientText}>3-Step</span> Growth System
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "10px auto",
              ...textMuted,
            }}
          >
            A performance-driven framework designed for real crypto growth, not hype.
          </p>
        </div>

        {/* STEPS */}
        <div className="row g-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div style={cardStyle} className="h-100">

                  {/* HEADER */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span style={numberStyle}>{step.number}</span>

                    <div style={iconBox}>
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <h5 className="fw-bold mb-2" style={textPrimary}>
                    {step.title}
                  </h5>

                  <p style={textMuted}>{step.description}</p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;