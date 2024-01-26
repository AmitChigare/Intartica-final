import React from "react";
import "./aboutSection.css";
import HomeTag from "../homeTag/HomeTag";
import { Link } from "react-router-dom";

const AboutSection = ({ images, home }) => {
  return (
    <div className={`container my-7 about-section ${home && "pt-5"}`}>
      {home && <HomeTag text="About Us" />}
      <div className="d-flex p-3 gap-5 as-1">
        {home && (
          <div className="about-container">
            <h1 className="about-heading">
              Crafting Dreams, Building Homes.{" "}
              <span className="about-heading1">
                Creating <br />
                Masterpieces,
              </span>{" "}
              Not Projects
            </h1>
            <p className="about-para">
              At Intartica, we don't just design interiors; we curate dream
              spaces that blend art, functionality, and soulfulness. Founded in
              2017 by Srinivas Reddy Puram in Hyderabad, India, Intartica has
              been on a mission to turn houses into homes, celebrating the bond
              of family and community.
            </p>
            <p className="about-para">
              We approach each project as a masterpiece, working collaboratively
              like a family to bring your vision to life. Our commitment to
              experimentation, compelling ideas, and unique techniques ensures
              an ultimate user experience, making us your one-stop solution for
              interior design and execution.
            </p>
          </div>
        )}
        {!home && (
          <div className="about-container">
            <h1 className="services-heading">
              Crafting Unique Solutions for Every Space
            </h1>
            <p className="services-para">
              Welcome to Intartica's Service Hub, where we transcend
              conventional interiors, turning spaces into bespoke masterpieces.
              Our commitment to excellence ensures that each project, whether
              for builders, individual house owners, or designers/architects,
              receives personalized attention and innovative solutions.
            </p>
            <button className="btn btn-danger">Get a Personalized Quote</button>
          </div>
        )}

        <div className="d-flex as-2">
          <img src={images[0]} alt="image 1" className="image-1" />
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
                <text fontSize="1.5rem" className="svg-text">
                  <textPath xlinkHref="#curve">
                    &#183; LET'S &#183; BUILD &#183; YOUR &#183; MASTERPIECE
                  </textPath>
                </text>
              </svg>
            </Link>
          </div>

          <img src={images[1]} alt="image 2" className="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
