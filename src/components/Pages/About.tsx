import { Link } from "react-router-dom";
import { FaHeart, FaUsers, FaAward, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <section className="section">
      <div className="title">
        <h2>About Us</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <h3>Our Story</h3>
          <p>
            We are a passionate team dedicated to providing high-quality
            products that enhance your lifestyle. Our mission is to offer a
            curated selection of items that combine style, functionality, and
            value.
          </p>
          <p>
            Founded in 2023, we've been serving customers with exceptional
            service and unique finds. Explore our collection and discover
            something special for yourself.
          </p>
        </div>

        <div className="about-values">
          <div className="value-card">
            <div className="value-icon">
              <FaHeart />
            </div>
            <h4>Passion</h4>
            <p>We love what we do and it shows in every product we offer.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <FaUsers />
            </div>
            <h4>Community</h4>
            <p>
              Building lasting relationships with our customers and partners.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <FaAward />
            </div>
            <h4>Quality</h4>
            <p>Only the best products make it to our curated collection.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <FaLeaf />
            </div>
            <h4>Sustainability</h4>
            <p>Committed to eco-friendly practices and sustainable sourcing.</p>
          </div>
        </div>

        <div className="about-cta">
          <Link to="/" className="btn">
            Back Home
          </Link>
          <Link to="/products" className="btn btn-hipster">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
