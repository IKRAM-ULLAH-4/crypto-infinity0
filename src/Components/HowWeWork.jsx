import React, { useEffect } from 'react';
import { FaRegLightbulb, FaBullhorn, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HowWeWork.css';

const HowWeWork = () => {
  useEffect(() => { 
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); 
  }, []);

  const steps = [
    {
      number: "01",
      icon: FaRegLightbulb,
      title: "Strategic Alignment",
      description: "We dive deep into your project's tokenomics and roadmap to craft a high-conversion AMA and content strategy."
    },
    {
      number: "02",
      icon: FaBullhorn,
      title: "High-Velocity Promotion",
      description: "Immediate outreach leveraging our verified community across Binance Live, X, and Telegram for maximum exposure."
    },
    {
      number: "03",
      icon: FaChartLine,
      title: "Optimization & Authority",
      description: "We track engagement and convert AMA content into durable assets like blogs and shorts for sustained growth."
    }
  ];

  return (
    <section id="strategy" className="work-section">
      <div className="container text-center">
        <div className="section-header" data-aos="fade-down">
          <span className="top-tag">Process</span>
          <h2 className="display-4 fw-bold">
            Our <span className="highlight">3-Step</span> Growth Framework
          </h2>
          <div className="accent-bar"></div>
          <p className="header-subtitle">
            A proven, performance-driven system designed to maximize community acquisition and trust.
          </p>
        </div>

        <div className="work-steps-container">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="step-card" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="card-inner-glow"></div>
                <div className="step-header">
                  <span className="step-number">{step.number}</span>
                  <div className="icon-box">
                    <Icon size={40} />
                  </div>
                </div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
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