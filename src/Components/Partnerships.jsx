import React from "react";
import "./Partnerships.css";

// Precise imports from your AMAs folder
import amaImg from "../assets/AMAs/ama.png";
import ama1Img from "../assets/AMAs/ama1.png";
import ama2Img from "../assets/AMAs/ama2.png";
import ama3Img from "../assets/AMAs/ama3.png";
import ama4Img from "../assets/AMAs/ama4.png";
import ama5Img from "../assets/AMAs/ama5.png";
import ama6Img from "../assets/AMAs/ama6.png";

const partnerData = [
  { img: amaImg, name: "Ark of Genesis", details: "Official Strategic Partnership" },
  { img: ama1Img, name: "NoahX DeFi", details: "Official Ecosystem Partner" },
  { img: ama2Img, name: "MEXQuick", details: "Strategic AMA & Collaboration" },
  { img: ama3Img, name: "Demon $hellfire", details: "Community Growth Alliance" },
  { img: ama4Img, name: "Fortaleza", details: "Official Global Partnership" },
  { img: ama5Img, name: "Bitget", details: "Strategic Exchange Partner" },
  { img: ama6Img, name: "Stray Dog", details: "Official Project Collaboration" },
];

export default function Partnerships() {
  const renderTrack = (list) => (
    <div className="partnership-track">
      {[...list, ...list].map((item, index) => (
        <div className="partnership-card" key={index}>
          <div className="card-inner">
            <div className="banner-container">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="partner-content">
              <h3>{item.name}</h3>
              <p>{item.details}</p>
              <div className="status-badge"><span className="dot"></span> Active</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="partnerships-section">
      <div className="section-header">
        <span className="top-tag">Network</span>
        <h2>Strategic Alliances</h2>
        <div className="accent-bar"></div>
      </div>
      <div className="partnership-marquee">{renderTrack(partnerData)}</div>
    </section>
  );
}