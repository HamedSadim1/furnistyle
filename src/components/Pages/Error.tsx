import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <section className="section">
      <div className="error-container">
        <div className="error-icon">
          <FaExclamationTriangle />
        </div>

        <div className="error-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or you entered the wrong URL.
          </p>

          <div className="error-actions">
            <Link to="/" className="btn">
              <FaHome /> Back Home
            </Link>
            <Link to="/products" className="btn btn-hipster">
              <FaSearch /> Browse Products
            </Link>
          </div>
        </div>

        <div className="error-suggestions">
          <h3>What can you do?</h3>
          <ul>
            <li>
              Go back to the <Link to="/">homepage</Link>
            </li>
            <li>
              Check out our <Link to="/products">products</Link>
            </li>
            <li>
              Learn more <Link to="/about">about us</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Error;
