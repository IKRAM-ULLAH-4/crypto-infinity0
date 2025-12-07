import React from 'react';
import { FaHandshake, FaBullhorn, FaChartLine, FaChevronRight, FaRegLightbulb } from 'react-icons/fa';

const HowWeWork = () => {
  const ICON_COLOR = '#00FFFF'; // Electric Cyan for professional feel
  const CARD_BG = '#151515';     // Dark background for contrast
  const STEP_COLOR = '#FF7F50';  // Vibrant Orange/Coral for numbering

  // Common card style with a lift effect
  const cardStyle = {
    transition: 'all 0.4s ease',
    backgroundColor: CARD_BG,
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    border: `1px solid ${CARD_BG}`, // Border for future hover
    height: '100%',
    position: 'relative', // Needed for absolute step number
    padding: '30px 20px 20px 20px', // Adjusted padding
  };

  // Hover effect to simulate interaction
  const cardHoverEffect = {
    transform: 'translateY(-8px)',
    boxShadow: `0 15px 45px rgba(0, 0, 0, 0.7), 0 0 15px ${ICON_COLOR}33`,
  };

  const StepCard = ({ number, icon: Icon, title, description, color }) => (
    <div className="col-lg-4 col-md-6 mb-5">
      <div 
        className="card border-0 rounded-3 text-center" 
        style={{
            ...cardStyle,
            // Inline simulation of hover
            // onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverEffect)}
            // onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
        }}
      >
        {/* Absolute Step Number (Visual Flow Element) */}
        <span 
            style={{
                position: 'absolute',
                top: '-20px', 
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: STEP_COLOR,
                color: '#000',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                zIndex: 10,
                border: '3px solid #0A0A0A',
            }}
        >
            {number}
        </span>
        
        <Icon size={50} color={color} className="mb-4 mt-3" />
        
        <h4
          className="fw-bold mb-3"
          style={{
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.4rem',
          }}
        >
          {title}
        </h4>
        <p
          className="text-muted"
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1rem',
            color: '#A0A0A0',
          }}
        >
          {description}
        </p>
      </div>
      
      {/* Visual Separator/Arrow */}
      {number < 3 && (
        <div className="d-none d-lg-block" style={{ 
            position: 'absolute', 
            right: '-12%', 
            top: '40%', 
            zIndex: 5 
        }}>
            <FaChevronRight size={30} color="#333" />
        </div>
      )}
    </div>
  );

  return (
    <section
      id="how-we-work"
      className="py-5"
      style={{
        background: '#0A0A0A', // Deep dark background
        paddingTop: '6rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="container text-center">
        {/* Title Section */}
        <h2
          className="display-4 mb-3 fw-bold text-white"
          style={{
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          Our <span style={{ color: ICON_COLOR }}>3-Step</span> Growth Framework
        </h2>
        <p className="lead mb-5" style={{ color: '#B0B0B0' }}>
            A proven, performance-driven system designed to maximize community acquisition and trust.
        </p>

        <div className="row justify-content-center position-relative">
          
          {/* Step 1: Strategy & Alignment */}
          <StepCard
            number={1}
            icon={FaRegLightbulb} // Changed icon to suggest planning
            title="Strategic Alignment"
            description="We dive deep into your project's tokenomics and roadmap to craft a high-conversion AMA and content strategy."
            color={ICON_COLOR}
          />

          {/* Step 2: High-Velocity Promotion */}
          <StepCard
            number={2}
            icon={FaBullhorn}
            title="High-Velocity Promotion"
            description="Immediate outreach leveraging our 140K+ verified community across Binance Live, X, and Telegram for maximum exposure."
            color={ICON_COLOR}
          />

          {/* Step 3: Optimization & Authority */}
          <StepCard
            number={3}
            icon={FaChartLine}
            title="Optimization & Authority"
            description="We track real-time engagement and convert AMA content into durable assets (blogs, shorts) for sustained growth and credibility."
            color={ICON_COLOR}
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;