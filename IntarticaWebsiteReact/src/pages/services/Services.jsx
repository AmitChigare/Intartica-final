import React from "react";
import "./services.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import AboutSection from "../../components/aboutSection/AboutSection";
import Testimonials from "../../components/testimonials/Testimonials";
import ServiceProfile from "../../components/serviceProfile/ServiceProfile";
// import { motion } from "framer-motion";
import { ROUTE_PATHS } from "../../config";
import aboutHome1 from "../../images/about-home-1.jpeg";
import aboutHome2 from "../../images/about-home-2.jpeg";
import serviceBg01 from "../../images/ServiceBg01.png";
import serviceBg02 from "../../images/ServiceBg02.png";
import serviceBg03 from "../../images/ServiceBg03.png";

const Services = () => {
  const aboutImages = [aboutHome1, aboutHome2];

  const serviceList = [
    {
      linkTo: ROUTE_PATHS.SERVICE_OWNER,
      imageUrl: serviceBg02,
      number: "01",
      heading: "Individual House Owners",
      desc: "Transforming Structures into Spectacles.Showcase developments with captivating model flats and add meticulous finishing touches that redefine perfection to your interiors or finishing works.",
    },
    {
      linkTo: ROUTE_PATHS.SERVICE_ARCHITECT,
      imageUrl: serviceBg03,
      number: "02",
      heading: "For Designers/Architects",
      desc: "Realize your dreams with our design services that reflect your lifestyle. We offer functional and aesthetically pleasing solutions for kitchens and wardrobes.ase and wall cabinets. ",
    },
    {
      linkTo: ROUTE_PATHS.SERVICE_BUILDER,
      imageUrl: serviceBg01,
      number: "03",
      heading: "Builders",
      desc: "At the ultimate smart home, you're met with technology before you even step through the front door.",
    },
  ];

  return (
    <>
      <Navbar />

      <AboutSection
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        images={aboutImages}
      />

      {serviceList.map((data, index) => (
        <ServiceProfile key={index} {...data} />
      ))}

      <Testimonials />

      <NewletterSub />
      <Footer />
    </>
  );
};

export default Services;
