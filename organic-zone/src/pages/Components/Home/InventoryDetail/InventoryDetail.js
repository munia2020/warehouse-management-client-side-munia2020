import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetail.css";

const InventoryDetail = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  console.log(inventory);

  useEffect(() => {
    const url = `https://intense-brushlands-99652.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);

  // * ui can be updated by this way (uzzal vai)
  const updateUi = () => {
    const url = `https://intense-brushlands-99652.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }

  const quantityDecrease = (newQuantity) => {
    let quantity = parseInt(newQuantity) - 1;
    console.log(quantity)
    const updateQuantity = { quantity };
    const url = `https://intense-brushlands-99652.herokuapp.com/inventory/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        // alert("saved");
        updateUi()
      });
      
  };
  const handleUpdateQuantity = (event) =>{
    event.preventDefault();
    const quantity = parseInt(event.target.quantity.value) + parseInt(inventory.quantity)
    // console.log(quantity)

    const updatedUser = {quantity};

    const url = `https://intense-brushlands-99652.herokuapp.com/inventory/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success', data);
        event.target.reset();
        updateUi()
    })
    
};



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
            Quantity: <span>{inventory.quantity}</span> units
          </p>
          <button className="deliver-btn" onClick={() => quantityDecrease(inventory.quantity)}>Delivered</button>
          <br />
          <br />
          <br />
          <h3>Update Stock</h3>
          <form onSubmit={handleUpdateQuantity}>
            <input className="input-field" type="number" name="quantity" placeholder="stock amount" required />
            <input className="deliver-btn" type="submit" value="Update Stock" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetail;
