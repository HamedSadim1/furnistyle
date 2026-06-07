import { Link } from "react-router-dom";
import { FaHeart, FaUsers, FaAward, FaLeaf, FaArrowRight, FaShoppingCart } from "react-icons/fa";

const values = [
  {
    icon: <FaHeart />,
    title: "Passion",
    desc: "We love what we do and it shows in every product we curate for your home.",
    color: "#ef4444",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    desc: "Building lasting relationships with our customers and partners worldwide.",
    color: "#3b82f6",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    desc: "Only the finest products make it to our curated collection. Excellence guaranteed.",
    color: "#f59e0b",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    desc: "Committed to eco-friendly practices and sustainable sourcing for a better tomorrow.",
    color: "#22c55e",
  },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="section about-hero-content">
          <span className="section-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#c1beff", border: "1px solid rgba(255,255,255,0.1)" }}>
            About Us
          </span>
          <h1>Our Mission Is to Make Your Home Beautiful</h1>
          <p>
            Founded in 2023, FurniStyle has grown from a small workshop to a
            trusted destination for quality furniture. We believe every space
            tells a story — and we're here to help you tell yours.
          </p>
          <div className="about-hero-stats">
            <div className="about-hero-stat">
              <span className="about-hero-num">200+</span>
              <span className="about-hero-label">Products Curated</span>
            </div>
            <div className="about-hero-stat">
              <span className="about-hero-num">10K+</span>
              <span className="about-hero-label">Happy Customers</span>
            </div>
            <div className="about-hero-stat">
              <span className="about-hero-num">50+</span>
              <span className="about-hero-label">Design Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Our Values</span>
          <h2 className="section-title">What Drives Us Forward</h2>
          <p className="section-desc">
            Every decision we make is guided by these core principles.
          </p>
        </div>
        <div className="about-values-grid">
          {values.map((v) => (
            <div key={v.title} className="about-value-card" style={{ "--accent": v.color } as React.CSSProperties}>
              <div className="about-value-icon" style={{ background: `${v.color}15`, color: v.color }}>
                {v.icon}
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="section">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="section-tag">Our Story</span>
              <h2>Crafting Comfort Since 2023</h2>
              <p>
                What started as a passion project quickly blossomed into a
                thriving business. We partner with skilled artisans and
                sustainable manufacturers to bring you furniture that's as
                kind to the planet as it is to your home.
              </p>
              <p>
                Every piece in our collection tells a story of craftsmanship,
                dedication, and attention to detail. We personally vet each
                product to ensure it meets our high standards.
              </p>
              <Link to="/products" className="btn btn-hero-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1.75rem" }}>
                Explore Collection <FaArrowRight />
              </Link>
            </div>
            <div className="about-story-visual">
              <div className="about-story-card">
                <FaAward />
                <strong>Award Winning</strong>
                <span>Best Furniture Startup 2024</span>
              </div>
              <div className="about-story-card">
                <FaHeart />
                <strong>100% Love</strong>
                <span>4.9★ average rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="section" style={{ textAlign: "center" }}>
          <h2>Ready to Transform Your Space?</h2>
          <p>Browse our collection and find pieces that speak to you.</p>
          <div className="about-cta-buttons">
            <Link to="/products" className="btn btn-hero-primary">
              <FaShoppingCart /> Shop Now
            </Link>
            <Link to="/" className="btn btn-hero-secondary">
              Back Home <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
