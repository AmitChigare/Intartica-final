import React from "react";
import MyCarousel from "../carousel/Carousel";
import HomeTag from "../homeTag/HomeTag";
import "./serviceSection.css";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../config";

const ServiceSection = () => {
  const carouselImages = [
    "https://s3-alpha-sig.figma.com/img/fc1f/24ff/6f7ad2b6addde44c97e2e9165ad32656?Expires=1702252800&Signature=PJP-Fd~jd0hoy-SJZMfS-E8fCKP9i7tUFETPrsrZL6Y5rFarUFv1msiVR6IgbiKBHlG7YVfBlDYFPo9byGs7-q31Y1lEg1A8YecXh0DPKNdG2jQlMT~2WkXyRnIbh0eJUmGL0s-~86oCJH0C98vj-D1pK39GHaPcYvsCrqrebZZqv9viCs1cQwDlqNodpXYiA3pzv169YVAhwrOYyiGNtXLGoriVrE1fCHs1Mg~bCK9Hk1BO3VdnZt3xgsbo3RVfQM~cI3Kw4Izgve6m46VotGN7Srx0I5I7suPr5C8QENolr6ozsLkTeB5XTG0ipAmU-KA84iUQuM-o16xUhuBqRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://media.designcafe.com/wp-content/uploads/2022/09/07162345/kitchen-interior-design-cost.jpg",
    "https://media.designcafe.com/wp-content/uploads/2021/09/15180410/pop-ceiling-designs-for-hall.jpg",
  ];

  const cardsInfo = [
    {
      icon: "ion:business-outline",
      heading: "Canvas for Architects",
      desc: "Join forces with us to craft spaces that leave a lasting impression. Benefit from our Project Management Consultancy support, showcase your work in our maintained gallery, and engage in collaborative discussions to ensure a holistic approach.",
      linkTo: ROUTE_PATHS.SERVICE_ARCHITECT,
    },
    {
      icon: "iconamoon:profile-light",
      heading: "Haven for House Owners",
      desc: "Indulge in a world of personalised design services, efficient kitchen and wardrobe solutions, turnkey services ensuring a stress-free experience, rental house ready designs, access to premium products, house renovations that breathe new life into your space.",
      linkTo: ROUTE_PATHS.SERVICE_OWNER,
    },
    {
      icon: "carbon:building",
      heading: "Perfection for Builders",
      desc: "For builders seeking excellence in every detail, our services offer tailored solutions such as expertly designed windows, grand entrances with secure interiors, captivating model flats, and flawless finishing works.",
      linkTo: ROUTE_PATHS.SERVICE_BUILDER,
    },
  ];

  const hoverEffect = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="container pt-5 px-3">
      <HomeTag text="Our Services" />
      <div className="d-flex  ss-1 justify-content-center align-items-center">
        <div className="about-container m-3">
          <h1 className="typography">
            Services That Transform,
            <span className="spaces"> Spaces</span> That{" "}
            <span className="transcend">Transcend</span>
          </h1>
          <p className="about-para">
            We approach each project as a masterpiece, working collaboratively
            like a family to bring your vision to life. Our commitment to
            experimentation, compelling ideas, and unique techniques ensures an
            ultimate user experience, making us your one-stop solution for
            interior design and execution.
          </p>
        </div>
        <div className="w-100">
          <MyCarousel images={carouselImages} main={false} />
        </div>
      </div>
      <div className="px-3 d-flex pt-5 gap-4 my-cards">
        {cardsInfo.map((cardInfo, index) => (
          <Link to={cardInfo.linkTo}>
            <motion.div {...hoverEffect} className="my-card" key={index}>
              <div className="">
                <Icon icon={cardInfo.icon} className="icon" />
              </div>
              <div className="">
                <h1 className="card-heading">{cardInfo.heading}</h1>
                <p className="card-desc">{cardInfo.desc}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
