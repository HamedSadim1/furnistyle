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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

  const renderNavLink = (nav: INAV) => {
    const { id, text, to } = nav;
    return (
      <NavLink
        key={id}
        to={to}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={() => setIsOpen(false)}
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
