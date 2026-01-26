import { Link } from "react-router-dom";
import { USER } from "../../types";
import { FaUser, FaShoppingBag, FaHeart, FaCog } from "react-icons/fa";

interface DashboardProps {
  user: USER;
}

const Dashboard = ({ user }: DashboardProps) => {
  return (
    <section className="section">
      <div className="title">
        <h2>Dashboard</h2>
        <div className="title-underline"></div>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <div className="welcome-header">
            <FaUser className="welcome-icon" />
            <div>
              <h3>
                Welcome back, <strong>{user.name}</strong>!
              </h3>
              <p>{user.email}</p>
            </div>
          </div>
          <p className="welcome-message">
            Thank you for logging in. Explore our products and enjoy shopping!
          </p>
        </div>

        <div className="dashboard-actions">
          <div className="action-card">
            <FaShoppingBag className="action-icon" />
            <h4>Shop Products</h4>
            <p>Browse our curated collection of amazing products.</p>
            <Link to="/products" className="btn">
              Browse Products
            </Link>
          </div>

          <div className="action-card">
            <FaHeart className="action-icon" />
            <h4>Favorites</h4>
            <p>View your saved favorite items.</p>
            <button className="btn btn-hipster" disabled>
              Coming Soon
            </button>
          </div>

          <div className="action-card">
            <FaCog className="action-icon" />
            <h4>Account Settings</h4>
            <p>Manage your account preferences.</p>
            <button className="btn btn-hipster" disabled>
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
