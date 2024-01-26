import React from "react";
import "./newsletterSub.css";
import { Icon } from "@iconify/react";

const NewletterSub = () => {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <div className="d-flex newsSub px-3 mt-5">
      <h1 className="h">
        Subscribe to Our Newsletter <br /> for Design Insights
      </h1>
      <p className="p m-0 ">
        Be the first to discover trends, inspirations, and special offers as we
        bring the world of design directly to your inbox
      </p>
      <form action={search} className="form">
        <div className="sub-form">
          <input name="query" placeholder={`Enter your Email Address`} />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default NewletterSub;
