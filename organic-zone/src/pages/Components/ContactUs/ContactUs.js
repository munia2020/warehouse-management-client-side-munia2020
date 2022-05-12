import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-width">
        <div className="contact-text">
          <h1>Our Mission</h1>
          <p>
            <small>
              To make organic food trade easy and simple, anytime, anywhere.
            </small>
          </p>
          <h1>About</h1>
          <p>
            <small>
              At Organic Zone, we all come to work every day because we want to
              solve one of the biggest problems in organic food market. Organic
              suppliers (producers, manufactures, exporters and importers) are
              having troubles to connect directly to business buyers. Costs of
              attending trade shows, of sales teams, advertising and marketing
              costs, are often too much for the most of organic suppliers.
              Business buyers of organic food are having difficulties to find
              the right products in the right time, or find it even at all. Our
              goal at Organic Zone is to connect businesses of all sizes with
              organic suppliers around the world. Today we provide most advanced
              web platform for food trade in organic sector. We want to give the
              opportunity to every organic supplier to display his products to
              potential business clients in any part of the world.
            </small>
          </p>
          <button className="contact-btn">Join For Free</button>
        </div>
        <div className="contact-img-container">
          <img
            className="contact-img"
            src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
          {/* <img src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
