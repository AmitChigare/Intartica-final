import React from "react";
import "./essenceCard.css";
import { Icon } from "@iconify/react";

const EssenceCard = ({ icon, heading, desc }) => {
  return (
    <div className="card-container d-flex flex-column justify-content-center align-items-center">
      <Icon icon={icon} className="icon-styling" />
      <h1 className="card-heading">{heading}</h1>
      <p className="card-desc">{desc}</p>
    </div>
  );
};

export default EssenceCard;
