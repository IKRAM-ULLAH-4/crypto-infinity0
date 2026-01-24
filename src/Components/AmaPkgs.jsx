import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaBolt, FaYoutube, FaTwitter, FaTerminal, FaHandshake, FaAdn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PaymentModal from './PaymentModal';
import './ama.css';

const AMAPackages = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const packages = [
    { title: 'TG Intro Ad', price: 100, desc: 'Intro to our Telegram', icon: <FaTerminal />, features: ['1x Pinned Post', 'Community Intro', 'Link Inclusion'] },
    { title: 'X (Twitter) Ad', price: 100, desc: 'Viral X Announcement', icon: <FaTwitter />, features: ['1x Promotional Tweet', 'Reach Investors', 'Engagement Tags'] },
    { title: 'Telegram AMA', price: 400, desc: 'Engage the core community', icon: <FaTerminal />, features: ['1 hr AMA Session', 'TG Announcement', 'Custom Graphics', '$50 Rewards'] },
    { title: 'YouTube Review', price: 500, desc: 'Video deep dive', icon: <FaYoutube />, features: ['Full Video Review', 'Link in Bio', 'Social Hype'] },
    { title: 'X Space AMA', price: 550, isPopular: true, desc: 'Massive viral exposure', icon: <FaTwitter />, features: ['1 hr Voice Space', 'Recorded Session', 'Global Reach'] },
    { title: 'Partnership', price: 1000, desc: 'Ecosystem growth', icon: <FaHandshake />, tag: 'BEST VALUE', features: ['TG & X Ads', '1x AMA Session', 'Website Listing', 'Gathering'] },
  ];

  return (
    <section id="ama-packages" className="ama-package-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="top-tag">Premium Services</span>
          <h2>Grow Your <span className="highlight">Ecosystem</span></h2>
          <div className="accent-bar"></div>
        </div>

        {/* 3D Scroll Wrapper */}
        <div className="packages-3d-wrapper">
          <div className="packages-scroll-track">
            {packages.map((pkg, i) => (
              <div key={i} className={`package-card-3d ${pkg.isPopular ? 'popular' : ''} ${pkg.price === 1000 ? 'partnership-tier' : ''}`}>
                {pkg.isPopular && <div className="popular-ribbon"><FaBolt /> POPULAR</div>}
                {pkg.tag && <div className="value-tag">{pkg.tag}</div>}
                
                <div className="package-icon">{pkg.icon}</div>
                <div className="card-body">
                  <h3 className="package-title">{pkg.title}</h3>
                  <div className="price-container">
                    <span className="currency">$</span><span className="amount">{pkg.price}</span>
                  </div>
                  <ul className="feature-list">
                    {pkg.features.map((f, idx) => (
                      <li key={idx}><FaCheckCircle className="check-icon" /><span>{f}</span></li>
                    ))}
                  </ul>
                </div>
                <button className="book-now-btn" onClick={() => { setSelectedPkg(pkg); setShowModal(true); }}>Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PaymentModal show={showModal} onHide={() => setShowModal(false)} pkg={selectedPkg} />
    </section>
  );
};

export default AMAPackages;