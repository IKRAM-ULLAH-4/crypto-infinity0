import React, { useEffect } from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AMAPackages = () => {
  const BG_COLOR = '#0A0A0A';
  const CARD_BG = '#151515';
  const CHECK_COLOR = '#00FFFF';
  const POPULAR_ACCENT = '#FF7F50';
  const CTA_COLOR_START = '#00FFC2';
  const CTA_COLOR_END = '#0080FF';
  const TELEGRAM_LINK = 'https://t.me/IrfanZareen'; // Direct DM link

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const packages = [
    {
      title: 'Telegram AMA',
      price: '$400',
      isPopular: false,
      buttonStyle: {
        background: CARD_BG,
        color: '#fff',
        border: '1px solid #444',
      }
    },
    {
      title: 'X Space AMA',
      price: '$500',
      isPopular: true,
      buttonStyle: {
        background: `linear-gradient(45deg, ${CTA_COLOR_START}, ${CTA_COLOR_END})`,
        border: 'none',
        color: '#000',
      },
      buttonHoverStyle: {
        transform: 'scale(1.03)',
        boxShadow: `0 0 15px ${CTA_COLOR_START}88`,
        color: '#fff',
      }
    },
    {
      title: 'Binance Live AMA',
      price: '$600',
      isPopular: false,
      buttonStyle: {
        background: CARD_BG,
        color: '#fff',
        border: '1px solid #444',
        boxShadow: '0 0 10px rgba(0, 128, 255, 0.2)',
      }
    },
  ];

  const features = [
    '1 hr Text or Voice or Video AMA',
    '1 TG Announcement',
    '1 X Announcement',
    '1 Graphics for Announcement',
    '$50 Rewards for community',
  ];

  const BookNowButton = ({ pkg }) => {
    const defaultStyle = {
      transition: 'all 0.3s ease-in-out',
      borderRadius: '50px',
      padding: '12px 0',
      width: '100%',
      fontWeight: '700',
      fontSize: '1.1rem',
      ...pkg.buttonStyle,
    };

    const nonPopularHoverStyle = {
      background: '#333',
      transform: 'translateY(-2px)',
      color: CHECK_COLOR,
    };

    const hoverStyle = pkg.isPopular ? pkg.buttonHoverStyle : nonPopularHoverStyle;

    return (
      <a
        href={TELEGRAM_LINK} // Direct to Telegram DM
        target="_blank"
        rel="noopener noreferrer"
        className={`btn mt-4 ${pkg.isPopular ? 'text-black' : 'text-white'}`}
        style={defaultStyle}
        onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
        onMouseOut={(e) => Object.assign(e.currentTarget.style, defaultStyle)}
      >
        Book Now
      </a>
    );
  };

  return (
    <section
      id="ama-packages"
      className="py-5"
      style={{
        background: BG_COLOR,
        paddingTop: '6rem',
        paddingBottom: '6rem',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div className="container">
        <h2
          className="text-center fw-bolder mb-5"
          style={{
            color: '#fff',
            fontSize: 'clamp(2rem, 3vw + 0.5rem, 3rem)',
            letterSpacing: '2px',
          }}
          data-aos="fade-down"
        >
          Our <span style={{ color: CHECK_COLOR }}>AMA</span> Packages
        </h2>

        <div className="row justify-content-center g-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div
                className="card h-100 p-4 border-0 text-white"
                style={{
                  backgroundColor: CARD_BG,
                  borderRadius: '15px',
                  boxShadow: pkg.isPopular
                    ? `0 0 30px ${CTA_COLOR_START}44`
                    : '0 0 20px rgba(0, 0, 0, 0.3)',
                  border: pkg.isPopular ? `2px solid ${POPULAR_ACCENT}88` : '1px solid #333',
                  transition: 'all 0.3s ease',
                  transform: pkg.isPopular ? 'scale(1.02)' : 'scale(1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {pkg.isPopular && (
                  <span
                    className="position-absolute px-3 py-1 fw-bold rounded-pill"
                    style={{
                      top: '15px',
                      right: '15px',
                      backgroundColor: POPULAR_ACCENT,
                      color: '#000',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      textTransform: 'uppercase',
                      opacity: 0,
                      transform: 'scale(0.8)',
                      animation: 'fadeScaleIn 0.5s forwards',
                      animationDelay: `${index * 0.15 + 0.3}s`,
                      pointerEvents: 'none',
                    }}
                  >
                    <FaStar size={10} className="me-1" /> Popular
                  </span>
                )}

                <h3 className="fw-bold mb-0 pt-2" style={{ fontSize: '1.6rem', color: '#fff' }}>
                  {pkg.title}
                </h3>
                <h1 className="fw-bolder my-3" style={{ fontSize: '3rem', color: CHECK_COLOR }}>
                  {pkg.price}
                </h1>

                <hr style={{ borderColor: '#333', marginBottom: '20px' }} />

                <ul className="list-unstyled flex-grow-1">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start mb-3"
                      style={{ fontSize: '0.95rem', color: '#E0E0E0' }}
                    >
                      <FaCheckCircle size={16} color={CHECK_COLOR} className="me-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <BookNowButton pkg={pkg} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeScaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default AMAPackages;
