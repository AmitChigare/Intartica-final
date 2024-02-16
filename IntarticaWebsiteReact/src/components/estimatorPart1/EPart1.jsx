import React, { useState, useEffect } from "react";
import "./ePart1.css";
// import "../../pages/estimator/estimator.css";

const EPart1 = ({ nextStep, responses }) => {
  const [bhkType, setBhkType] = useState(responses.bhkType);

  // Update bhkType state when responses change
  useEffect(() => {
    setBhkType(responses.bhkType);
  }, [responses.bhkType]);

  const handleRadioChange = (value) => {
    setBhkType(value);
  };

  return (
    <div className="estimator-container step-one">
      <h1>Select your BHK type</h1>
      <p>
        To know more about this, <span>click here</span>
      </p>

      <div className="d-flex flex-column">
        <form>
          <div className="cc estimator-box">
            <input
              type="radio"
              id="radio1"
              name="bhk"
              checked={bhkType === "1 BHK"}
              onChange={() => handleRadioChange("1 BHK")}
            />
            <label htmlFor="radio1">1 BHK</label>
          </div>
          <div className="cc estimator-box">
            <input
              type="radio"
              id="radio2"
              name="bhk"
              checked={bhkType === "2 BHK"}
              onChange={() => handleRadioChange("2 BHK")}
            />
            <label htmlFor="radio2">2 BHK</label>
          </div>
          <div className="cc estimator-box">
            <input
              type="radio"
              id="radio3"
              name="bhk"
              checked={bhkType === "3 BHK"}
              onChange={() => handleRadioChange("3 BHK")}
            />
            <label htmlFor="radio3">3 BHK</label>
          </div>
          <div className="cc estimator-box">
            <input
              type="radio"
              id="radio4"
              name="bhk"
              checked={bhkType === "4 BHK"}
              onChange={() => handleRadioChange("4 BHK")}
            />
            <label htmlFor="radio4">4 BHK</label>
          </div>
          <div className="cc estimator-box">
            <input
              type="radio"
              id="radio5"
              name="bhk"
              checked={bhkType === "5 BHK+"}
              onChange={() => handleRadioChange("5 BHK+")}
            />
            <label htmlFor="radio5">5 BHK+</label>
          </div>
        </form>
      </div>

      <div className="estimator-nav-btn">
        <button onClick={() => nextStep({ bhkType })}>Next</button>
      </div>
    </div>
  );
};

export default EPart1;
