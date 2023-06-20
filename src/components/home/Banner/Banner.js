import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/images/bannerImg.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="banner" />
      <div className="banner__content">
        <span>Add your products and give your valuable feedback </span>
        <p>
          Easily give your feedback in a matter of minutes. Access your audience
          on all platforms. Observe result manually in real time
        </p>
      </div>
    </div>
  );
};

export default Banner;
