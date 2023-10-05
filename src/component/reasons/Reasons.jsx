import React from "react";
import "./Reasons.css";
import image1 from "../../assest/workout1.png";
import image2 from "../../assest/workout2.avif";
import image3 from "../../assest/workout3.jpg";
import image4 from "../../assest/workout4.jpg";
import tick from "../../assest/TICK.png";
import nb from "../../assest/nb.png";
import adidas from "../../assest/adidas.png";
import nike from "../../assest/nike.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us ?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="oops!" />
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="oops" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="oops" />
            <span>1 FREE PROGGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="oops" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
