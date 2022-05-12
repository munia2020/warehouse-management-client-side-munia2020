import React from "react";
import "./QusAns.css";
import { Accordion, Button } from "react-bootstrap";

const QusAns = () => {
  return (
    <div>
      <h1 className="accor-h1">Frequently Asked Questions</h1>
      <div className="accordion-container">
        <div className="accor-container">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="accor-item">
              <Accordion.Header className="accor-header">
                I run a bio farm, do I need a certificate?
              </Accordion.Header>
              <Accordion.Body className="accor-body">
                Yes, if your products are certified bio products, a certificate
                is required in all cases.All small producers, primary producers
                and co-operatives who produce quality raw materials or finished
                products with a homemade taste and can deliver them to our
                warehouse free of charge. It is also important that our future
                partner has to have a tax id and has to be able to issue an
                invoice.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What do I need to know about shipping and billing?
              </Accordion.Header>
              <Accordion.Body>
                Please deliver to our warehouse free of charge between 8:00am
                and 4:00 pm on weekdays. Quantities should be agreed upon one
                week in advance, this number may change following the
                introduction of product(s). We ask for a transfer invoice for
                the products, preferably via e-mail, that will be paid with a
                minimum 21 days transfer.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Is EAN code/weight code necessary?
              </Accordion.Header>
              <Accordion.Body>
                Yes. For a fee we can provide EAN and weight code, but an EAN
                code is always required for the identification of the products.
                Fresh vegetables and fruits are available seasonally, dairies,
                meats and processed products while stock lasts as per the
                producer. For our complete offer feel free to contact our
                colleague.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="accor-img-container">
          <img
            className="accor-img"
            src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QusAns;
