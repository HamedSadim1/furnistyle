import { useState, useMemo, memo } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";
import { FaSearch, FaEye } from "react-icons/fa";

const Products = memo(() => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <section className="section">
      <div className="title">
        <h2>Our Products</h2>
        <div className="title-underline"></div>
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
        </div>
      </div>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="product-image"
                />
                <div className="product-overlay">
                  <Link
                    to={`/products/${product.id}`}
                    className="overlay-btn"
                    aria-label={`View details for ${product.name}`}
                  >
                    <FaEye /> View Details
                  </Link>
                </div>
              </div>
              <div className="product-info">
                <h5 className="product-name">{product.name}</h5>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </article>
          ))
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search term.</p>
          </div>
        )}
      </div>
    </section>
  );
});

Products.displayName = "Products";

export default Products;
