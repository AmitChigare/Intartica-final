import React from "react";
import "./individualService.css";
import SHeroSection from "../sHeroSection/SHeroSection";
import SSCard from "../sSCard/SSCard";
import SHowWeWork from "../sHowWeWork/SHowWeWork";
import Sconnect from "../sconnect/Sconnect";
import NewletterSub from "../newsletterSub/NewletterSub";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const IndividualService = ({
  serviceFeaturesCard,
  howWeWorkInfo,
  latestProjectImages,
  briefInfo,
}) => {
  return (
    <>
      <Navbar />

      <SHeroSection />

      <div className="ssecond-container container d-flex my-7">
        <div className="build-img">
          <img src={briefInfo.img} alt="build-img" />
        </div>
        <div className="right-container d-flex flex-column justify-content-between">
          <h1>{briefInfo.heading}</h1>
          <p>{briefInfo.desc}</p>
          <button className="btn">Contact Us </button>
        </div>
      </div>

      <SSCard serviceFeaturesCard={serviceFeaturesCard} />

      <SHowWeWork howWeWorkInfo={howWeWorkInfo} />

      <div className="container my-7">
        <h2 className="l-project-image-container-h">Our Latest Project</h2>
        <div className="l-project-image-container">
          {latestProjectImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="image"
            />
          ))}
        </div>
      </div>

      <Sconnect />

      <NewletterSub />
      <Footer />
    </>
  );
};

export default IndividualService;
