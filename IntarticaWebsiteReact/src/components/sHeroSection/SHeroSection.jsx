import React from "react";
import "./sHeroSection.css";
import MyCarousel from "../carousel/Carousel";

import c01 from "../../images/Gallery-images/i01.jpg";
import c02 from "../../images/Gallery-images/i17.jpg";
import c03 from "../../images/Gallery-images/i06.jpg";

const SHeroSection = () => {
  const carouselImages = [c01, c02, c03];
  return (
    <div className="s-hero-container d-flex mb-5">
      <div className="s-hero-content">
        <h1 className="s-hero-heading">Design Your Space For Living</h1>
        <button className="btn s-hero-btn">lorem ipsum</button>
      </div>
      <div className="s-hero-images">
        <MyCarousel images={carouselImages} main={false} />
      </div>
    </div>
  );
};

export default SHeroSection;
