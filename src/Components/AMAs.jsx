import React from "react";
import "./AMAs.css";

// Import AMA images from the assets folder shown in your screenshot
import ama from "../assets/AMAs/ama.png";
import ama1 from "../assets/AMAs/ama1.png";
import ama2 from "../assets/AMAs/ama2.png";
import ama3 from "../assets/AMAs/ama3.png";
import ama4 from "../assets/AMAs/ama4.png";
import ama5 from "../assets/AMAs/ama5.png";
import ama6 from "../assets/AMAs/ama6.png";

const amaData = [
  { id: 1, img: ama, title: "Official Partnership", platform: "Crypto Infinity" },
  { id: 2, img: ama1, title: "AMA Session", platform: "Community Hub" },
  { id: 3, img: ama2, title: "Fortaleza Collab", platform: "Digital Ecosystem" },
  { id: 4, img: ama3, title: "Global Outreach", platform: "Web3 Network" },
  { id: 5, img: ama4, title: "Strategic Alliance", platform: "Blockchain" },
  { id: 6, img: ama5, title: "Developer AMA", platform: "Tech Series" },
  { id: 7, img: ama6, title: "Future Insights", platform: "Main Stage" },
];

export default function AMAs() {
  const renderAMAStrip = (list) => (
    <div className="ama-track">
      {[...list, ...list].map((item, index) => (
        <div className="ama-card" key={index}>
          <div className="ama-image-wrapper">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="ama-info">
            <span className="ama-title">{item.title}</span>
            <span className="ama-subtitle">{item.platform}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="ama-section">
      <div className="ama-header">
        <h2>Strategic AMAs & Events</h2>
        <div className="header-line"></div>
      </div>

      <div className="ama-marquee">
        {renderAMAStrip(amaData)}
      </div>
    </section>
  );
}