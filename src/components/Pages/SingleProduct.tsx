import { Link, useParams } from "react-router-dom";
import { products } from "../../data";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaStar,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return (
      <section className="section">
        <div className="error-container">
          <div className="error-icon">
            <FaShoppingCart />
          </div>
          <div className="error-content">
            <h2>Product Not Found</h2>
            <p>
              The product you're looking for doesn't exist or may have been
              removed.
            </p>
            <Link to="/products" className="btn">
              <FaArrowLeft /> Back to Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const { image, name, price } = product;

  return (
    <section className="section">
      <div className="title">
        <h2>Product Details</h2>
        <div className="title-underline"></div>
      </div>

      <div className="single-product">
        <div className="product-image-container">
          <img src={image} alt={name} />
        </div>

        <div className="product-details">
          <h3>{name}</h3>
          <div className="product-price">${price}</div>

          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star filled" />
              ))}
            </div>
            <span className="rating-text">(4.8) • 127 reviews</span>
          </div>

          <p className="product-description">
            This is a beautiful {name.toLowerCase()}. Perfect for your home or
            office. High quality materials and excellent craftsmanship ensure
            durability and style. This piece will complement any decor and
            provide both functionality and elegance.
          </p>

          <div className="product-features">
            <div className="feature-item">
              <FaTruck />
              <span>Free shipping</span>
            </div>
            <div className="feature-item">
              <FaShieldAlt />
              <span>2-year warranty</span>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn btn-block">
              <FaShoppingCart /> Add to Cart - ${price}
            </button>
            <Link to="/products" className="btn btn-hipster">
              <FaArrowLeft /> Back to Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
