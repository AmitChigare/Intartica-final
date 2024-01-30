import "./navbar.css";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import logo from "../../images/Intartica-logo.png";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();

  const isPageActive = (pathname) => location.pathname === pathname;

  const hoverEffect = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <motion.div {...hoverEffect}>
        <Link to="/">
          <img className="home-logo" src={logo} alt="Intartica Logo" />
        </Link>
      </motion.div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn ${isPageActive("/") ? "nav-active" : ""}`}
          >
            <Link to="/">Home</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn ${isPageActive("/about") ? "nav-active" : ""}`}
          >
            <Link to="/about">About</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn ${
              isPageActive("/services") ? "nav-active" : ""
            }`}
          >
            <Link to="/services">Services</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn ${
              isPageActive("/gallery") ? "nav-active" : ""
            }`}
          >
            <Link to="/gallery">Gallery</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn contact-btn ${
              isPageActive("/contact") ? "nav-active" : ""
            }`}
          >
            <Link className="btn btn-danger" to="/contact">
              Contact Us <Icon icon="ph:arrow-up-right-light" />
            </Link>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
