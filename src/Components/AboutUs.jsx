import React from 'react';
import { FaUsers, FaTrophy, FaRocket } from 'react-icons/fa'; // Icons for key metrics

const AboutUs = () => {
  const ICON_COLOR = '#00FFFF'; // Electric Cyan for high visibility
  const ACCENT_COLOR = '#FF7F50'; // Vibrant Orange/Coral for focus

  const statCardStyle = {
    backgroundColor: '#1E2833', // Slightly lighter dark background for cards
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    height: '100%',
  };

  return (
    <section
      id="about-us"
      className="py-5"
      style={{
        background: '#0A0A0A', // Deep dark background
        paddingTop: '6rem',
        paddingBottom: '6rem',
        color: '#fff',
      }}
    >
      <div className="container">
        
        {/* Title Section */}
        <h2
          className="display-4 mb-3 fw-bold text-center"
          style={{
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          The <span style={{ color: ICON_COLOR }}>Authority</span> & The Mission
        </h2>
        <p className="lead mb-5 text-center" style={{ color: '#B0B0B0' }}>
          We don't just run campaigns—we build essential trust and drive verifiable results in the Web3 space.
        </p>
        
        <div className="row align-items-center">
          
          {/* Left Column: Mission & Narrative */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h3 className="fw-bold mb-4" style={{ color: ACCENT_COLOR, fontSize: '2rem' }}>
              Our Unmatched Crypto Marketing Edge
            </h3>
            <p className="mb-4" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#E0E0E0' }}>
              We are a dedicated team of blockchain evangelists and marketing specialists who have been successfully navigating the crypto landscape for years. Our foundation is built on trust, verifiable engagement, and deep industry connections.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#E0E0E0' }}>
              We eliminate the middlemen and the bots, connecting you directly with active investors and decision-makers across platforms like Binance Live, X, and Telegram. When you partner with us, you secure a proven, results-driven launch strategy.
            </p>
          </div>

          {/* Right Column: Key Statistics/Metrics */}
          <div className="col-lg-5">
            <div className="row g-3">
              
              {/* Stat 1: Community Size */}
              <div className="col-12">
                <div style={statCardStyle} className="d-flex align-items-center">
                  <FaUsers size={40} color={ICON_COLOR} className="me-4 flex-shrink-0" />
                  <div>
                    <h4 className="mb-0 fw-bolder" style={{ color: ICON_COLOR, fontSize: '1.8rem' }}>140K+</h4>
                    <p className="mb-0 text-uppercase" style={{ fontSize: '0.9rem', color: '#A0A0A0' }}>Verified Community Reach</p>
                  </div>
                </div>
              </div>

              {/* Stat 2: Projects Launched */}
              <div className="col-12">
                <div style={statCardStyle} className="d-flex align-items-center">
                  <FaRocket size={40} color={ACCENT_COLOR} className="me-4 flex-shrink-0" />
                  <div>
                    <h4 className="mb-0 fw-bolder" style={{ color: ACCENT_COLOR, fontSize: '1.8rem' }}>850+</h4>
                    <p className="mb-0 text-uppercase" style={{ fontSize: '0.9rem', color: '#A0A0A0' }}>Successful Projects Launched</p>
                  </div>
                </div>
              </div>

              {/* Stat 3: Years Experience */}
              <div className="col-12">
                <div style={statCardStyle} className="d-flex align-items-center">
                  <FaTrophy size={40} color="#E0E0E0" className="me-4 flex-shrink-0" />
                  <div>
                    <h4 className="mb-0 fw-bolder" style={{ color: '#E0E0E0', fontSize: '1.8rem' }}>5+ Years</h4>
                    <p className="mb-0 text-uppercase" style={{ fontSize: '0.9rem', color: '#A0A0A0' }}>Dedicated Crypto Marketing Experience</p>
                  </div>
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