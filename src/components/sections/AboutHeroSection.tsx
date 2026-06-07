import { ABOUT_HERO_STATS } from "../../constants";

const AboutHeroSection = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-bg" />
      <div className="section about-hero-content">
        <span className="section-tag section-tag-hero">
          About Us
        </span>
        <h1>Our Mission Is to Make Your Home Beautiful</h1>
        <p>
          Founded in 2023, FurniStyle has grown from a small workshop to a
          trusted destination for quality furniture. We believe every space
          tells a story — and we&apos;re here to help you tell yours.
        </p>
        <div className="about-hero-stats">
          {ABOUT_HERO_STATS.map((s) => (
            <div key={s.label} className="about-hero-stat">
              <span className="about-hero-num">{s.value}</span>
              <span className="about-hero-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
