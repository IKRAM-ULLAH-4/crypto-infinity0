import React from "react";
import Slider from "react-slick";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const promotions = [
  {
    title: "AMA with Crypto Influencer",
    description:
      "Live AMA session discussing roadmap, token utility and future vision.",
    image: "/images/ama1.jpg",
    link: "https://t.me/Cryptoinfinitynews",
    platform: "Telegram",
    icon: <FaTelegramPlane />,
  },
  {
    title: "Twitter Viral Campaign",
    description:
      "Reached 50K+ crypto investors through targeted Twitter promotions.",
    image: "/images/twitter1.jpg",
    link: "https://twitter.com/Cryptoinfinitys",
    platform: "Twitter",
    icon: <FaTwitter />,
  },
  {
    title: "Binance Live AMA",
    description:
      "Engaged global crypto audience with real-time Q&A session.",
    image: "/images/ama2.jpg",
    link: "https://t.me/Cryptoinfinitynews",
    platform: "Telegram",
    icon: <FaTelegramPlane />,
  },
];

const PromotionsCarousel = () => {
  const { bg } = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="py-5"
      style={{
        background: bg
          ? "#070b14"
          : "#f6f8fc",
        transition: "0.3s ease",
      }}
    >
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{
              fontSize: "2.4rem",
              color: bg ? "#fff" : "#111",
            }}
          >
            Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#00F5A0,#00D9F5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Promotions
            </span>
          </h2>

          <p
            style={{
              color: bg ? "rgba(255,255,255,0.6)" : "#666",
              maxWidth: "600px",
              margin: "10px auto 0",
            }}
          >
            Real campaigns, real exposure, real growth for crypto projects worldwide.
          </p>
        </div>

        <Slider {...settings}>
          {promotions.map((item, idx) => (
            <div key={idx} className="px-3">

              {/* CARD */}
              <div
                className="rounded-4 overflow-hidden h-100"
                style={{
                  background: bg
                    ? "rgba(255,255,255,0.06)"
                    : "#ffffff",
                  border: bg
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(0,0,0,0.06)",
                  backdropFilter: "blur(14px)",
                  transition: "0.35s ease",
                  boxShadow: bg
                    ? "0 10px 30px rgba(0,0,0,0.3)"
                    : "0 10px 25px rgba(0,0,0,0.08)",
                }}
              >

                {/* IMAGE */}
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      transition: "0.4s ease",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  <h5
                    className="fw-bold"
                    style={{
                      color: bg ? "#fff" : "#111",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.title}
                  </h5>

                  <p
                    style={{
                      color: bg
                        ? "rgba(255,255,255,0.65)"
                        : "#666",
                      fontSize: "0.95rem",
                      marginTop: "10px",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center gap-2 mt-3"
                    style={{
                      background:
                        "linear-gradient(135deg,#00F5A0,#00D9F5)",
                      color: "#000",
                      padding: "10px 18px",
                      borderRadius: "999px",
                      fontWeight: "600",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                  >
                    {item.icon} {item.platform}
                  </a>

                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PromotionsCarousel;