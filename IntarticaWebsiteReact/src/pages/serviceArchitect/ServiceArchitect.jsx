import React from "react";
import "./serviceArchitect.css";
import IndividualService from "../../components/individualService/IndividualService";
import sofaIndividualService02 from "../../images/sofa-individual-service02.jpeg";
import sofaIndividualService from "../../images/sofa-individual-service.jpeg";
import sofaIndividualService2 from "../../images/Gallery-images/i12.jpg";
import sofaIndividualService3 from "../../images/Gallery-images/i13.jpg";
import sofaIndividualService4 from "../../images/Gallery-images/i14.jpg";
import sofaIndividualService5 from "../../images/Gallery-images/i15.png";
import sofaIndividualService6 from "../../images/Gallery-images/i16.jpg";
import rentalHouse from "../../images/icons/rental-house.png";
import kitchens from "../../images/icons/kitchens.png";
import designServices from "../../images/icons/design-services.png";
import turnkeyServices from "../../images/icons/turnkey-services.png";

const ServiceArchitect = () => {
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
      icon: designServices,
      heading: "Design Services",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure",
    },
    {
      icon: kitchens,
      heading: "Kitchen and Wardrobes",
      desc: "(Portfolio) Intartica embodies speed in every project. Our streamlined processes ensure",
    },
    {
      icon: turnkeyServices,
      heading: "Turnkey Services",
      desc: "Design Services Taken by Architects",
    },
    {
      icon: rentalHouse,
      heading: "Rental House Ready",
      desc: "Design Services Taken by Architects",
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

export default ServiceArchitect;
