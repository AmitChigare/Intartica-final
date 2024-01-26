import React from "react";
import "./sHeroSection.css";
import MyCarousel from "../carousel/Carousel";

const SHeroSection = () => {
  const carouselImages = [
    "https://s3-alpha-sig.figma.com/img/fc1f/24ff/6f7ad2b6addde44c97e2e9165ad32656?Expires=1702252800&Signature=PJP-Fd~jd0hoy-SJZMfS-E8fCKP9i7tUFETPrsrZL6Y5rFarUFv1msiVR6IgbiKBHlG7YVfBlDYFPo9byGs7-q31Y1lEg1A8YecXh0DPKNdG2jQlMT~2WkXyRnIbh0eJUmGL0s-~86oCJH0C98vj-D1pK39GHaPcYvsCrqrebZZqv9viCs1cQwDlqNodpXYiA3pzv169YVAhwrOYyiGNtXLGoriVrE1fCHs1Mg~bCK9Hk1BO3VdnZt3xgsbo3RVfQM~cI3Kw4Izgve6m46VotGN7Srx0I5I7suPr5C8QENolr6ozsLkTeB5XTG0ipAmU-KA84iUQuM-o16xUhuBqRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://media.designcafe.com/wp-content/uploads/2022/09/07162345/kitchen-interior-design-cost.jpg",
    "https://media.designcafe.com/wp-content/uploads/2021/09/15180410/pop-ceiling-designs-for-hall.jpg",
  ];
  return (
    <div className="s-hero-container d-flex mb-5">
      <div className="s-hero-content">
        <h1 className="s-hero-heading">Design Your Space For Living</h1>
        <button className="btn s-hero-btn">lorem ipsum</button>
      </div>
      <div className="s-hero-images">
        <MyCarousel images={carouselImages} main={false} />
      </div>
    </div>
  );
};

export default SHeroSection;
