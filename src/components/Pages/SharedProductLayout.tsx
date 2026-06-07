import { Outlet, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SharedProductLayout = () => {
  return (
    <>
      <section className="section">
        <div className="page-header">
          <Link to="/" className="page-header-back">
            <FaArrowLeft /> Home
          </Link>
          <div>
            <span className="section-tag">Collection</span>
            <h2 className="page-header-title">Our Products</h2>
            <p className="page-header-desc">
              Discover our curated collection of premium furniture and home decor.
            </p>
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default SharedProductLayout;
