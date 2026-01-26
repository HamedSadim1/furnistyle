import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaTruck } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="section">
        <div className="hero">
          <h1>Welcome to Our Store</h1>
          <p>
            Discover amazing products at great prices. Quality you can trust,
            delivered to your door.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn">
              <FaShoppingCart /> Shop Now
            </Link>
            <Link to="/about" className="btn btn-hipster">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="title">
          <h2>Why Choose Us?</h2>
          <div className="title-underline"></div>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaStar />
            </div>
            <h3>Premium Quality</h3>
            <p>
              Handpicked products with exceptional quality and craftsmanship.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaTruck />
            </div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping to get your orders to you ASAP.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaShoppingCart />
            </div>
            <h3>Easy Shopping</h3>
            <p>Seamless online shopping experience with secure checkout.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
