import React from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaRocket, FaHandshake, FaBullhorn, FaMicrochip } from 'react-icons/fa'; 

const ProblemSolutionSection = () => {
  // Colors
  const sectionBg = '#0A0A0A';
  const problemAccent = '#FF7F50';
  const solutionAccent = '#00FFFF';

  // --- Responsive Styles ---
  const mainHeadlineStyle = { 
    color: '#fff', 
    fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', 
    letterSpacing: '1.5px' 
  };

  const cardHeadlineStyle = (color) => ({
    color: color,
    fontSize: 'clamp(1.4rem, 2vw + 0.2rem, 1.8rem)',
    borderBottom: `2px solid ${color}55`,
    paddingBottom: '10px',
    marginBottom: '1rem'
  });

  const sectionPaddingStyle = { 
    background: sectionBg, 
    paddingTop: 'clamp(4rem, 6vw, 8rem)', 
    paddingBottom: 'clamp(4rem, 6vw, 8rem)',
    position: 'relative',
    overflow: 'hidden',
  };

  const cardStyle = (accent) => ({
    backgroundColor: '#151515',
    color: '#fff',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    borderRadius: '20px',
    boxShadow: `0 0 40px ${accent}33`,
    border: `1px solid ${accent}33`,
    padding: '2rem',
    height: '100%',
  });

  const listItemStyle = (iconColor) => ({
    display: 'flex',
    alignItems: 'start',
    marginBottom: '1rem'
  });

  const iconStyle = { marginRight: '0.75rem', marginTop: '0.25rem', flexShrink: 0 };

  return (
    <section 
      id="problem-solution" 
      style={sectionPaddingStyle}
    >
      {/* Radial Background */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '80vw',
        height: '80vh',
        background: 'radial-gradient(circle, #00FFFF11 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container position-relative" style={{ zIndex: 10 }}>
        <h2 className="text-center fw-bold mb-5" style={mainHeadlineStyle}>
          The <span style={{ color: problemAccent }}>Hurdle</span> vs. Our <span style={{ color: solutionAccent }}>Hyper-Growth Engine</span>
        </h2>

        <div className="row g-4">
          {/* PROBLEM CARD */}
          <div className="col-12 col-lg-6">
            <div style={cardStyle(problemAccent)} className="h-100">
              <h3 style={cardHeadlineStyle(problemAccent)}>Critical Web3 Challenges</h3>
              <p style={{ fontSize: '1rem', color: '#B0B0B0', opacity: 0.9 }}>
                Stop losing traction. New projects face three existential threats that kill potential before launch:
              </p>

              <div>
                <div style={listItemStyle(problemAccent)}>
                  <FaExclamationTriangle size={20} color={problemAccent} style={iconStyle} />
                  <div>
                    <h5 className="text-white fw-semibold" style={{ fontSize: '1rem' }}>Limited Verified Exposure</h5>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>
                      Algorithms bury new projects. You can't reach genuine crypto whales and active investors who matter.
                    </p>
                  </div>
                </div>

                <div style={listItemStyle(problemAccent)}>
                  <FaExclamationTriangle size={20} color={problemAccent} style={iconStyle} />
                  <div>
                    <h5 className="text-white fw-semibold" style={{ fontSize: '1rem' }}>The Bot Wasteland</h5>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>
                      Spending capital on fake engagement and bot armies that destroy credibility and offer zero ROI.
                    </p>
                  </div>
                </div>

                <div style={listItemStyle(problemAccent)}>
                  <FaExclamationTriangle size={20} color={problemAccent} style={iconStyle} />
                  <div>
                    <h5 className="text-white fw-semibold" style={{ fontSize: '1rem' }}>Zero Brand Authority</h5>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>
                      Promotions bring short-term noise, failing to build long-term trust and essential industry authority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SOLUTION CARD */}
          <div className="col-12 col-lg-6">
            <div style={cardStyle(solutionAccent)} className="h-100">
              <h3 style={cardHeadlineStyle(solutionAccent)}>The Crypto Infinity Solution</h3>
              <p style={{ fontSize: '1rem', color: '#B0B0B0', opacity: 0.9 }}>
                We deliver a holistic, performance-driven marketing funnel built exclusively for high-potential crypto projects:
              </p>

              <div>
                <div style={listItemStyle(solutionAccent)}>
                  <FaRocket size={20} color={solutionAccent} style={iconStyle} />
                  <div>
                    <h5 className="text-white fw-semibold" style={{ fontSize: '1rem' }}>Tier-1 Access & Exposure</h5>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>
                      Immediate placement on Binance Live, X Spaces, and Tier-A Telegram Groups—where the true community lives.
                    </p>
                  </div>
                </div>

                <div style={listItemStyle(solutionAccent)}>
                  <FaMicrochip size={20} color={solutionAccent} style={iconStyle} />
                  <div>
                    <h5 className="text-white fw-semibold" style={{ fontSize: '1rem' }}>Sustained Content Velocity</h5>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>
                      Every AMA is converted into shorts, reels, and detailed blogs, driving traffic long after the live event.
                    </p>
                  </div>
                </div>

                <div style={listItemStyle(solutionAccent)}>
                  <FaHandshake size={20} color={solutionAccent} style={iconStyle} />
                  <div>
                    <h5 className="text-white fw-semibold" style={{ fontSize: '1rem' }}>Instant Trust & Credibility</h5>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>
                      Join 800+ success stories. Leverage our 500+ KOL network to skip the queue and build instant community trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 text-center border-top" style={{ borderColor: '#333' }}>
                <p className="fw-semibold" style={{ fontSize: '1rem', color: solutionAccent }}>
                  Stop buying hype. Start building authority.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
