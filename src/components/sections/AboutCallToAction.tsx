import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { ROUTES } from "../../constants";

const AboutCallToAction = () => {
  return (
    <section className="about-cta-section">
      <div className="section about-cta-centered">
        <h2>Ready to Transform Your Space?</h2>
        <p>Browse our collection and find pieces that speak to you.</p>
        <div className="about-cta-buttons">
          <Link to={ROUTES.PRODUCTS} className="btn btn-hero-primary">
            <FaShoppingCart /> Shop Now
          </Link>
          <Link to={ROUTES.HOME} className="btn btn-hero-secondary">
            Back Home <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCallToAction;
