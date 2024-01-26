import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// import { motion } from "framer-motion;

const Footer = () => {
  const hoverEffect = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  };

  return (
    <div className="footer d-flex px-3">
      <div className="d-flex f-1">
        <div className="services-1">
          <h4>Our Services</h4>
          <ul>
            <li {...hoverEffect}>
              <Link to={""}>Interior design</Link>
            </li>
            <li {...hoverEffect}>
              <Link to={""}>Outdoor design</Link>
            </li>
            <li {...hoverEffect}>
              <Link to={""}>Lightning design</Link>
            </li>
            <li {...hoverEffect}>
              <Link to={""}>Office design</Link>
            </li>
          </ul>
        </div>
        <div className="services-2">
          <h4>Our Services</h4>
          <ul>
            <li {...hoverEffect}>
              <Link to={""}>Reviews</Link>
            </li>
            <li {...hoverEffect}>
              <Link to={""}>Carriers</Link>
            </li>
            <li {...hoverEffect}>
              <Link to={""}>Lightning</Link>
            </li>
            <li {...hoverEffect}>
              <Link to={""}>Press inquires</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex f-2">
        <div className="contact-us">
          <h4>Info</h4>
          <p>info@vivadecor.com</p>
          <p>
            Design Avenue Cityville,
            <br />
            CA 90210 United States
          </p>
        </div>
        <div className="social">
          <div className="logo-img mb-2"></div>
          <p>
            VivaDecor your premier destination for your luxury and modern
            interior design
          </p>
          <div className="social-icons">
            <Link to="">
              <Icon icon="ant-design:facebook-filled" className="icon" />
            </Link>
            <Link to="">
              <Icon icon="ri:instagram-fill" className="icon" />
            </Link>
            <Link to="">
              <Icon icon="mdi:twitter" className="icon" />
            </Link>
            <Link to="">
              <Icon icon="mdi:linkedin" className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
