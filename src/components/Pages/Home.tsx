import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaTruck, FaShieldAlt, FaUserCheck, FaHeadset, FaQuoteLeft, FaArrowRight, FaCheck } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
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
            <Link to="/products" className="btn btn-hero-primary">
              <FaShoppingCart /> Shop Collection
            </Link>
            <Link to="/about" className="btn btn-hero-secondary">
              Our Story <FaArrowRight />
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">10K+</span>
              <span className="hero-stat-label">Happy Customers</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">500+</span>
              <span className="hero-stat-label">Unique Products</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">99%</span>
              <span className="hero-stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="section features-section">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Everything You Need, Nothing You Don't</h2>
          <p className="section-desc">
            We go the extra mile to make your shopping experience seamless and enjoyable.
          </p>
        </div>
        <div className="features-grid-modern">
          <div className="feature-card-modern">
            <div className="feature-icon-wrapper">
              <FaStar />
            </div>
            <h3>Premium Quality</h3>
            <p>
              Every piece is handpicked by our curation team to ensure exceptional
              quality, durability, and craftsmanship you can see and feel.
            </p>
            <ul className="feature-benefits">
              <li><FaCheck /> Sustainably sourced materials</li>
              <li><FaCheck /> Rigorous quality testing</li>
              <li><FaCheck /> 5-year warranty included</li>
            </ul>
          </div>
          <div className="feature-card-modern featured-card">
            <div className="feature-icon-wrapper featured-icon">
              <FaTruck />
            </div>
            <h3>Lightning-Fast Delivery</h3>
            <p>
              From our warehouse to your door in record time. Track your order
              in real-time with our integrated shipping partners.
            </p>
            <ul className="feature-benefits">
              <li><FaCheck /> Free shipping on orders over $99</li>
              <li><FaCheck /> 2-3 business day delivery</li>
              <li><FaCheck /> White glove assembly option</li>
            </ul>
          </div>
          <div className="feature-card-modern">
            <div className="feature-icon-wrapper">
              <FaShieldAlt />
            </div>
            <h3>Secure Shopping</h3>
            <p>
              Shop with confidence. Our platform uses enterprise-grade encryption
              and offers a 30-day no-questions-asked return policy.
            </p>
            <ul className="feature-benefits">
              <li><FaCheck /> 256-bit SSL encryption</li>
              <li><FaCheck /> 30-day free returns</li>
              <li><FaCheck /> Price match guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="stats-banner">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Orders Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9★</span>
            <span className="stat-label">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Awards Won</span>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-desc">
            Real stories from real people who transformed their homes with us.
          </p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-filled" />
              ))}
            </div>
            <FaQuoteLeft className="testimonial-quote" />
            <p>
              "The quality exceeded my expectations. The sofa set I ordered
              completely transformed my living room. Delivery was prompt and
              the assembly team was professional."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">SM</div>
              <div className="testimonial-info">
                <strong>Sarah Mitchell</strong>
                <span>Verified Buyer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-filled" />
              ))}
            </div>
            <FaQuoteLeft className="testimonial-quote" />
            <p>
              "I was hesitant to buy furniture online, but the detailed product
              descriptions and photos made it easy. The dining table is stunning!"
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">JR</div>
              <div className="testimonial-info">
                <strong>James Rodriguez</strong>
                <span>Verified Buyer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-filled" />
              ))}
            </div>
            <FaQuoteLeft className="testimonial-quote" />
            <p>
              "Outstanding customer service! When I had a question about
              measurements, the team responded within minutes. The bed frame
              is gorgeous and well-built."
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">AL</div>
              <div className="testimonial-info">
                <strong>Amy Liu</strong>
                <span>Verified Buyer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Home?</h2>
          <p>
            Join thousands of happy customers and discover furniture that
            brings your vision to life. Shop our collection today.
          </p>
          <div className="cta-buttons">
            <Link to="/products" className="btn btn-cta-primary">
              <FaShoppingCart /> Start Shopping
            </Link>
            <Link to="/login" className="btn btn-cta-secondary">
              <FaUserCheck /> Create Account
            </Link>
          </div>
          <div className="cta-trust">
            <span><FaShieldAlt /> Secure checkout</span>
            <span><FaHeadset /> 24/7 support</span>
            <span><FaTruck /> Free returns</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
