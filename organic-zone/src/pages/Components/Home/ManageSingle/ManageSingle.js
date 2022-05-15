import React from "react";
import { Button, Card } from "react-bootstrap";

const ManageSingle = ({ inventory }) => {
  const { _id, name, description, price, quantity, supplier, img } = inventory;
  return (
    <div>
      <h3>{name}</h3>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ManageSingle;
