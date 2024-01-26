import React, { useState } from "react";
import "./achievePercent.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AchievePercent = ({ data, type }) => {
  // console.log(type);
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="container percentage d-flex">
      {data.map((data, index) => (
        <div className="a-per d-flex align-items-center" key={index}>
          <ScrollTrigger
            onEnter={() => setCounterState(true)}
            onExit={() => setCounterState(false)}
          >
            <div className="number">
              {counterState && (
                <CountUp start={0} end={data.number} duration={3} />
              )}
              {type === "type-2" && index === 0 ? "+" : "%"}
            </div>
          </ScrollTrigger>
          <div>
            <h6>{data.heading}</h6>
            {(type = "type-1" && data.desc && <p>{data.desc}</p>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievePercent;
