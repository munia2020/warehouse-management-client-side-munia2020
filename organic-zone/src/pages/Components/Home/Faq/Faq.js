import React from "react";
import "./Faq.css";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-container-1">
        <div className="faq-text">
          <p>
            We believe everyone deserves a chance to promote their organic
            business. Organic Zone will offer valuable premium services in the
            future (hey, we need to make money too), but our business model
            allows us to provide everyone a free membership.
          </p>
          <Link to="/about" className="faq-btn">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;
