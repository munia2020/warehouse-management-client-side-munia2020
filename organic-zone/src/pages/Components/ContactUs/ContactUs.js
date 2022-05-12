import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-width">
        <div className="contact-text">
          <h1>Start Making New Deals Today</h1>
          <p>
            <small>
              Display unlimited number of your products, contact new business
              clients directly and get better prices for your products.
            </small>
          </p>
          <h1>Contact</h1>
          <p>
            <small>
              If you are interested and would like to join our community, or as
              a purchaser you would like to get more information, feel free to
              contact us, we will be happy to respond.
            </small>
          </p>
          <button className="contact-btn">Join Online For Free</button>
        </div>
        <div className="contact-img-container">
          <img
            className="contact-img"
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          {/* <img src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /> */}
        </div>
      </div>
      <div className="contact-width">
        <div className="contact-img-container">
          <img className="contact-img" src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div className="contact-text" id="txt-email-add">
          <div>
            <h3>Let us do the work for you. Meet organic food <br /> suppliers and buyers, Conclude deals on the spot!</h3>
            <p>
              <small>E-mail address:</small>
            </p>
            <h2>
              <span>contact@organic.zone</span>
            </h2>
          </div>
          <div>
            <p>
              <small>
                Warehouse:
                <span> 1008 Fording Island Rd, Bluffton, South Carolina</span>
              </small>
            </p>
            <p>
              <small>
                Address:
                <span> 	116 S Main St, 	Summerville</span>
              </small>
            </p>
            <p>
              <small>
                Office:
                <span> 	2995 Reidville Rd 150, Spartanburg</span>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
