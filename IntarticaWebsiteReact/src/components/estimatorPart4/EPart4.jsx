import React from "react";
import { Icon } from "@iconify/react";
import "./ePart4.css";

const EPart4 = ({ prevStep }) => {
  return (
    <div>
      <div className="estimator-container text-center">
        <h1>Your estimate is almost ready...</h1>
        <div className="iconn d-flex mt-3"></div>
        <button className="download-btn">
          Download the pdf{" "}
          <Icon icon="material-symbols:download" className="step-icon" />
        </button>
        <div className="estimator-nav-btn">
          {/* <button>Submit</button> */}
          <button onClick={prevStep}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default EPart4;
