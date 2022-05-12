import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-background">
      <div className="banner-text">
        <h1>Get Fresh Food</h1>
        <h1>Directly From Farm to Your Table</h1>
        <h3>
          WE ARE HERE TO MAKE GLOBAL ORGANIC TRADE EASY! A PLATFORM THAT
          CONNECTS ORGANIC FOOD SUPPLIERS WITH WHOLESALE BUYERS.
        </h3>
        <br />
        {/* <button className="banner-btn">CONTACT US</button> */}
        <Link to='/contact' className="banner-btn">CONTACT US</Link>
      </div>
    </div>
  );
};

export default Banner;
