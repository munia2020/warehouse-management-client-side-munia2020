import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ManageSingle from "../ManageSingle/ManageSingle";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Do you really want to delete?");
    if (proceed) {
      console.log("deleting , ", id);
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = inventories.filter(
              (inventory) => inventory._id !== id
            );
            setInventories(remaining);
          }
        });
    }
  };
  return (
    <div className="manage-inventories">
      <h1>Manage Inventories: {inventories.length}</h1>
      <div className="manage-inventories-container">
        {inventories.map((inventory) => (
          <div key={inventory._id}>
            <Card className="manage-single-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={inventory.img} />
              <Card.Body>
                <Card.Title>{inventory.name}</Card.Title>
                <Button
                  onClick={() => handleUserDelete(inventory._id)}
                  variant="success"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;
