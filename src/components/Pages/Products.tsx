/**
 * Products Component
 *
 * Displays the furniture product catalog with search functionality.
 * - Real-time search filtering using useMemo for performance
 * - Responsive product cards with hover effects
 * - Lazy loading for images
 * - Accessibility features (aria-labels)
 * - Memoized for performance optimization
 */

import { useState, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";
import { FaSearch, FaEye, FaTimes } from "react-icons/fa";

const Products = memo(() => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <section className="section">
      <div className="products-header">
        <div className="section-header" style={{ marginBottom: "2rem" }}>
          <span className="section-tag">Collection</span>
          <h2 className="section-title">Browse Products</h2>
          <p className="section-desc">
            Find the perfect piece for your space.
          </p>
        </div>

        <div className="search-container">
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      </div>

      {searchTerm && (
        <p className="search-result-count">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
          {searchTerm && <> for "<strong>{searchTerm}</strong>"</>}
        </p>
      )}

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <article key={product.id} className="product-card-modern">
              <div className="product-card-image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="product-card-img"
                />
                <div className="product-card-overlay">
                  <Link
                    to={`/products/${product.id}`}
                    className="product-card-btn"
                    aria-label={`View details for ${product.name}`}
                  >
                    <FaEye /> Quick View
                  </Link>
                </div>
                <span className="product-card-badge">New</span>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-name">{product.name}</h3>
                <div className="product-card-footer">
                  <span className="product-card-price">${product.price}</span>
                  <Link
                    to={`/products/${product.id}`}
                    className="product-card-link"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="no-products">
            <FaSearch className="no-products-icon" />
            <h3>No products found</h3>
            <p>
              No results for "<strong>{searchTerm}</strong>". Try a different
              search term.
            </p>
            <button
              className="btn"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

Products.displayName = "Products";

export default Products;
