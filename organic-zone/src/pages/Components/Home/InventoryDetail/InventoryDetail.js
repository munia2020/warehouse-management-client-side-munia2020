import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [delivered, setDelivered] = useState();

  const handleDelivered = () => {
      if (delivered > 0){
          setDelivered(delivered -1)
      }
    
  }

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return (
    <div className="detail-container">
      <div className="detail-img-div">
        <img className="detail-img" src={inventory.img} alt="" />
      </div>
      <div className="detail-img-text">
        <h1>{inventory.name}</h1>
        <p>
          <small>{inventory.description}</small>
        </p>
        <p>Supplier Name: {inventory.supplier}</p>
        <div className="price-quantity">
          <p>
            Price: $ <span>{inventory.price}</span>
          </p>
          <p>
            Quantity: <span>{inventory.quantity}</span>
          </p>
          <br />
          <button onClick={handleDelivered}>Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetail;
