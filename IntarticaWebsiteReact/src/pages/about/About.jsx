import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./about.css";
import EssenceCard from "../../components/essenceCard/EssenceCard";
import HomeTag from "../../components/homeTag/HomeTag";
import TimelineAbout from "../../components/timelineAbout/TimelineAbout";
import Testimonials from "../../components/testimonials/Testimonials";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import InspirationDiv from "../../components/inspirationDiv/InspirationDiv";
import AchievePercent from "../../components/achievePercent/AchievePercent";
import bedroomImg01 from "../../images/bedroom01.png";
import bedroomImg02 from "../../images/bedroom02.png";

const About = () => {
  const essenceCardData = [
    {
      icon: "mdi:run-fast",
      heading: "Fast",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.",
    },
    {
      icon: "teenyicons:bulb-on-solid",
      heading: "Creative",
      desc: "Creativity is our heartbeat. At Intartica, we infuse every design with artistic flair and innovative thinking, crafting spaces that captivate the imagination and breathe life into your unique vision.",
    },
    {
      icon: "material-symbols:computer-outline",
      heading: "Modern",
      desc: "Modernity defines our designs. Intartica embraces contemporary aesthetics, staying at the forefront of design trends. Your space will be a testament to modern elegance, seamlessly blending style and functionality.",
    },
    {
      icon: "material-symbols:group",
      heading: "Budget-friendly",
      desc: "Luxury doesn't have to come at a high cost. Intartica is committed to delivering premium designs without breaking the bank. Our budget-friendly approach ensures quality and excellence within your financial framework.",
    },
    {
      icon: "material-symbols:group",
      heading: "Client-Centric",
      desc: "At Intartica, our focus is on you. We prioritize your needs, preferences, and satisfaction throughout the design journey. Our client-centric approach ensures that every decision, from concept to execution, revolves around realizing your vision and exceeding your expectations.",
    },
  ];

  const timelineData1 = [
    {
      icon: "material-symbols:lightbulb-circle",
      heading: "Turning Dreams into Reality: Our Mission",
      desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
    },
    {
      icon: "material-symbols:lightbulb-circle",
      heading: "Our Beliefs: Elevating Your Dreams",
      desc: "At Intartica, we believe our customers are positive, visionary, and ambitious individuals united by family, community, and society. We strive to be a one-stop solution for interior design and execution, a trusted partner in turning houses into dream abodes.",
    },
    {
      icon: "icon-park-solid:check-one",
      heading: "Turning Dreams into Reality: Our Vision",
      desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
    },
  ];

  const timelineData2 = [
    {
      icon: "material-symbols:lightbulb-circle",
      heading: "Turning Dreams into Reality: Our Mission",
      desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
    },
    {
      icon: "material-symbols:lightbulb-circle",
      heading: "Our Beliefs: Elevating Your Dreams",
      desc: "At Intartica, we believe our customers are positive, visionary, and ambitious individuals united by family, community, and society. We strive to be a one-stop solution for interior design and execution, a trusted partner in turning houses into dream abodes.",
    },
    {
      icon: "icon-park-solid:check-one",
      heading: "Turning Dreams into Reality: Our Vision",
      desc: "Intartica is not just an interior design and execution brand; it's a promise to turn your dream house into a real living castle. We believe in creating a positive and charismatic ambience in every home, an escape where you find solace after a hectic work schedule. Each project is approached as a masterpiece, a reflection of our dedication to enabling the positivity needed to achieve your dreams.",
    },
  ];

  const achievementPercentData = [
    {
      number: "150",
      heading: "Commitments",
    },
    {
      number: "99",
      heading: "Dreamer Satisfaction",
    },
    {
      number: "100",
      heading: "Commitments",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="d-flex container about-container">
        <div className="about-main">
          <h1 className="about-heading">
            Crafting Dreams, Building <br />
            Homes
          </h1>
          <p className="about-para">
            {" "}
            Welcome to Intartica, where we turn spaces into living masterpieces,
            infusing art, functionality, and soulfulness into every corner. Our
            journey began in 2017, in the vibrant city of Hyderabad, India,
            founded by the visionary Srinivas Reddy Puram. Intartica is more
            than an interior design brand; it's a commitment to bring dreams to
            life.
          </p>
          <p className="about-para">
            Integrity is at the core of everything we do—transparency, fairness,
            and honesty guide our actions. We take pride in going the extra
            mile, pushing boundaries, and continuously improving to bring out
            the best for our customers.
          </p>
          <div>
            <button className="btn btn-danger">Free Dream Counselling</button>
            <AchievePercent data={achievementPercentData} type="type-2" />
          </div>
        </div>

        <div className="d-flex flex-column gap-3">
          <img src={bedroomImg01} alt="aimg" className="img-1" />

          <img src={bedroomImg02} alt="img1" className="img-2" />
        </div>
      </div>

      <div className="container pt-5">
        <HomeTag text="Interior's Essence" />
        <div className="d-flex tt">
          {essenceCardData.map((data, index) => (
            <EssenceCard
              icon={data.icon}
              heading={data.heading}
              desc={data.desc}
            />
          ))}
        </div>
      </div>

      <InspirationDiv />

      <TimelineAbout
        type1={true}
        heading="Designing Your Dream in Three Simple Steps"
        timelineData={timelineData1}
      />
      <TimelineAbout
        type2={true}
        heading="Crafting Your Dream Space:The Intartica Experience in Three Simple Steps"
        timelineData={timelineData2}
      />

      <Testimonials />
      <NewletterSub />

      <Footer />
    </>
  );
};

export default About;
