import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { useQuantity } from "../hooks/useQuantity";

import { ROUTES } from "../constants";
import { formatPrice } from "../utils/format";
import { products } from "../data";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaTruck,
  FaShieldAlt,
  FaExchangeAlt,
  FaCheck,
  FaMinus,
  FaPlus,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaBoxOpen,
} from "react-icons/fa";

const SingleProduct = () => {
  const { product, notFound } = useProduct();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  // Hooks must be called unconditionally before any early return
  const safeStock = product?.stock ?? 0;
  const { qty, inc, dec, isMin, isMax } = useQuantity({ min: 1, max: Math.max(safeStock, 1) });

  // Related products (same category, exclude current)
  const relatedProducts = useMemo(
    () =>
      product
        ? products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 3)
        : [],
    [product],
  );

  if (notFound) {
    return (
      <section className="section">
        <div className="not-found-page">
          <span className="not-found-icon">😕</span>
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist or may have been removed.</p>
          <Link to={ROUTES.PRODUCTS} className="btn btn-hero-primary">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const { images, name, price, originalPrice, description, features, specs, stock, rating, reviewCount, colors, materials } = product!;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const stockLabel =
    stock === 0 ? "Out of Stock" : stock <= 5 ? `Low Stock — Only ${stock} Left` : "In Stock";
  const stockClass =
    stock === 0 ? "sp-stock-out" : stock <= 5 ? "sp-stock-low" : "sp-stock-in";

  const discountPercent =
    originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <section className="sp-page">
      <div className="sp-page-inner">
        <Link to={ROUTES.PRODUCTS} className="back-link">
          <FaArrowLeft /> Back to Products
        </Link>

        <div className="single-product-modern">
        {/* ── Image Gallery ── */}
        <div className="sp-gallery">
          <div className="sp-gallery-main">
            <div className="sp-gallery-zoom-wrap">
              <img
                src={images[selectedImage]}
                alt={name}
                className="sp-gallery-img"
              />
              <div className="sp-gallery-zoom-lens" />
            </div>
            {originalPrice && (
              <span className="sp-gallery-badge">-{discountPercent}%</span>
            )}
            {/* Gallery arrows */}
            <button
              className="sp-gallery-arrow sp-gallery-arrow-left"
              onClick={() =>
                setSelectedImage((p) => (p === 0 ? images.length - 1 : p - 1))
              }
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              className="sp-gallery-arrow sp-gallery-arrow-right"
              onClick={() =>
                setSelectedImage((p) => (p === images.length - 1 ? 0 : p + 1))
              }
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="sp-gallery-thumbs">
            {images.map((img, i) => (
              <button
                key={i}
                className={`sp-gallery-thumb${i === selectedImage ? " active" : ""}`}
                onClick={() => setSelectedImage(i)}
              >
                <img src={img} alt={`${name} view ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Details ── */}
        <div className="single-product-details">
          <h2 className="single-product-name">{name}</h2>

          {/* Price */}
          <div className="sp-price-row">
            <span className="sp-price-current">{formatPrice(price)}</span>
            {originalPrice && (
              <>
                <span className="sp-price-original">{formatPrice(originalPrice)}</span>
                <span className="sp-price-badge">Save {discountPercent}%</span>
              </>
            )}
          </div>

          {/* Rating */}
          <div className="single-product-rating">
            <div className="single-product-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.round(rating) ? "sp-star-filled" : "sp-star-empty"}
                />
              ))}
            </div>
            <span className="sp-rating-text">
              {rating} ★ ({reviewCount} reviews)
            </span>
          </div>

          {/* Stock */}
          <div className={`sp-stock ${stockClass}`}>
            <span className="sp-stock-dot" />
            {stockLabel}
          </div>

          {/* Description */}
          <p className="single-product-desc">{description}</p>

          {/* Color Swatches */}
          {colors.length > 0 && (
            <div className="sp-colors">
              <span className="sp-colors-label">
                Color: <strong>{colors[selectedColor].name}</strong>
              </span>
              <div className="sp-colors-swatches">
                {colors.map((c, i) => (
                  <button
                    key={c.hex}
                    className={`sp-color-swatch${i === selectedColor ? " active" : ""}`}
                    style={{ background: c.hex }}
                    onClick={() => setSelectedColor(i)}
                    aria-label={c.name}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="sp-cart-row">
            <div className="sp-qty">
              <button className="sp-qty-btn" onClick={dec} disabled={isMin} aria-label="Decrease quantity">
                <FaMinus />
              </button>
              <span className="sp-qty-value">{qty}</span>
              <button className="sp-qty-btn" onClick={inc} disabled={isMax} aria-label="Increase quantity">
                <FaPlus />
              </button>
            </div>
            <button
              className={`btn btn-hero-primary sp-add-btn${addedToCart ? " sp-added" : ""}`}
              onClick={handleAddToCart}
              disabled={stock === 0}
            >
              {addedToCart ? (
                <><FaCheck /> Added to Cart</>
              ) : stock === 0 ? (
                <><FaBoxOpen /> Out of Stock</>
              ) : (
                <><FaShoppingCart /> Add to Cart — {formatPrice(price * qty)}</>
              )}
            </button>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div className="sp-features-list">
              <span className="sp-features-title">What's Included</span>
              {features.map((f) => (
                <div key={f.label} className="sp-feature-item">
                  <FaCheck className={f.included ? "sp-f-check" : "sp-f-muted"} />
                  <span className={f.included ? "" : "sp-f-strikethrough"}>{f.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Benefits */}
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

          {/* Specs */}
          {specs.length > 0 && (
            <div className="sp-specs">
              <span className="sp-specs-title">Specifications</span>
              <div className="sp-specs-grid">
                {specs.map((s) => (
                  <div key={s.label} className="sp-spec">
                    <span className="sp-spec-label">{s.label}</span>
                    <span className="sp-spec-value">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Materials */}
          {materials.length > 0 && (
            <div className="sp-materials">
              <span className="sp-materials-title">Materials</span>
              <div className="sp-materials-tags">
                {materials.map((m) => (
                  <span key={m} className="sp-material-tag">{m}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      </div>

      {/* ── Related Products ── */}
      {relatedProducts.length > 0 && (
        <div className="sp-page-inner">
          <div className="sp-related">
            <div className="section-header">
              <span className="section-tag">You May Also Like</span>
              <h2 className="section-title">Complete Your Space</h2>
            </div>
            <div className="products">
              {relatedProducts.map((rp) => (
                <article key={rp.id} className="product-card-modern glass-card">
                  <div className="product-card-image-wrap">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      loading="lazy"
                      className="product-card-img"
                    />
                    <div className="product-card-overlay">
                      <Link
                        to={`/products/${rp.id}`}
                        className="product-card-btn"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      >
                        <FaShoppingCart /> View Product
                      </Link>
                    </div>
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-name">{rp.name}</h3>
                    <div className="product-card-footer">
                      <span className="product-card-price">{formatPrice(rp.price)}</span>
                      <Link to={`/products/${rp.id}`} className="product-card-link">
                        View →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleProduct;
