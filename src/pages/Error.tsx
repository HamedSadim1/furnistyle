import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import { ROUTES } from "../constants";

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
          <Link to={ROUTES.HOME} className="btn btn-hero-primary">
            <FaHome /> Back Home
          </Link>
          <Link to={ROUTES.PRODUCTS} className="btn btn-hero-secondary">
            <FaSearch /> Browse Products
          </Link>
        </div>
        <div className="error-page-links">
          <span>Try these pages:</span>
          <Link to={ROUTES.ABOUT}>About</Link>
          <Link to={ROUTES.LOGIN}>Login</Link>
          <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
