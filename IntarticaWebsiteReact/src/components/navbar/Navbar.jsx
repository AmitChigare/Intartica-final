import "./navbar.css";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import logo from "../../images/logo-transparent.png";
import { useState } from "react";
import { ROUTE_PATHS } from "../../config";

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
        <Link to={ROUTE_PATHS.HOME}>
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
            className={`nav-btn ${
              isPageActive(ROUTE_PATHS.HOME) ? "nav-active" : ""
            }`}
          >
            <Link to={ROUTE_PATHS.HOME}>Home</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn ${
              isPageActive(ROUTE_PATHS.ABOUT) ? "nav-active" : ""
            }`}
          >
            <Link to={ROUTE_PATHS.ABOUT}>About</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn ${
              isPageActive(ROUTE_PATHS.SERVICES) ||
              isPageActive(ROUTE_PATHS.SERVICE_ARCHITECT) ||
              isPageActive(ROUTE_PATHS.SERVICE_OWNER) ||
              isPageActive(ROUTE_PATHS.SERVICE_BUILDER)
                ? "nav-active"
                : ""
            }`}
          >
            <Link to={ROUTE_PATHS.SERVICES}>Services</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn ${
              isPageActive(ROUTE_PATHS.ESTIMATOR) ? "nav-active" : ""
            }`}
          >
            <Link to={ROUTE_PATHS.ESTIMATOR}>
              Estimator <Icon icon="ph:arrow-up-right-light" />
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            {...hoverEffect}
            className={`nav-btn ${
              isPageActive(ROUTE_PATHS.GALLERY) ? "nav-active" : ""
            }`}
          >
            <Link to={ROUTE_PATHS.GALLERY}>Gallery</Link>
          </motion.div>
        </li>
        <li>
          <motion.div {...hoverEffect} className="nav-btn contact-btn">
            <Link className="btn btn-danger" to={ROUTE_PATHS.CONTACT}>
              Contact Us <Icon icon="ph:arrow-up-right-light" />
            </Link>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
