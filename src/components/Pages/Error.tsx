import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-page-content">
        <span className="error-page-code">404</span>
        <div className="error-page-visual">
          <div className="error-circle error-circle-1" />
          <div className="error-circle error-circle-2" />
          <span className="error-emoji">🔍</span>
        </div>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you're looking for doesn't exist. It may have been
          moved or you may have typed the wrong URL.
        </p>
        <div className="error-page-actions">
          <Link to="/" className="btn btn-hero-primary">
            <FaHome /> Back Home
          </Link>
          <Link to="/products" className="btn btn-hero-secondary">
            <FaSearch /> Browse Products
          </Link>
        </div>
        <div className="error-page-links">
          <span>Try these pages:</span>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
