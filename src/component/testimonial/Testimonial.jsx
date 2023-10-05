import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "./testimonialsData";
import rightarrow from "../../assest/right-arrow.png";
import leftarrow from "../../assest/left-arrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setselected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          -{testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="oop !"
        />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setselected(tLength - 1)
                : setselected((prev) => prev - 1);
            }}
            src={rightarrow}
            alt="oops !"
          />
          <img
            onClick={() => {
              selected === tLength - 1
                ? setselected(0)
                : setselected((prev) => prev + 1);
            }}
            src={leftarrow}
            alt="oops !"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
