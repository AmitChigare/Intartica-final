import React from "react";
import "./recentWorks.css";
import HomeTag from "../homeTag/HomeTag";
import ImgCard from "../imgCard/ImgCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import luxury from "../../images/luxury.jpeg";
import villa from "../../images/villa.jpeg";
import swimming from "../../images/swimming.png";

const RecentWorks = () => {
  const imageCardInfo = [
    {
      imgUrl: luxury,
      heading: "Luxury Hotel Renovation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus fringilla dui amet faucibus nam.",
    },
    {
      imgUrl: villa,
      heading: "Villa Furnishing & Interior",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus fringilla dui amet faucibus nam.",
    },
    {
      imgUrl: swimming,
      heading: "Residence Swimming Pool",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Faucibus fringilla dui amet faucibus nam.",
    },
  ];
  return (
    <div className="container pt-5">
      <HomeTag text="Recent Works" />
      <div className="d-flex p-3 gap-5 rw-1">
        <div className="recent-container">
          <h1 className="black-heading">
            We will let our <span className="red-heading"> Masterpieces, </span>{" "}
            speak and cuddle your{" "}
            <span className="red-heading">imaginations</span> for us!
          </h1>
        </div>
        <div className="imgCard">
          <ImgCard
            imgUrl={imageCardInfo[0].imgUrl}
            heading={imageCardInfo[0].heading}
            desc={imageCardInfo[0].desc}
          />
        </div>
      </div>
      <div className="d-flex p-3 gap-5 rw-2">
        <div className="imgCard">
          <ImgCard
            imgUrl={imageCardInfo[1].imgUrl}
            heading={imageCardInfo[1].heading}
            desc={imageCardInfo[1].desc}
          />
        </div>
        <div className="imgCard">
          <ImgCard
            imgUrl={imageCardInfo[2].imgUrl}
            heading={imageCardInfo[2].heading}
            desc={imageCardInfo[2].desc}
          />
        </div>
      </div>
      <div className="px-4">
        <Link to={"/contact"}>
          <Button variant="danger" className="btn-d">
            Contact Us <Icon icon="ph:arrow-up-right-light" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecentWorks;
