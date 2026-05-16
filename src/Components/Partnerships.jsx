import React from "react";
import { useTheme } from "../Context/ThemeContext";

// Images
import amaImg from "../assets/AMAs/ama.png";
import ama1Img from "../assets/AMAs/ama1.png";
import ama2Img from "../assets/AMAs/ama2.png";
import ama3Img from "../assets/AMAs/ama3.png";
import ama4Img from "../assets/AMAs/ama4.png";
import ama5Img from "../assets/AMAs/ama5.png";
import ama6Img from "../assets/AMAs/ama6.png";

const partnerData = [
  { img: amaImg, name: "Ark of Genesis", details: "Strategic Partner" },
  { img: ama1Img, name: "NoahX DeFi", details: "Ecosystem Partner" },
  { img: ama2Img, name: "MEXQuick", details: "AMA Collaboration" },
  { img: ama3Img, name: "Demon $hellfire", details: "Growth Alliance" },
  { img: ama4Img, name: "Fortaleza", details: "Global Partner" },
  { img: ama5Img, name: "Bitget", details: "Exchange Partner" },
  { img: ama6Img, name: "Stray Dog", details: "Community Partner" },
];

export default function Partnerships() {
  const { bg } = useTheme();

  const Track = () => (
    <div className="d-flex gap-4 flex-nowrap animate-track">
      {[...partnerData, ...partnerData].map((item, index) => (
        <div
          key={index}
          className="rounded-4 p-3 flex-shrink-0"
          style={{
            width: "260px",
            background: bg
              ? "rgba(255,255,255,0.06)"
              : "#ffffff",
            border: bg
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.06)",
            backdropFilter: "blur(14px)",
            transition: "0.3s ease",
            boxShadow: bg
              ? "0 10px 30px rgba(0,0,0,0.25)"
              : "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          {/* IMAGE */}
          <div
            className="rounded-4 overflow-hidden"
            style={{ height: "140px" }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="mt-3">
            <h5
              className="fw-bold mb-1"
              style={{ color: bg ? "#fff" : "#111" }}
            >
              {item.name}
            </h5>

            <p
              className="mb-2"
              style={{
                fontSize: "0.9rem",
                color: bg
                  ? "rgba(255,255,255,0.65)"
                  : "#666",
              }}
            >
              {item.details}
            </p>

            {/* STATUS */}
            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill"
              style={{
                background: bg
                  ? "rgba(0,245,160,0.15)"
                  : "rgba(0,245,160,0.12)",
                color: "#00F5A0",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#00F5A0",
                }}
              />
              Active
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="py-5 overflow-hidden"
      style={{
        background: bg ? "#070b14" : "#f6f8fc",
        transition: "0.3s ease",
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span
            className="px-3 py-1 rounded-pill"
            style={{
              background:
                "linear-gradient(135deg,#00F5A0,#00D9F5)",
              color: "#000",
              fontWeight: "600",
              fontSize: "0.8rem",
            }}
          >
            Network
          </span>

          <h2
            className="fw-bold mt-3"
            style={{
              color: bg ? "#fff" : "#111",
              fontSize: "2.3rem",
            }}
          >
            Strategic{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#00F5A0,#00D9F5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Alliances
            </span>
          </h2>

          <p
            style={{
              color: bg ? "rgba(255,255,255,0.6)" : "#666",
              maxWidth: "600px",
              margin: "10px auto 0",
            }}
          >
            Collaborating with leading Web3 ecosystems, exchanges, and communities worldwide.
          </p>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="position-relative">
          <Track />
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style>{`
        .animate-track {
          animation: scroll 25s linear infinite;
          width: max-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}