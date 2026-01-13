import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaBolt } from 'react-icons/fa';
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
    { title: 'Telegram AMA', price: 400, desc: 'Engage the core community' },
    { title: 'X Space AMA', price: 500, isPopular: true, desc: 'Massive viral exposure' },
    { title: 'Binance Live AMA', price: 600, desc: 'Top-tier institutional trust' },
  ];

  const features = [
    '1 hr AMA Session',
    'Telegram Announcement',
    'X Promotion',
    'Custom Graphics',
    '$50 Community Rewards',
  ];

  return (
    <section id="ama-packages" className="py-5">
      <div className="container py-lg-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 fw-bold">
            Our <span style={{ color: '#00FFFF' }}>AMA</span> Packages
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
            Book your AMA and reach verified crypto investors.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {packages.map((pkg, i) => (
            <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="card h-100 p-4 text-white border-0 position-relative" style={{ background: '#151515', borderRadius: 24 }}>
                {pkg.isPopular && (
                  <div className="popular-badge">
                    <FaBolt size={10} /> Popular
                  </div>
                )}

                <h4 className="fw-bold">{pkg.title}</h4>
                <p className="text-muted small">{pkg.desc}</p>

                <h1 className="display-4 fw-bold my-4" style={{ color: '#00FFFF' }}>
                  ${pkg.price}
                </h1>

                <ul className="list-unstyled mb-4">
                  {features.map((f, idx) => (
                    <li key={idx} className="d-flex gap-2 mb-2 small">
                      <FaCheckCircle color="#00FFFF" />
                      <span className="text-white-50">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="book-btn w-100 mt-auto"
                  onClick={() => {
                    setSelectedPkg(pkg);
                    setShowModal(true);
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PaymentModal show={showModal} onHide={() => setShowModal(false)} pkg={selectedPkg} />
    </section>
  );
};

export default AMAPackages;
