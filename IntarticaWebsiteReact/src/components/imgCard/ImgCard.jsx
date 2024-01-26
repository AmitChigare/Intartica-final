import React from "react";
import "./imgCard.css";

const ImgCard = ({ imgUrl, heading, desc }) => {
  return (
    <>
      <img src={imgUrl} alt="img" className="img"></img>
      <h1 className="typo">{heading}</h1>
      <p className="para">{desc}</p>
    </>
  );
};

export default ImgCard;
