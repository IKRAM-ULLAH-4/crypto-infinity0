import React, { useEffect } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import irfan from '../assets/irfan.jpeg';
import zehra from '../assets/zehra.jpeg';
import logo from '../assets/logo.jpeg';

const MeetTheTeam = () => {
  const ICON_COLOR = '#00FFFF'; // Telegram neon color
  const ROLE_COLOR = '#FF7F50'; // Orange/Coral for role
  const BIO_COLOR = '#E0E0E0';  // Light gray for bio

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      name: 'Irfan Zareen',
      role: 'Founder & CEO',
      bio: 'Visionary leader, expert in market entry strategy, and dedicated blockchain community architect.',
      imageSrc: irfan,
      telegram: 'https://t.me/IrfanZareen'
    },
    {
      name: 'Zehra',
      role: 'Head of Growth',
      bio: 'Decade of experience in digital acquisition, specializing in converting exposure into long-term adoption.',
      imageSrc: zehra,
      telegram: 'https://t.me/RealZehra'
    },
    // {
    //   name: 'Alex Chen',
    //   role: 'Lead Community Strategist',
    //   bio: 'Manages a global network of KOLs and partners, ensuring authentic engagement and outreach across all platforms.',
    //   imageSrc: logo,
    //   telegram: 'https://t.me/Cryptoinfinitynews'
    // },
  ];

  const TelegramLink = ({ href }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white mx-2"
      style={{ transition: 'color 0.3s ease' }}
      onMouseOver={(e) => { e.currentTarget.style.color = ICON_COLOR; }}
      onMouseOut={(e) => { e.currentTarget.style.color = '#fff'; }}
    >
      <FaTelegramPlane size={20} />
    </a>
  );

  return (
    <section
      id="admin"
      className="py-5"
      style={{ background: '#0A0A0A', paddingTop: '6rem', paddingBottom: '6rem', color: '#fff' }}
    >
      <div className="container text-center">
        {/* Title */}
        <h2
          className="display-4 mb-3 fw-bold text-white"
          style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '3px', textTransform: 'uppercase' }}
          data-aos="fade-down"
        >
          Meet The <span style={{ color: ICON_COLOR }}>Leadership</span>
        </h2>
        <p className="lead mb-5" style={{ color: '#B0B0B0' }} data-aos="fade-down" data-aos-delay="150">
          Trusted expertise and proven execution drive our agency. Meet the team behind your success.
        </p>

        <div className="row justify-content-center g-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 150}>
              <div
                className="p-4 team-card"
                style={{
                  backgroundColor: '#151515',
                  borderRadius: '20px',
                  boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
                  border: `1px solid ${ROLE_COLOR}33`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 255, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.5)';
                }}
              >
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="rounded-circle mb-4"
                  width="180"
                  height="180"
                  style={{ objectFit: 'cover', border: `5px solid ${ICON_COLOR}55` }}
                />

                <h4 className="fw-bolder mb-1" style={{ color: '#fff', fontSize: '1.8rem' }}>
                  {member.name}
                </h4>
                <p className="lead fw-semibold mb-3" style={{ color: ROLE_COLOR, fontSize: '1.1rem' }}>
                  {member.role}
                </p>

                <p className="mb-0" style={{ fontSize: '1rem', color: BIO_COLOR, lineHeight: '1.6' }}>
                  {member.bio}
                </p>

                <div className="mt-4">
                  <TelegramLink href={member.telegram} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
