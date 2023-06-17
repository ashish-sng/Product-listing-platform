import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/images/bannerImg.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImg} alt="banner" />
      <div className="banner__content">
        <h1>Add your products and give your valuable feedback </h1>
        <p>
          Easily give your feedback in a matter of minutes. Access your audience
          on all platforms. Observe result manually in real time
        </p>
      </div>
    </div>
  );
};

export default Banner;
