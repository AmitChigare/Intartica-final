import React, { useState } from "react";
import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import Footer from "../../components/footer/Footer";
import { Icon } from "@iconify/react";
import ContactForm from "../../components/contactForm/ContactForm";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="container contact-container mb-5">
        <div className="d-flex">
          <div className="contact-info">
            <h1>
              Get in <span className="primary-color px-1"> Touch</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ducimus pariatur earum eum possimus minima sapiente? Officiis unde
              fuga quidem quasi, ipsum cumque minus alias nobis reprehenderit
              temporibus laudantium. Omnis.
            </p>
            <ContactForm onSubmit={handleSubmit} />
            <div className="d-flex justify-content-between contact-icons my-4">
              <div className="d-flex gap-2 align-items-center">
                <div className="icon">
                  <Icon icon="gg:phone" />
                </div>
                <div>
                  <h6>PHONE</h6>
                  <p className="primary-color">798387525</p>
                </div>
              </div>
              <div className="d-flex gap-2  align-items-center">
                <div className="icon">
                  <Icon icon="mdi:fax" />
                </div>
                <div>
                  <h6>FAX</h6>
                  <p className="primary-color">798387525</p>
                </div>
              </div>
              <div className="d-flex gap-2  align-items-center">
                <div className="icon">
                  <Icon icon="clarity:email-solid" />
                </div>
                <div>
                  <h6>EMAIL</h6>
                  <p className="primary-color">contact@intartica.com</p>
                </div>
              </div>
            </div>
            {submitted && (
              <div className="alert alert-success my-5" role="alert">
                Thanks for contacting us. We will get in touch with you soon!
              </div>
            )}
          </div>
          <div className="contact-maps">
            <iframe
              title="Intartica-contact-maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.670018529519!2d78.30854099999999!3d17.475501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI4JzMxLjgiTiA3OMKwMTgnMzAuOCJF!5e0!3m2!1sen!2sin!4v1704444844275!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <NewletterSub />
      <Footer />
    </>
  );
};

export default Contact;
