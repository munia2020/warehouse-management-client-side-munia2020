import React from "react";
import { Button, Spinner } from "react-bootstrap";
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="border" variant="success" />
      <h1 style={{ color: "green" }}>Loading...</h1>
      {/* <Button variant="success" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button> */}
    </div>
  );
};

export default Loading;
