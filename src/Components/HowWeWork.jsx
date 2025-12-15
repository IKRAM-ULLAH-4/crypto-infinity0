import React, { useEffect } from 'react';
import { FaRegLightbulb, FaBullhorn, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HowWeWork.css';

const HowWeWork = () => {
  useEffect(() => { AOS.init({ duration: 800, easing: 'ease-in-out', once: true }); }, []);

  const steps = [
    {
      number: 1,
      icon: FaRegLightbulb,
      title: "Strategic Alignment",
      description: "We dive deep into your project's tokenomics and roadmap to craft a high-conversion AMA and content strategy."
    },
    {
      number: 2,
      icon: FaBullhorn,
      title: "High-Velocity Promotion",
      description: "Immediate outreach leveraging our 140K+ verified community across Binance Live, X, and Telegram for maximum exposure."
    },
    {
      number: 3,
      icon: FaChartLine,
      title: "Optimization & Authority",
      description: "We track real-time engagement and convert AMA content into durable assets (blogs, shorts) for sustained growth and credibility."
    }
  ];

  return (
    <section id="how-we-work" className="work-section">
      <div className="container text-center">
        <h2 className="display-4 fw-bold section-title" data-aos="fade-down">
          Our <span className="text-accent">3-Step</span> Growth Framework
        </h2>
        <p className="lead section-subtitle mb-5" data-aos="fade-down" data-aos-delay="100">
          A proven, performance-driven system designed to maximize community acquisition and trust.
        </p>

        <div className="work-steps-container">
          {steps.map(step => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="step-card" data-aos="fade-up" data-aos-delay={step.number * 100}>
                <span className="step-number-badge">{step.number}</span>
                <Icon size={50} className="step-icon" />
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
