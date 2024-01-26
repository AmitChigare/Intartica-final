import React from "react";
import "./homeTag.css";

const HomeTag = ({ text }) => {
  return (
    <p className="redTag">
      {/* <span></span> */}
      {text}
    </p>
  );
};

export default HomeTag;
