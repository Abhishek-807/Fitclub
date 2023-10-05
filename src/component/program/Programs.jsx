import React from "react";
import "./Programs.css";
import { programsData } from "./programsData";
import arrow from "../../assest/rightarrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span style={{ marginTop: "-7px" }}>Programme</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-catagories">
        {programsData.map((program) => (
          <div className="catagory">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join_now">
              <span>Join Now</span>
              <img src={arrow} alt="oops !" className="rightarrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
