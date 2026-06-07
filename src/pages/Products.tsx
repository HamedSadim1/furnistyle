import { memo } from "react";
import { Link } from "react-router-dom";
import { useProductSearch } from "../hooks/useProductSearch";
import { formatPrice } from "../utils/format";
import SectionHeader from "../components/ui/SectionHeader";
import { FaSearch, FaEye, FaTimes } from "react-icons/fa";

const Products = memo(() => {
  const { searchTerm, setSearchTerm, results: filteredProducts, clearSearch, hasSearch } = useProductSearch();

  return (
    <section className="section">
      <div className="products-header">
        <SectionHeader
          tag="Collection"
          title="Browse Products"
          desc="Find the perfect piece for your space."
          className="products-section-header"
        />

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
            {hasSearch && (
              <button
                className="search-clear"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      </div>

      {hasSearch && (
        <p className="search-result-count">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
          for "<strong>{searchTerm}</strong>"
        </p>
      )}

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <article key={product.id} className="product-card-modern glass-card">
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
                  <span className="product-card-price">{formatPrice(product.price)}</span>
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
              onClick={clearSearch}
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
