import React, { useState } from "react";
import "./estimator.css";
import Navbar from "../../components/navbar/Navbar";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import Footer from "../../components/footer/Footer";
import EPart1 from "../../components/estimatorPart1/EPart1";
import EPart2 from "../../components/estimatorPart2/EPart2";
import EPart3 from "../../components/estimatorPart3/EPart3";
import EPart4 from "../../components/estimatorPart4/EPart4";

const Estimator = () => {
  const [step, setStep] = useState(1);

  // State to store responses for all steps
  const [responses, setResponses] = useState({
    bhkType: "",
    roomCounts: {
      livingRoom: 0,
      kitchen: 0,
      bedroom: 0,
      bathroom: 0,
      dining: 0,
    },
    selectedPackage: "",
  });

  // Function to handle next step and save responses
  const handleNextStep = (data) => {
    setResponses((prevResponses) => ({ ...prevResponses, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  // Function to handle previous step
  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <Navbar />

      <div className="estimator-steps">
        {step === 1 && (
          <EPart1 nextStep={handleNextStep} responses={responses} />
        )}
        {step === 2 && (
          <EPart2
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
            responses={responses}
          />
        )}
        {step === 3 && (
          <EPart3
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
            responses={responses}
          />
        )}
        {step === 4 && (
          <EPart4 prevStep={handlePrevStep} responses={responses} />
        )}
      </div>

      {/* <pre>{JSON.stringify(responses, null, 2)}</pre> */}

      <NewletterSub />
      <Footer />
    </>
  );
};

export default Estimator;
