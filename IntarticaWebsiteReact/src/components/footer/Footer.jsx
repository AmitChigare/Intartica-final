import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "./../../images/logo-white.png";
// import { motion } from "framer-motion;

const Footer = () => {
  const hoverEffect = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  };

  return (
    <div className="footer d-flex px-3">
      <div className="d-flex f-1">
        <div className="social">
          <div className="logo-img mb-2">
            <img src={logo} alt="" />
          </div>
          <p>
            Intartica your premier destination for your luxury and modern
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
      <div className="d-flex f-2">
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
        <div className="contact-us">
          <h4>Info</h4>
          <p>
            Registered office at 7-1/52&53, Nallagandla, Serilingampally,
            Hyderabad - 500019, India
            <br />
            <br />
            intarticainteriors@gmail.com | 9535636555
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
