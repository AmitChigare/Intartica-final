import React from "react";
import "./timelineAbout.css";
import { Icon } from "@iconify/react";
import aboutImg01 from "../../images/about01.jpeg";

const TimelineAbout = ({ type1, type2, heading, timelineData }) => {
  const image = aboutImg01;

  return (
    <div className="container py-5 d-flex gap-5 cont-t">
      {type2 && (
        <div>
          <img src={image} alt="/" className="crashed-1" />
        </div>
      )}
      <div>
        <h1 className="dream-heading">{heading}</h1>
        {timelineData.map((data, index) => (
          <div className="d-flex pt-3" key={index}>
            <Icon icon={data.icon} className="styling" />
            <div className="mx-3">
              <h4>{data.heading}</h4>
              <p className="dream-para">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {type1 && (
        <div>
          <img src={image} alt="/" className="crashed-1" />
        </div>
      )}
    </div>
  );
};

export default TimelineAbout;
