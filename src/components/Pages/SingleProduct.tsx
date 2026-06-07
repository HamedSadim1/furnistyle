import { Link, useParams } from "react-router-dom";
import { products } from "../../data";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaCheck,
  FaExchangeAlt,
} from "react-icons/fa";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <section className="section">
        <div className="not-found-page">
          <span className="not-found-icon">😕</span>
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist or may have been removed.</p>
          <Link to="/products" className="btn btn-hero-primary">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const { image, name, price } = product;

  return (
    <section className="section">
      {/* Back link */}
      <Link to="/products" className="back-link">
        <FaArrowLeft /> Back to Products
      </Link>

      <div className="single-product-modern">
        {/* Image */}
        <div className="single-product-image-wrap">
          <img src={image} alt={name} className="single-product-image" />
          <span className="single-product-badge">Featured</span>
        </div>

        {/* Details */}
        <div className="single-product-details">
          <span className="section-tag">Product Details</span>
          <h2 className="single-product-name">{name}</h2>
          <div className="single-product-price">${price}</div>

          <div className="single-product-rating">
            <div className="single-product-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="sp-star-filled" />
              ))}
            </div>
            <span className="sp-rating-text">4.8 ★ (127 reviews)</span>
          </div>

          <p className="single-product-desc">
            This beautiful {name.toLowerCase()} combines premium materials with
            timeless design. Perfect for any room, it offers both comfort and
            style that will last for years to come.
          </p>

          <div className="single-product-features">
            <div className="sp-feature">
              <FaCheck className="sp-feature-check" />
              <span>Premium materials</span>
            </div>
            <div className="sp-feature">
              <FaCheck className="sp-feature-check" />
              <span>Easy assembly</span>
            </div>
            <div className="sp-feature">
              <FaCheck className="sp-feature-check" />
              <span>5-year warranty</span>
            </div>
            <div className="sp-feature">
              <FaCheck className="sp-feature-check" />
              <span>Free returns</span>
            </div>
          </div>

          <div className="single-product-benefits">
            <div className="sp-benefit">
              <FaTruck />
              <div>
                <strong>Free Shipping</strong>
                <span>On orders over $99</span>
              </div>
            </div>
            <div className="sp-benefit">
              <FaShieldAlt />
              <div>
                <strong>Secure Checkout</strong>
                <span>256-bit SSL encrypted</span>
              </div>
            </div>
            <div className="sp-benefit">
              <FaExchangeAlt />
              <div>
                <strong>30-Day Returns</strong>
                <span>No questions asked</span>
              </div>
            </div>
          </div>

          <div className="single-product-actions">
            <button className="btn btn-hero-primary">
              <FaShoppingCart /> Add to Cart — ${price}
            </button>
            <Link to="/products" className="btn btn-hero-secondary">
              <FaArrowLeft /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
