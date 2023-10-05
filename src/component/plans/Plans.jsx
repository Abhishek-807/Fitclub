import React from "react";
import "./Plans.css";
import { plansData } from "./plansData";
import tick from "../../assest/TICK.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div
        className="programs-header"
        style={{ gap: "6rem", marginRight: "4rem" }}
      >
        <span className="stroke-text">READY TO START</span>
        <span style={{ marginTop: "-7px" }}>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, id) => (
          <div className="plan" key={id}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, id) => (
                <div className="feature">
                  <img src={tick} alt="oops !" />
                  <span key={id}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -> </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
