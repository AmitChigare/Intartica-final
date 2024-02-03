import React from "react";
import "./serviceOwner.css";
import sofaIndividualService02 from "../../images/sofa-individual-service02.jpeg";
import IndividualService from "../../components/individualService/IndividualService";
import sofaIndividualService from "../../images/sofa-individual-service.jpeg";
import sofaIndividualService2 from "../../images/Gallery-images/i12.jpg";
import sofaIndividualService3 from "../../images/Gallery-images/i13.jpg";
import sofaIndividualService4 from "../../images/Gallery-images/i14.jpg";
import sofaIndividualService5 from "../../images/Gallery-images/i15.png";
import sofaIndividualService6 from "../../images/Gallery-images/i16.jpg";
import Vector from "../../images/icons/Vector.png";
import oneStopSolution from "../../images/icons/one-stop-solution.png";
import Customization360 from "../../images/icons/360-customization.png";
import rentalReady from "../../images/icons/rental-ready.png";
import renovation from "../../images/icons/renovation.png";

const ServiceOwner = () => {
  const howWeWorkInfo = {
    bgImg: sofaIndividualService02,
    heading: "How we Work",
    desc: "Lorem Ipsum is simply dummy textof the printing and typesetting industry.Lorem Ipsum has been.",
    img: sofaIndividualService02,
    wordCards: [
      {
        num: "01",
        heading: "Statement of the problem",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been",
      },
      {
        num: "02",
        heading: "Project presentation",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been",
      },
      {
        num: "03",
        heading: "Development of renderings",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been",
      },
    ],
  };

  const serviceFeaturesCard = [
    {
      icon: Vector,
      heading: "First TimeHouse Owners",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure",
    },
    {
      icon: oneStopSolution,
      heading: "One Stop Solution",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure",
    },
    {
      icon: Customization360,
      heading: "360 customisation",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure",
    },
    {
      icon: rentalReady,
      heading: "Rental Ready",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure",
    },
    {
      icon: renovation,
      heading: "Renovation",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure",
    },
  ];

  const latestProjectImages = [
    sofaIndividualService,
    sofaIndividualService2,
    sofaIndividualService3,
    sofaIndividualService4,
    sofaIndividualService5,
    sofaIndividualService6,
  ];

  const briefInfo = {
    heading: "Transforming Structures into Spectacles",
    desc: "Elevate your constructions with our expertly designed windows and secure interiors with grand entrances tailored to your vision. Showcase developments with captivating model flats and add meticulous finishing touches that redefine perfection to your interiors or finishing works.",
    img: sofaIndividualService,
  };
  return (
    <IndividualService
      howWeWorkInfo={howWeWorkInfo}
      briefInfo={briefInfo}
      serviceFeaturesCard={serviceFeaturesCard}
      latestProjectImages={latestProjectImages}
    />
  );
};

export default ServiceOwner;
