import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import logo from "../../images/Intartica-logo.png";

const Navbar = () => {
  const location = useLocation();

  const isPageActive = (pathname) => location.pathname === pathname;

  const hoverEffect = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  };

  return (
    <div className="navbar py-2">
      <motion.div {...hoverEffect}>
        <Link to="/">
          <img className="home-logo" src={logo} alt="Intartica Logo" />
        </Link>
      </motion.div>
      <div className="option">
        <motion.div
          {...hoverEffect}
          className={`nav-btn ${isPageActive("/") ? "nav-active" : ""}`}
        >
          <Link to="/">Home</Link>
        </motion.div>
        <motion.div
          {...hoverEffect}
          className={`nav-btn ${isPageActive("/about") ? "nav-active" : ""}`}
        >
          <Link to="/about">About</Link>
        </motion.div>
        <motion.div
          {...hoverEffect}
          className={`nav-btn ${isPageActive("/services") ? "nav-active" : ""}`}
        >
          <Link to="/services">Services</Link>
        </motion.div>
        <motion.div
          {...hoverEffect}
          className={`nav-btn ${isPageActive("/gallery") ? "nav-active" : ""}`}
        >
          <Link to="/gallery">Gallery</Link>
        </motion.div>
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
      </div>
    </div>
  );
};

export default Navbar;
