import React, { useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../Context/ThemeContext";

import irfan from "../assets/irfan.jpeg";
import zehra from "../assets/zehra.jpeg";

const MeetTheTeam = () => {
  const { bg } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const teamMembers = [
    {
      name: "Irfan Zareen",
      role: "Founder & CEO",
      bio: "Architect of Web3 growth systems and crypto marketing strategist.",
      image: irfan,
      telegram: "https://t.me/IrfanZareen",
    },
    {
      name: "Zehra",
      role: "Head of Growth",
      bio: "Specialist in user acquisition, conversion funnels, and community scaling.",
      image: zehra,
      telegram: "https://t.me/RealZehra",
    },
  ];

  const sectionStyle = {
    background: bg ? "#070b14" : "#f6f8fc",
    color: bg ? "#fff" : "#111",
    padding: "90px 0",
    transition: "0.3s ease",
  };

  const gradientText = {
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const card = {
    background: bg ? "rgba(255,255,255,0.06)" : "#fff",
    border: bg
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid rgba(0,0,0,0.06)",
    borderRadius: "22px",
    padding: "26px",
    textAlign: "center",
    transition: "0.3s ease",
    backdropFilter: "blur(14px)",
    boxShadow: bg
      ? "0 25px 50px rgba(0,0,0,0.35)"
      : "0 20px 40px rgba(0,0,0,0.08)",
  };

  const avatar = {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #00F5A0",
    marginBottom: "15px",
  };

  const roleStyle = {
    color: "#00F5A0",
    fontWeight: "600",
    fontSize: "1rem",
  };

  const bioStyle = {
    color: bg ? "rgba(255,255,255,0.65)" : "#666",
    fontSize: "0.95rem",
    lineHeight: "1.6",
  };

  const telegramBtn = {
    marginTop: "18px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "12px",
    background: "linear-gradient(135deg,#00F5A0,#00D9F5)",
    color: "#000",
    fontWeight: "600",
    textDecoration: "none",
  };

  return (
    <section id="admin" style={sectionStyle}>
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            Meet the{" "}
            <span style={gradientText}>Leadership</span>
          </h2>

          <p style={{ color: bg ? "rgba(255,255,255,0.6)" : "#666" }}>
            The execution team behind Crypto Infinity’s growth engine.
          </p>
        </div>

        {/* GRID */}
        <div className="row g-4 justify-content-center">
          {teamMembers.map((m, i) => (
            <div
              key={i}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div
                style={card}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                {/* IMAGE */}
                <img src={m.image} alt={m.name} style={avatar} />

                {/* NAME */}
                <h4 className="fw-bold" style={{ color: bg ? "#fff" : "#111" }}>
                  {m.name}
                </h4>

                {/* ROLE */}
                <p style={roleStyle}>{m.role}</p>

                {/* BIO */}
                <p style={bioStyle}>{m.bio}</p>

                {/* TELEGRAM */}
                <a
                  href={m.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={telegramBtn}
                >
                  <FaTelegramPlane />
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;