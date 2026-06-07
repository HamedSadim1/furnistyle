import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCheck, FaShieldAlt, FaHeadset, FaTruck } from "react-icons/fa";
import { ROUTES } from "../../constants";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Transform Your Home?</h2>
        <p>
          Join thousands of happy customers and discover furniture that
          brings your vision to life. Shop our collection today.
        </p>
        <div className="cta-buttons">
          <Link to={ROUTES.PRODUCTS} className="btn btn-hero-primary">
            <FaShoppingCart /> Start Shopping
          </Link>
          <Link to={ROUTES.LOGIN} className="btn btn-hero-secondary">
            <FaUserCheck /> Create Account
          </Link>
        </div>
        <div className="cta-trust">
          <span><FaShieldAlt /> Secure checkout</span>
          <span><FaHeadset /> 24/7 support</span>
          <span><FaTruck /> Free returns</span>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
