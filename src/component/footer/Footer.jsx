import React from "react";
import "./Footer.css";
import github from "../../assest/github.png";
import insta from "../../assest/instagram.png";
import linkedin from "../../assest/linkedin.png";
import Logo from "../../assest/logo_top.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <img src={github} alt="" />
          <img src={insta} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
    </div>
  );
};

export default Footer;
