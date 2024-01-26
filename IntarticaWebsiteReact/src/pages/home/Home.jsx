import React, { useEffect, useState } from "react";
import AboutSection from "../../components/aboutSection/AboutSection";
import AchievePercent from "../../components/achievePercent/AchievePercent";
// import MyCarousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import MyNavbar from "../../components/navbar/Navbar";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import RecentWorks from "../../components/recentWorks/RecentWorks";
import ServiceSection from "../../components/serviceSection/ServiceSection";
import "./home.css";
import blueIcon from "../../images/blue-icon.png";
import aboutHome1 from "../../images/about-home-1.jpeg";
import aboutHome2 from "../../images/about-home-2.jpeg";
import HeroVideo from "../../images/heroBgVideo.mp4";

import { useFormik } from "formik";

const Home = () => {
  // const carouselImages = [
  //   "https://s3-alpha-sig.figma.com/img/fc1f/24ff/6f7ad2b6addde44c97e2e9165ad32656?Expires=1702252800&Signature=PJP-Fd~jd0hoy-SJZMfS-E8fCKP9i7tUFETPrsrZL6Y5rFarUFv1msiVR6IgbiKBHlG7YVfBlDYFPo9byGs7-q31Y1lEg1A8YecXh0DPKNdG2jQlMT~2WkXyRnIbh0eJUmGL0s-~86oCJH0C98vj-D1pK39GHaPcYvsCrqrebZZqv9viCs1cQwDlqNodpXYiA3pzv169YVAhwrOYyiGNtXLGoriVrE1fCHs1Mg~bCK9Hk1BO3VdnZt3xgsbo3RVfQM~cI3Kw4Izgve6m46VotGN7Srx0I5I7suPr5C8QENolr6ozsLkTeB5XTG0ipAmU-KA84iUQuM-o16xUhuBqRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //   "https://media.designcafe.com/wp-content/uploads/2022/09/07162345/kitchen-interior-design-cost.jpg",
  //   "https://media.designcafe.com/wp-content/uploads/2021/09/15180410/pop-ceiling-designs-for-hall.jpg",
  // ];

  const aboutImages = [aboutHome1, aboutHome2];

  const servicesImages = [];

  const awards = [
    {
      heading: "Fast",
      desc: "Streamlined design processes for efficient results.",
    },
    {
      heading: "Creative",
      desc: "Infusing artistic flair into every detail of your space.",
    },
    {
      heading: "Modern",
      desc: "Embracing contemporary trends for timeless designs.",
    },
    {
      heading: "Budget-Friendly",
      desc: "Ensuring excellence without compromising your financial plan.",
    },
  ];

  const achievementPercentData = [
    {
      number: "150",
      heading: "Commitments",
      desc: "150% dedication to turning your dreams into reality.",
    },
    {
      number: "99",
      heading: "Dreamer Satisfaction",
      desc: "That last 1% is us, who always attempt to deliver more",
    },
    {
      number: "100",
      heading: "Commitments",
      desc: "Check for yourselves!",
    },
  ];

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    property: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/i.test(values.name)) {
      errors.name = "Enter a valid full name";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^\d{10}$/i.test(values.phone)) {
      errors.phone = "Invalid phone number format"; // Adjust the error message as needed
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmit();
      console.log("Form data", values);
    },
    validate,
  });

  const [showForm, setShowForm] = useState(false);
  const [formTimeout, setFormTimeout] = useState(5000);

  useEffect(() => {
    // Set a timeout to show the form after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowForm(true);
    }, formTimeout);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [showForm]);

  const handleCloseForm = () => {
    setShowForm(false);
    setFormTimeout(10000);
  };

  return (
    <>
      <MyNavbar />
      <div className="container pb-2 ht">
        <h1 className="heading">
          Welcome to Intartica - Where Dreams Reside in Design
        </h1>
        <p className="heading-tagline">
          Ready to transform your living space into a dream abode? Let's embark{" "}
          on this journey together. Explore our services or connect with us to
          discuss your vision.
        </p>
      </div>

      {/* <MyCarousel images={carouselImages} main={true} /> */}

      <div className="video-container">
        {showForm && (
          <div className="contact-home">
            <button className="close-button" onClick={handleCloseForm}>
              &#10006;
            </button>
            <h3>Designs for Every Budget</h3>
            <form
              onSubmit={formik.handleSubmit}
              className="contact-form-container"
            >
              <div className="form-control">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {/* {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null} */}
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email ID"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {/* {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null} */}
              </div>

              <div className="form-control">
                <input
                  type="phone"
                  placeholder="Phone Number"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {/* {formik.touched.phone && formik.errors.phone ? (
                <div className="error">{formik.errors.phone}</div>
              ) : null} */}
              </div>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Property Name"
                  id="property"
                  name="property"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.property}
                />
                {/* {formik.touched.property && formik.errors.property ? (
                <div className="error">{formik.errors.property}</div>
              ) : null} */}
              </div>

              <button type="submit">GET FREE QUOTE</button>
            </form>
            <p>
              By submitting this form you agree to the{" "}
              <span className="" style={{ color: "black" }}>
                privacy policy & Terms and conditions
              </span>
            </p>
          </div>
        )}
        <video autoPlay loop muted src={HeroVideo}>
          {/* <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag. */}
        </video>
        {/* <div className="">grgr</div> */}
      </div>

      {/* <h1 id="estimatorBtn">GO - TO - ESTIMATOR -</h1> */}

      <div className="awards">
        <div className="why-us">Why Us?</div>
        {awards.map((award, index) => (
          <div className="award d-flex align-items-center" key={index}>
            <div className="blue-icon">
              <img src={blueIcon} alt="" />
            </div>
            <div>
              <h6>{award.heading}</h6>
              <p className="m-0">{award.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <AboutSection images={aboutImages} home={true} />
      <AchievePercent data={achievementPercentData} type="type-1" />
      <ServiceSection images={servicesImages} />
      <RecentWorks />
      <NewletterSub />
      <Footer />
    </>
  );
};

export default Home;
