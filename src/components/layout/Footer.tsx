import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavData } from "../../data";
import { SITE_NAME, CURRENT_YEAR } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{SITE_NAME}</h3>
          <p>Your one-stop shop for quality furniture and home decor.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {NavData.map((nav) => (
              <li key={nav.id}>
                <Link to={nav.to}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {CURRENT_YEAR} {SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
