import React from "react";
import "./sHowWeWork.css";
import howWeWorkImage from "../../images/how-we-work-image.png";

const SHowWeWork = ({ howWeWorkInfo }) => {
  const containerStyle = {
    backgroundImage: `url(${howWeWorkImage})`,
  };

  return (
    <div className="container how-we-work-container my-5">
      <img src={howWeWorkImage} alt="" />
      {/* <div className="hwwc-overlay"></div>
      <div className="d-flex">
        <div className="d-flex flex-column hww-text">
          <h1>{howWeWorkInfo.heading}</h1>
          <p>{howWeWorkInfo.desc}</p>
        </div>
        <div className="hww-image">
          <img src={howWeWorkInfo.img} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default SHowWeWork;
