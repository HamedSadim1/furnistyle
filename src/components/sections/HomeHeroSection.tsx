import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { ROUTES, HERO_STATS } from "../../constants";

const HomeHeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
      </div>
      <div className="hero-content">
        <span className="hero-badge">✦ New Collection 2026</span>
        <h1 className="hero-title">
          Transform Your Space Into{" "}
          <span className="hero-gradient-text">Something Beautiful</span>
        </h1>
        <p className="hero-subtitle">
          Discover handpicked furniture and home decor that blends timeless
          elegance with modern comfort. Quality crafted for every corner of
          your home.
        </p>
        <div className="hero-actions">
          <Link to={ROUTES.PRODUCTS} className="btn btn-hero-primary">
            <FaShoppingCart /> Shop Collection
          </Link>
          <Link to={ROUTES.ABOUT} className="btn btn-hero-secondary">
            Our Story <FaArrowRight />
          </Link>
        </div>
        <div className="hero-stats">
          {HERO_STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div className="hero-stat-divider" />}
              <div className="hero-stat">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
