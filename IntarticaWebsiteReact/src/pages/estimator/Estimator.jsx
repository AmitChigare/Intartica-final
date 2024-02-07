import React from "react";
import "./estimator.css";
import Navbar from "../../components/navbar/Navbar";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import Footer from "../../components/footer/Footer";

const Estimator = () => {
  return (
    <>
      <Navbar />
      <h5 style={{ height: "50vh" }}>This is an Estimator Page</h5>
      <NewletterSub />
      <Footer />
    </>
  );
};

export default Estimator;
