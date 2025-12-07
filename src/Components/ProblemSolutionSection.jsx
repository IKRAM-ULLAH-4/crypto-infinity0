import React from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaRocket, FaHandshake, FaBullhorn, FaMicrochip } from 'react-icons/fa'; 

const ProblemSolutionSection = () => {
  // Define a strong, professional dark background
  const sectionBg = '#0A0A0A'; // Deep Black
  const problemAccent = '#FF7F50'; // Coral/Vibrant Orange for urgency
  const solutionAccent = '#00FFFF'; // Electric Cyan/Blue for innovation

  // --- Responsive Style Adjustments ---
  // Use clamp() for scaling the main headline (Min: 1.8rem, Preferred: 3vw, Max: 3rem)
  const mainHeadlineStyle = { 
    color: '#fff', 
    fontSize: 'clamp(1.8rem, 3vw + 0.5rem, 3rem)', 
    letterSpacing: '2px' 
  };
  
  // Use clamp() for scaling the card headlines (Min: 1.4rem, Preferred: 2vw, Max: 1.8rem)
  const cardHeadlineStyle = (color) => ({
    color: color, 
    fontSize: 'clamp(1.4rem, 2vw + 0.2rem, 1.8rem)', 
    borderBottom: `2px solid ${color}55`,
    paddingBottom: '10px'
  });
  
  // Use responsive padding for the section (Min: 4rem, Max: 8rem)
  const sectionPaddingStyle = { 
    background: sectionBg, 
    paddingTop: 'clamp(4rem, 6vw, 8rem)', 
    paddingBottom: 'clamp(4rem, 6vw, 8rem)',
    position: 'relative',
    overflow: 'hidden',
  };
  // ------------------------------------

  // Define consistent styles for the Problem card (Failure/Risk)
  const problemCardStyle = {
    backgroundColor: '#151515', 
    color: '#fff',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    borderRadius: '20px', 
    boxShadow: '0 0 40px rgba(255, 127, 80, 0.1)', 
    border: `1px solid ${problemAccent}33`, 
  };

  // Define consistent styles for the Solution card (Success/Growth)
  const solutionCardStyle = {
    backgroundColor: '#151515', 
    color: '#fff',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    borderRadius: '20px', 
    boxShadow: '0 0 40px rgba(0, 255, 255, 0.1)', 
    border: `1px solid ${solutionAccent}33`, 
  };
  
  // Note: hoverEffect is mostly for desktop interaction and doesn't need responsiveness handled here.

  return (
    <section 
      id="problem-solution" 
      className="py-5" 
      style={sectionPaddingStyle} // Apply responsive padding
    >
      {/* Subtle background element for depth */}
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
        <h2 className="text-center fw-bolder mb-5" style={mainHeadlineStyle}>
            The <span style={{ color: problemAccent }}>Hurdle</span> vs. Our <span style={{ color: solutionAccent }}>Hyper-Growth Engine</span>
        </h2>
        
        <div className="row justify-content-center">
          
          {/* PROBLEM CARD */}
          {/* Use mb-4 on mobile and mb-lg-0 on large screens for proper spacing when stacked */}
          <div className="col-lg-6 mb-4 mb-lg-0"> 
            <div
              className="card border-0 rounded-4 p-4 p-md-5 h-100" // Reduced padding slightly on mobile
              style={problemCardStyle}
            >
              <h3 
                className="card-title fw-bold mb-4" 
                style={cardHeadlineStyle(problemAccent)} // Apply responsive headline style
              >
                The Critical Web3 Challenges
              </h3>
              <p className="card-text mb-4" style={{ fontSize: '1rem', color: '#B0B0B0', opacity: 0.9 }}>
                Stop losing traction. New projects face three existential threats that kill potential before launch:
              </p>
              
              <div className="list-group">
                {/* Problem 1 */}
                <div className="list-group-item d-flex align-items-start bg-transparent border-0 p-3 mb-2">
                  <FaExclamationTriangle size={20} color={problemAccent} className="me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 text-white fw-semibold" style={{ fontSize: '1rem' }}>Limited **Verified** Exposure</h5>
                    <p className="text-muted" style={{ fontSize: '0.9rem', color: '#999 !important' }}>
                      Algorithms bury new projects. You can't reach genuine crypto whales and active investors who matter.
                    </p>
                  </div>
                </div>

                {/* Problem 2 */}
                <div className="list-group-item d-flex align-items-start bg-transparent border-0 p-3 mb-2">
                  <FaExclamationTriangle size={20} color={problemAccent} className="me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 text-white fw-semibold" style={{ fontSize: '1rem' }}>The Bot Wasteland</h5>
                    <p className="text-muted" style={{ fontSize: '0.9rem', color: '#999 !important' }}>
                      Spending capital on fake engagement and bot armies that destroy credibility and offer zero ROI.
                    </p>
                  </div>
                </div>

                {/* Problem 3 */}
                <div className="list-group-item d-flex align-items-start bg-transparent border-0 p-3 mb-2">
                  <FaExclamationTriangle size={20} color={problemAccent} className="me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 text-white fw-semibold" style={{ fontSize: '1rem' }}>Zero Brand Authority</h5>
                    <p className="text-muted" style={{ fontSize: '0.9rem', color: '#999 !important' }}>
                      Promotions bring short-term noise, failing to build long-term trust and essential industry authority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          {/* SOLUTION CARD */}
          <div className="col-lg-6">
            <div
              className="card border-0 rounded-4 p-4 p-md-5 h-100" // Reduced padding slightly on mobile
              style={solutionCardStyle}
            >
              <h3 
                className="card-title fw-bold mb-4" 
                style={cardHeadlineStyle(solutionAccent)} // Apply responsive headline style
              >
                The Crypto Infinity Solution
              </h3>
              <p className="card-text mb-4" style={{ fontSize: '1rem', color: '#B0B0B0', opacity: 0.9 }}>
                We deliver a holistic, performance-driven marketing funnel built exclusively for high-potential crypto projects:
              </p>
              
              <div className="list-group">
                {/* Solution 1 */}
                <div className="list-group-item d-flex align-items-start bg-transparent border-0 p-3 mb-2">
                  <FaRocket size={20} color={solutionAccent} className="me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 text-white fw-semibold" style={{ fontSize: '1rem' }}>Tier-1 Access &Exposure</h5>
                    <p className="text-muted" style={{ fontSize: '0.9rem', color: '#999 !important' }}>
                      Immediate placement on **Binance Live, X Spaces, and Tier-A Telegram Groups**—where the true community lives.
                    </p>
                  </div>
                </div>

                {/* Solution 2 */}
                <div className="list-group-item d-flex align-items-start bg-transparent border-0 p-3 mb-2">
                  <FaMicrochip size={20} color={solutionAccent} className="me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 text-white fw-semibold" style={{ fontSize: '1rem' }}>Sustained **Content Velocity**</h5>
                    <p className="text-muted" style={{ fontSize: '0.9rem', color: '#999 !important' }}>
                      Every AMA is converted into shorts, reels, and detailed blogs, driving traffic long after the live event.
                    </p>
                  </div>
                </div>

                {/* Solution 3 */}
                <div className="list-group-item d-flex align-items-start bg-transparent border-0 p-3 mb-2">
                  <FaHandshake size={20} color={solutionAccent} className="me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 text-white fw-semibold" style={{ fontSize: '1rem' }}>Instant **Trust & Credibility**</h5>
                    <p className="text-muted" style={{ fontSize: '0.9rem', color: '#999 !important' }}>
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