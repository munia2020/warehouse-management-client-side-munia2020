import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-divs">
        <div>
          <small>Copyright &copy;IsratZahan</small>
        </div>
        <div>
          <small> Privacy Policy</small>
          <small className="footer-items">General Terms and Conditions</small>
          <small className="footer-items">Official Partners</small>
          <small className="footer-items">Tell Us What You Think</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
