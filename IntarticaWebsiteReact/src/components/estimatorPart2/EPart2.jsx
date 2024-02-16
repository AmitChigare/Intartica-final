import React, { useState, useEffect } from "react";
import "./ePart2.css";

const EPart2 = ({ nextStep, prevStep, responses }) => {
  const [roomCounts, setRoomCounts] = useState(responses.roomCounts);

  // Update roomCounts state when responses change
  useEffect(() => {
    setRoomCounts(responses.roomCounts);
  }, [responses.roomCounts]);

  const handleIncrement = (roomType) => {
    setRoomCounts((prevCounts) => ({
      ...prevCounts,
      [roomType]: prevCounts[roomType] + 1,
    }));
  };

  const handleDecrement = (roomType) => {
    setRoomCounts((prevCounts) => ({
      ...prevCounts,
      [roomType]: Math.max(prevCounts[roomType] - 1, 0),
    }));
  };

  return (
    <div className="estimator-container text-center">
      <h1>Select the rooms you’d like us to design</h1>
      <p>
        To know more about this, <span>click here</span>
      </p>
      <div className="text-center">
        <div className="d-flex e-c-card estimator-box">
          <h1>Living Room</h1>
          <div className="e-c-quantity-btn">
            <button onClick={() => handleDecrement("livingRoom")}>-</button>
            <span>{roomCounts.livingRoom}</span>
            <button onClick={() => handleIncrement("livingRoom")}>+</button>
          </div>
        </div>

        <div className="d-flex e-c-card estimator-box">
          <h1>Kitchen</h1>
          <div className="e-c-quantity-btn">
            <button onClick={() => handleDecrement("kitchen")}>-</button>
            <span>{roomCounts.kitchen}</span>
            <button onClick={() => handleIncrement("kitchen")}>+</button>
          </div>
        </div>

        <div className="d-flex e-c-card estimator-box">
          <h1>Bedroom</h1>
          <div className="e-c-quantity-btn">
            <button onClick={() => handleDecrement("bedroom")}>-</button>
            <span>{roomCounts.bedroom}</span>
            <button onClick={() => handleIncrement("bedroom")}>+</button>
          </div>
        </div>

        <div className="d-flex e-c-card estimator-box">
          <h1>Bathroom</h1>
          <div className="e-c-quantity-btn">
            <button onClick={() => handleDecrement("bathroom")}>-</button>
            <span>{roomCounts.bathroom}</span>
            <button onClick={() => handleIncrement("bathroom")}>+</button>
          </div>
        </div>

        <div className="d-flex e-c-card estimator-box">
          <h1>Dining</h1>
          <div className="e-c-quantity-btn">
            <button onClick={() => handleDecrement("dining")}>-</button>
            <span>{roomCounts.dining}</span>
            <button onClick={() => handleIncrement("dining")}>+</button>
          </div>
        </div>
      </div>

      <div className="estimator-nav-btn">
        <button onClick={() => nextStep({ roomCounts })}>Next</button>
        <button onClick={prevStep}>Back</button>
      </div>
    </div>
  );
};

export default EPart2;
