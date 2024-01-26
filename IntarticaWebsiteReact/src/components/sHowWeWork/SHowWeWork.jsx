import React from "react";
import "./sHowWeWork.css";

const SHowWeWork = ({ howWeWorkInfo }) => {
  return (
    <div className="container how-we-work-container my-5">
      <div className="hwwc-overlay"></div>
      <div className="d-flex">
        <div className="d-flex flex-column hww-text">
          <h1>{howWeWorkInfo.heading}</h1>
          <p>{howWeWorkInfo.desc}</p>
        </div>
        <div className="hww-image">
          <img src={howWeWorkInfo.img} alt="" />
        </div>
      </div>

      <div className="work-cards d-flex">
        {howWeWorkInfo.wordCards.map((data, index) => (
          <div className="work-card" key={index}>
            <h4 className="card-num">{data.num}</h4>
            <h1>{data.heading}</h1>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHowWeWork;
