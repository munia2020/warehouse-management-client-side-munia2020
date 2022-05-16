import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import useInventories from "../../../../hooks/useInventories";
import './ManageSingle.css';

const ManageSingle = ({ inventory }) => {
  const { _id, name, description, price, quantity, supplier, img } = inventory;

  const [inventories, setInventories] = useInventories();

  const handleUserDelete = id =>{
    const proceed = window.confirm('Are you sure you want to delete?');
    if(proceed){
        console.log('deleting user with id, ', id);
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                console.log('deleted');
                const remaining = inventories.filter(item => item._id !== id);
                setInventories(remaining);
            }
        })
    }
}
  return (
    <div>
      <Card className="manage-single-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
          <Button onClick={() => handleUserDelete(_id)} variant="success">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ManageSingle;
