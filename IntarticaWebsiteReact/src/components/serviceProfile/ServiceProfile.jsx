import React from "react";
import "./serviceProfile.css";
import { Link } from "react-router-dom";

const ServiceProfile = ({ imageUrl, number, heading, desc, linkTo }) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <Link to={linkTo}>
      <div className="container service-bg" style={containerStyle}>
        <div className="info">
          <h1 className="service-number">{number}</h1>
          <h2 className="service-heading">{heading}</h2>
          <p className="service-para">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceProfile;
