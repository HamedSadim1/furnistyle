/**
 * Products Component
 *
 * Displays the furniture product catalog with search functionality.
 * Key features:
 * - Real-time search filtering using useMemo for performance
 * - Responsive product cards with hover effects
 * - Lazy loading for images
 * - Accessibility features (aria-labels)
 * - Memoized for performance optimization
 */

import { useState, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";
import { FaSearch, FaEye } from "react-icons/fa";

const Products = memo(() => {
  // State for search input - controls product filtering
  const [searchTerm, setSearchTerm] = useState("");

  // Memoized filtered products for performance - only recalculates when searchTerm changes
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <section className="section">
      {/* Section title with decorative underline */}
      <div className="title">
        <h2>Our Products</h2>
        <div className="title-underline"></div>
      </div>

      {/* Search functionality container */}
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
        </div>
      </div>

      {/* Products grid container */}
      <div className="products">
        {filteredProducts.length > 0 ? (
          // Map through filtered products and render product cards
          filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
              {/* Product image container with overlay */}
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy" // Lazy loading for performance
                  className="product-image"
                />
                {/* Overlay that appears on hover with view details link */}
                <div className="product-overlay">
                  <Link
                    to={`/products/${product.id}`}
                    className="overlay-btn"
                    aria-label={`View details for ${product.name}`} // Accessibility
                  >
                    <FaEye /> View Details
                  </Link>
                </div>
              </div>

              {/* Product information */}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </article>
          ))
        ) : (
          // No products found message
          <div className="no-products">
            <h3>No products found matching "{searchTerm}"</h3>
            <p>Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </section>
  );
});

// Display name for debugging purposes
Products.displayName = "Products";

export default Products;
