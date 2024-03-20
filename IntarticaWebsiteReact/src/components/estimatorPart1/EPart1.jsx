import React, { useState, useEffect } from "react";
import "./ePart1.css";

const EPart1 = ({ nextStep, responses }) => {
  const [bhkType, setBhkType] = useState(responses.bhkType);

  // Update bhkType state when responses change
  useEffect(() => {
    setBhkType(responses.bhkType);
  }, [responses.bhkType]);

  const handleRadioChange = (value) => {
    setBhkType(value);
  };

  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK+"];

  return (
    <div className="estimator-container step-one">
      <h1>Select your BHK type</h1>
      <p>
        To know more about this, <span>click here</span>
      </p>

      <div className="d-flex flex-column">
        <form>
          {bhkOptions.map((option, index) => (
            <div
              className={`cc estimator-box ${
                bhkType === option ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleRadioChange(option)}
            >
              <input
                type="radio"
                id={`radio${index + 1}`}
                name="bhk"
                checked={bhkType === option}
                onChange={() => {}}
                style={{ display: "none" }} // Hide the radio button visually
              />
              <label htmlFor={`radio${index + 1}`}>{option}</label>
            </div>
          ))}
        </form>
      </div>

      <div className="estimator-nav-btn">
        <button onClick={() => nextStep({ bhkType })}>Next</button>
      </div>
    </div>
  );
};

export default EPart1;
