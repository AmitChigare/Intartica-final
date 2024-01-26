import React from "react";
import "./inspirationDiv.css";
import bedroomImg01 from "../../images/bedroom01.png";

const InspirationDiv = () => {
  return (
    <div className="d-flex container gap-5 py-4 cont-d">
      <div>
        <img src={bedroomImg01} alt="crashed" className="crashed" />
      </div>
      <div className="d-flex flex-column justify-content-between ">
        <div>
          <h1 className="interior-h">Our Inspirations</h1>
          <p className="interior-p">
            The name "Intartica" itself is a creative evolution, symbolizing a
            journey from a "collection of art" to "Collection of Interior Art"
            and culminating in the concept of the "Continent of Interiors." It
            encapsulates our philosophy of creating a collection of art that
            goes beyond mere aesthetics, combining form and function to design
            interiors that are not just beautiful but also have healing
            capabilities for the soul.
          </p>
        </div>
        <div>
          <button className="btn btn-danger px-4 py-2">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default InspirationDiv;
