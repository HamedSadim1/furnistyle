import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { DASHBOARD_ICON_COLORS, ROUTES } from "../constants";
import { getInitials } from "../utils/format";
import {
  FaUser,
  FaShoppingBag,
  FaHeart,
  FaCog,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";

const Dashboard = () => {
  const { user } = useAuth();
  const initials = getInitials(user.name);

  return (
    <section className="section">
      {/* Welcome Banner */}
      <div className="dashboard-welcome">
        <div className="dashboard-avatar">{initials}</div>
        <div className="dashboard-welcome-text">
          <span className="section-tag section-tag-hero">
            Dashboard
          </span>
          <h2>Welcome back, {user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="dashboard-stats">
        <div className="dashboard-stat-card glass-card">
          <FaShoppingBag className="ds-icon" />
          <div>
            <span className="ds-value">0</span>
            <span className="ds-label">Orders</span>
          </div>
        </div>
        <div className="dashboard-stat-card glass-card">
          <FaHeart className="ds-icon" />
          <div>
            <span className="ds-value">0</span>
            <span className="ds-label">Wishlist</span>
          </div>
        </div>
        <div className="dashboard-stat-card glass-card">
          <FaClock className="ds-icon" />
          <div>
            <span className="ds-value">Active</span>
            <span className="ds-label">Account Status</span>
          </div>
        </div>
        <div className="dashboard-stat-card glass-card">
          <FaUser className="ds-icon" />
          <div>
            <span className="ds-value">{user.name.split(" ")[0]}</span>
            <span className="ds-label">Member</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="section-header dashboard-header-top">
        <span className="section-tag">Quick Actions</span>
        <h2 className="section-title">What would you like to do?</h2>
      </div>

      <div className="dashboard-actions-modern">          <Link to={ROUTES.PRODUCTS} className="da-card glass-card">
          <div className="da-icon" style={{ background: DASHBOARD_ICON_COLORS.shop.bg, color: DASHBOARD_ICON_COLORS.shop.color }}>
            <FaShoppingBag />
          </div>
          <h4>Shop Products</h4>
          <p>Browse our curated collection of furniture and home decor.</p>
          <span className="da-link">
            Browse Now <FaArrowRight />
          </span>
        </Link>

        <div className="da-card da-card-disabled glass-card">
          <div className="da-icon" style={{ background: DASHBOARD_ICON_COLORS.favorites.bg, color: DASHBOARD_ICON_COLORS.favorites.color }}>
            <FaHeart />
          </div>
          <h4>Favorites</h4>
          <p>View and manage your saved favorite items.</p>
          <span className="da-coming-soon">Coming Soon</span>
        </div>

        <div className="da-card da-card-disabled glass-card">
          <div className="da-icon" style={{ background: DASHBOARD_ICON_COLORS.settings.bg, color: DASHBOARD_ICON_COLORS.settings.color }}>
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
