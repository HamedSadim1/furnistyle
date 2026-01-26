/**
 * StyledNavbar Component
 *
 * A responsive navigation bar component for the FurniStyle application.
 * Features include:
 * - Mobile-first responsive design with hamburger menu
 * - Active link highlighting using React Router's NavLink
 * - Icon integration for visual appeal
 * - Smooth animations and transitions
 * - Sticky positioning for better UX
 */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "../data";
import { INAV } from "../types";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfo,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  // State to control mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for opening/closing mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  /**
   * Returns appropriate React Icon based on navigation text
   * This creates a visual association between menu items and their purpose
   */
  const getIcon = (text: string) => {
    switch (text.toLowerCase()) {
      case "home":
        return <FaHome />;
      case "about":
        return <FaInfo />;
      case "products":
        return <FaShoppingCart />;
      case "login":
        return <FaUser />;
      default:
        return null;
    }
  };

  /**
   * Renders a single navigation link with active state styling
   * Uses React Router's NavLink for automatic active state detection
   */
  const renderNavLink = (nav: INAV) => {
    const { id, text, to } = nav;
    return (
      <NavLink
        key={id}
        to={to}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={() => setIsOpen(false)} // Close mobile menu when link is clicked
      >
        {getIcon(text)} {text}
      </NavLink>
    );
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h3>Comfy Store</h3>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {NavData.map((data) => {
          return renderNavLink(data);
        })}
      </div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
