import React from "react";
import "./sSCard.css";

const SSCard = ({ serviceFeaturesCard }) => {
  return (
    <>
      <h1 className="my-5 builder text-center">Design Your Space For Living</h1>
      <div className="container third-build-container d-flex justify-content-center">
        <div className="d-flex builder-cards">
          {serviceFeaturesCard.map((data, index) => (
            <div className="builder-card" key={index}>
              <h1>{data.heading}</h1>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="d-flex flex-column left-card">
          {serviceFeaturesCard.slice(0, 2).map((data, index) => (
            <div className="builder-card" key={index}>
              <h1>{data.heading}</h1>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column right-card">
          {serviceFeaturesCard.slice(2, 5).map((data, index) => (
            <div className="builder-card" key={index}>
              <h1>{data.heading}</h1>
              <p>{data.desc}</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default SSCard;
