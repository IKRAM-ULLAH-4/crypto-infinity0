import React from "react";
import "./Affiliates.css";

// Precise imports based on your file explorer
import binanceLogo from "../assets/logos/Binanacelogo.png";
import bybitLogo from "../assets/logos/bybitlogo.png";
import coingeckoLogo from "../assets/logos/Coingeckologo.png";
import coinmarketcapLogo from "../assets/logos/coinmarketcap.png";
import kucoinLogo from "../assets/logos/kucoinlogo.png";
import okxLogo from "../assets/logos/okxlogo.png";
import web3Logo from "../assets/logos/web3logo.png";

const topPartners = [
  { name: "Binance", logo: binanceLogo },
  { name: "Bybit", logo: bybitLogo },
  { name: "OKX", logo: okxLogo },
  { name: "CoinGecko", logo: coingeckoLogo },
  { name: "KuCoin", logo: kucoinLogo },
  { name: "MarketCap", logo: coinmarketcapLogo },
  { name: "Web3", logo: web3Logo },
];

const bottomPartners = [
  { name: "Ethereum", logo: null },
  { name: "Solana", logo: null },
  { name: "Polygon", logo: null },
  { name: "Avalanche", logo: null },
  { name: "Metamask", logo: null },
  { name: "TrustWallet", logo: null },
  { name: "Chainlink", logo: null },
];

export default function Affiliates() {
  const getLogo = (localPath, name) => {
    if (localPath) return localPath;
    return `https://icons.duckduckgo.com/ip3/${name.toLowerCase().replace(/\s/g, '')}.com.ico`;
  };

  const renderTrack = (partners) => (
    <div className="track">
      {[...partners, ...partners].map((item, i) => (
        <div key={i} className="partner">
          <img src={getLogo(item.logo, item.name)} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="affiliates">
      <h2>Trusted Partners</h2>
      <div className="marquee left">{renderTrack(topPartners)}</div>
      <div className="marquee right">{renderTrack(bottomPartners)}</div>
    </section>
  );
}