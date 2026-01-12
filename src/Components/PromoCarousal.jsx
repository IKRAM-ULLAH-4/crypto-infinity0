import React from "react";
import Slider from "react-slick";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PromoCarousal.css';

const promotions = [
  {
    title: "AMA with Crypto Influencer John Doe",
    description: "We hosted a live AMA session with John Doe, discussing our project and roadmap.",
    image: "/images/ama1.jpg",
    link: "https://t.me/Cryptoinfinitynews",
    platform: "Telegram",
    icon: <FaTelegramPlane />
  },
  {
    title: "Twitter Promotion Campaign",
    description: "Our project was featured on Twitter to reach 50k+ crypto enthusiasts.",
    image: "/images/twitter1.jpg",
    link: "https://twitter.com/Cryptoinfinitys",
    platform: "Twitter",
    icon: <FaTwitter />
  },
  {
    title: "AMA with Binance Live",
    description: "Live session on Binance with our team answering community questions.",
    image: "/images/ama2.jpg",
    link: "https://t.me/Cryptoinfinitynews",
    platform: "Telegram",
    icon: <FaTelegramPlane />
  },
  // Add more items as needed
];

const PromotionsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="promotions-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Our Promotional Highlights</h2>
        <Slider {...settings}>
          {promotions.map((item, idx) => (
            <div className="promo-card" key={idx}>
              <div className="promo-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="promo-content">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-promo">
                  {item.icon} {item.platform}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PromotionsCarousel;
