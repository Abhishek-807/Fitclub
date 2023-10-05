import React from "react";
import "./Hero.css";
import Header from "../header/Header";
import Heart from "../../assest/Heart.png";
import hero from "../../assest/hero_image.png";
import heroback from "../../assest/hero_image_backsd.png";
import burned from "../../assest/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-add">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" prefix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" prefix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={49} start={20} delay="4" prefix="+" />
            </span>
            <span>fitness program</span>
          </div>
        </div>
        {/* hero buttons */}

        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "8rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116-bpm </span>
        </motion.div>
        {/* hero image */}
        <img src={hero} alt="oops !" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          src={heroback}
          alt=""
          className="hero_image_back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "25rem" }}
          transition={transition}
          className="calories"
        >
          <img src={burned} alt="not burned" />
          <div>
            <span>Calories Burned</span>
            <span> 220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
