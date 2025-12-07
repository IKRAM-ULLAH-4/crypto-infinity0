import React from 'react';
import { FaLinkedinIn, FaTwitter, FaTelegramPlane } from 'react-icons/fa'; // Icons for professional outreach
import irfan from '../assets/irfan.jpeg'
import zehra from '../assets/zehra.jpeg'
import logo from '../assets/logo.jpeg'
const MeetTheTeam = () => {
  const ICON_COLOR = '#00FFFF'; // Electric Cyan
  const ROLE_COLOR = '#FF7F50'; // Vibrant Orange/Coral

  // Data for the team members
  const teamMembers = [
    {
      name: 'Irfan Xareen',
      role: 'Founder & CEO',
      bio: 'Visionary leader, expert in market entry strategy, and dedicated blockchain community architect.',
      imageSrc: `${irfan}`, // Placeholder path
      social: { twitter: '#', linkedin: '#', telegram: ' t.me/Cryptoinfinitynews' }
    },
    {
      name: 'Jane Doe',
      role: 'Head of Growth',
      bio: 'Decade of experience in digital acquisition, specializing in converting exposure into long-term adoption.',
      imageSrc: `${zehra}`, // Placeholder path
      social: { twitter: '#', linkedin: '#', telegram: ' t.me/Cryptoinfinitynews' }
    },
    {
      name: 'Alex Chen',
      role: 'Lead Community Strategist',
      bio: 'Manages a global network of KOLs and partners, ensuring authentic engagement and outreach across all platforms.',
      imageSrc: `${logo}`, // Placeholder path
      social: { twitter: '#', linkedin: '#', telegram: ' t.me/Cryptoinfinitynews' }
    },
  ];

  const SocialLink = ({ icon: Icon, href, color }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-white mx-2"
      style={{ transition: 'color 0.3s ease' }}
      onMouseOver={(e) => e.currentTarget.style.color = color}
      onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
    >
      <Icon size={20} />
    </a>
  );

  return (
    <section
      id="admin"
      className="py-5"
      style={{
        background: '#0A0A0A', // Deep dark background
        paddingTop: '6rem',
        paddingBottom: '6rem',
        color: '#fff',
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
          Meet The <span style={{ color: ICON_COLOR }}>Leadership</span>
        </h2>
        <p className="lead mb-5" style={{ color: '#B0B0B0' }}>
            Trusted expertise and proven execution drive our agency. Meet the team behind your success.
        </p>
        
        <div className="row justify-content-center g-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div 
                className="p-4" 
                style={{
                  backgroundColor: '#151515',
                  borderRadius: '20px',
                  boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
                  border: `1px solid ${ROLE_COLOR}33`
                }}
              >
                {/* Profile Image */}
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="rounded-circle mb-4"
                  width="180"
                  height="180"
                  style={{ 
                    objectFit: 'cover',
                    border: `5px solid ${ICON_COLOR}55` // Border for prominence
                  }}
                />
                
                {/* Name and Role */}
                <h4 className="fw-bolder mb-1" style={{ color: '#fff', fontSize: '1.8rem' }}>
                  {member.name}
                </h4>
                <p className="lead fw-semibold mb-3" style={{ color: ROLE_COLOR, fontSize: '1.1rem' }}>
                  {member.role}
                </p>
                
                {/* Bio */}
                <p className="text-muted" style={{ fontSize: '1rem', color: '#A0A0A0' }}>
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="mt-4">
                  <SocialLink icon={FaTwitter} href={member.social.twitter} color="#1DA1F2" />
                  <SocialLink icon={FaLinkedinIn} href={member.social.linkedin} color="#0077B5" />
                  <SocialLink icon={FaTelegramPlane} href={member.social.telegram} color="#0088CC" />
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