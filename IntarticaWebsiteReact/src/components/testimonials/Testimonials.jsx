import React from "react";
import "./testimonials.css";
import { Icon } from "@iconify/react";
import TestmonialImg from "../../images/recent-works-home01.jpeg";

const Testimonials = () => {
  return (
    <div className="container d-flex gap-4 py-2">
      <div className="t-image">
        <img src={TestmonialImg} alt="" />
      </div>
      <div className="t-info">
        <h2>What Our Customers Say About Us</h2>
        <div className="t-cards d-flex">
          <div className="t-card-1 d-flex">
            <div className="t-icon">
              <Icon icon="bi:quote" />
            </div>
            <div className="t-quote">
              <p>
                Working with your design team was an absolute pleasure. The
                attention to detail and creativity exceeded my expectations.
                Thank you for making my home beautiful!
              </p>
            </div>
            <div className="t-author d-flex gap-3">
              <div className="t-profile"></div>
              <div className="t-name d-flex flex-column justify-content-center">
                <h6>Sophie Carter</h6>
                <p>New York, USA</p>
              </div>
            </div>
          </div>
          <div className="t-card-2 d-flex">
            <div className="t-icon">
              <Icon icon="bi:quote" />
            </div>
            <div className="t-quote">
              <p>
                Working with your design team was an absolute pleasure. The
                attention to detail and creativity exceeded my expectations.
                Thank you for making my home beautiful!
              </p>
            </div>
            <div className="t-author d-flex gap-3">
              <div className="t-profile"></div>
              <div className="t-name d-flex flex-column justify-content-center">
                <h6>Sophie Carter</h6>
                <p>New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
