import { Link } from "react-router-dom";
import { USER } from "../../types";
import {
  FaUser,
  FaShoppingBag,
  FaHeart,
  FaCog,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";

interface DashboardProps {
  user: USER;
}

const Dashboard = ({ user }: DashboardProps) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <section className="section">
      {/* Welcome Banner */}
      <div className="dashboard-welcome">
        <div className="dashboard-avatar">{initials}</div>
        <div className="dashboard-welcome-text">
          <span className="section-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#c1beff" }}>
            Dashboard
          </span>
          <h2>Welcome back, {user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <FaShoppingBag className="ds-icon" />
          <div>
            <span className="ds-value">0</span>
            <span className="ds-label">Orders</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <FaHeart className="ds-icon" />
          <div>
            <span className="ds-value">0</span>
            <span className="ds-label">Wishlist</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <FaClock className="ds-icon" />
          <div>
            <span className="ds-value">Active</span>
            <span className="ds-label">Account Status</span>
          </div>
        </div>
        <div className="dashboard-stat-card">
          <FaUser className="ds-icon" />
          <div>
            <span className="ds-value">{user.name.split(" ")[0]}</span>
            <span className="ds-label">Member</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="section-header" style={{ marginTop: "3rem" }}>
        <span className="section-tag">Quick Actions</span>
        <h2 className="section-title">What would you like to do?</h2>
      </div>

      <div className="dashboard-actions-modern">
        <Link to="/products" className="da-card">
          <div className="da-icon" style={{ background: "#645cff15", color: "var(--primary-500)" }}>
            <FaShoppingBag />
          </div>
          <h4>Shop Products</h4>
          <p>Browse our curated collection of furniture and home decor.</p>
          <span className="da-link">
            Browse Now <FaArrowRight />
          </span>
        </Link>

        <div className="da-card da-card-disabled">
          <div className="da-icon" style={{ background: "#f59e0b15", color: "#f59e0b" }}>
            <FaHeart />
          </div>
          <h4>Favorites</h4>
          <p>View and manage your saved favorite items.</p>
          <span className="da-coming-soon">Coming Soon</span>
        </div>

        <div className="da-card da-card-disabled">
          <div className="da-icon" style={{ background: "#3b82f615", color: "#3b82f6" }}>
            <FaCog />
          </div>
          <h4>Account Settings</h4>
          <p>Manage your profile, preferences, and security.</p>
          <span className="da-coming-soon">Coming Soon</span>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
