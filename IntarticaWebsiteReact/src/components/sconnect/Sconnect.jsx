import React from "react";
import "./sconnect.css";
import projectStartBuilders from "../../images/project-start-builders.jpeg";

const Sconnect = () => {
  const bgImageee = projectStartBuilders;
  const containerStyle = {
    backgroundImage: `url(${bgImageee})`,
  };
  return (
    <div style={containerStyle} className="container sconnect-container my-7">
      <div className="main">
        <h6>Subscribe To Our Email</h6>
        <h4>Start Project With Us ?</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="btn">Start New</button>
      </div>
    </div>
  );
};

export default Sconnect;
