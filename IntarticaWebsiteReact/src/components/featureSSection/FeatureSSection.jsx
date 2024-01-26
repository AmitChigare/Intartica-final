import React from "react";
import "./featureSSection.css";

const FeatureSSection = () => {
  return (
    <div className="container d-flex ">
      <div className="d-flex flex-column gap-2">
        <div>
          <button className="button-red">Windows</button>
        </div>
        <div>
          <button className="button-red">Doors</button>
        </div>
        <div>
          <button className="button-red">Model Flats</button>
        </div>
        <div>
          <button className="button-red">Interior or Finishing works</button>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-between feature-label">
        <div>
          <h4>For Builders: Building Dreams with Precision</h4>
          <h1>Transforming Structures into Spectacles</h1>
        </div>
        <div className="pl-5">
          <button className="btn button-blue">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSSection;
