import React, { useState, useEffect } from "react";
import "./ePart3.css";
import essentials from "../../../src/images/estimator/essentials.jpeg";
import premium from "../../../src/images/estimator/premium.jpeg";
import luxe from "../../../src/images/estimator/luxe.jpeg";

const EPart3 = ({ nextStep, prevStep, responses }) => {
  const [selectedPackage, setSelectedPackage] = useState(
    responses.selectedPackage
  );

  // Update selectedPackage state when responses change
  useEffect(() => {
    setSelectedPackage(responses.selectedPackage);
  }, [responses.selectedPackage]);

  // Function to handle package change
  const handlePackageChange = (value) => {
    setSelectedPackage(value);
  };

  return (
    <div className="estimator-container">
      <form>
        <div className="step-three text-center">
          <h1>Pick your package</h1>

          <div
            className={`e-c-card2 estimator-box ${
              selectedPackage === "Essentials (₹₹)" ? "selected" : ""
            }`}
            onClick={() => handlePackageChange("Essentials (₹₹)")}
          >
            <input
              type="radio"
              id="radio1"
              name="title"
              onChange={() => {}}
              checked={selectedPackage === "Essentials (₹₹)"}
              style={{ display: "none" }} // Hide the radio button visually
            />
            <label htmlFor="radio1">Essentials (₹₹)</label>
            <p>
              A range of essential home interior solutions that's perfect for
              all your needs.
            </p>
            <div>
              <img src={essentials} alt="" />
            </div>
            <div>
              <p>Affordable pricing</p>
              <p>Convenient designs</p>
              <p>Basic accessories</p>
            </div>
          </div>

          <div
            className={`e-c-card2 estimator-box ${
              selectedPackage === "Premium (₹₹₹)" ? "selected" : ""
            }`}
            onClick={() => handlePackageChange("Premium (₹₹₹)")}
          >
            <input
              type="radio"
              id="radio2"
              name="title"
              onChange={() => {}}
              checked={selectedPackage === "Premium (₹₹₹)"}
              style={{ display: "none" }} // Hide the radio button visually
            />
            <label htmlFor="radio2">Premium (₹₹₹)</label>
            <p>Superior home interior solutions that will</p>
            <div>
              <img src={premium} alt="" />
            </div>
            <div>
              <p>Mid-range pricing</p>
              <p>Premium designs</p>
              <p>Wide range of accessories</p>
            </div>
          </div>

          <div
            className={`e-c-card2 estimator-box ${
              selectedPackage === "Luxe (₹₹₹₹)" ? "selected" : ""
            }`}
            onClick={() => handlePackageChange("Luxe (₹₹₹₹)")}
          >
            <input
              type="radio"
              id="radio3"
              name="title"
              onChange={() => {}}
              checked={selectedPackage === "Luxe (₹₹₹₹)"}
              style={{ display: "none" }} // Hide the radio button visually
            />
            <label htmlFor="radio3">Luxe (₹₹₹₹)</label>
            <p>
              High-end interior solutions for the ultimate home interior
              experience you deserve.
            </p>
            <div>
              <img src={luxe} alt="" />
            </div>
            <div>
              <p>Elite pricing</p>
              <p>Lavish designs</p>
              <p>Extensive range of accessories</p>
            </div>
          </div>
        </div>
      </form>
      <div className="estimator-nav-btn">
        <button onClick={() => nextStep({ selectedPackage })}>Finish</button>
        <button onClick={prevStep}>Back</button>
      </div>
    </div>
  );
};

export default EPart3;
