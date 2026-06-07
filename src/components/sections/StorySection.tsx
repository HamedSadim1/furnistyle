import { Link } from "react-router-dom";
import { FaArrowRight, FaAward, FaHeart } from "react-icons/fa";
import { ROUTES } from "../../constants";

const StorySection = () => {
  return (
    <section className="about-story">
      <div className="section">
        <div className="about-story-grid">
          <div className="about-story-content">
            <span className="section-tag">Our Story</span>
            <h2>Crafting Comfort Since 2023</h2>
            <p>
              What started as a passion project quickly blossomed into a
              thriving business. We partner with skilled artisans and
              sustainable manufacturers to bring you furniture that&apos;s as
              kind to the planet as it is to your home.
            </p>
            <p>
              Every piece in our collection tells a story of craftsmanship,
              dedication, and attention to detail. We personally vet each
              product to ensure it meets our high standards.
            </p>
            <Link
              to={ROUTES.PRODUCTS}
              className="btn btn-hero-secondary btn-hero-content"
            >
              Explore Collection <FaArrowRight />
            </Link>
          </div>
          <div className="about-story-visual">
            <div className="about-story-card glass-card">
              <FaAward />
              <strong>Award Winning</strong>
              <span>Best Furniture Startup 2024</span>
            </div>
            <div className="about-story-card glass-card">
              <FaHeart />
              <strong>100% Love</strong>
              <span>4.9★ average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
