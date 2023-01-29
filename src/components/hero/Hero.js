import React from "react";
import "./Hero.scss";
import { BiCheckDouble } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heading-container">
        <h1 className="heading-h1">
          <span className="heading-h1__span">What is Siriuss?</span>
          <span className="heading-h1__span">Makes your buisness Glow</span>
        </h1>
      </div>

      <div className="hero-details">
        <p>
          <BiCheckDouble />
          Jordanian Accounting Company
        </p>
        <p>
          {" "}
          <BiCheckDouble />
          Auditing Services
        </p>
        <p>
          {" "}
          <BiCheckDouble />
          Financial Modeling services
        </p>
        <p>
          {" "}
          <BiCheckDouble />
          And more
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Hero;
