import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
// import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const MyCarousel = ({ images, main }) => {
  return (
    <>
      <div className="my-carousel" style={{ position: "relative" }}>
        {main && (
          <div className="rotating-element">
            <Link to={"/"}>
              <svg
                width="280"
                height="280"
                className="rotating-text"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  id="curve"
                  fill="transparent"
                  d="
      M 70, 140
      a 70,70 0 1,1 140,0
      a 70,70 0 1,1 -140,0
      "
                />
                <text fontSize="40px" className="svg-text">
                  <textPath xlinkHref="#curve">
                    GO &#183; TO &#183; ESTIMATOR
                  </textPath>
                </text>
              </svg>
            </Link>
          </div>
        )}
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className={`d-block w-100 carousel-img ${
                  main ? "carousel-img-main" : ""
                }`}
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousel;
