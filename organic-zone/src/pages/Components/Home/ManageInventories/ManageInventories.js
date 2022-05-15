import React, { useEffect, useState } from "react";
import ManageSingle from "../ManageSingle/ManageSingle";

const ManageInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div>
      <h1>manage inventory: {inventories.length}</h1>
      {inventories.map((inventory) => (
        <ManageSingle 
        key={inventory._id}
        inventory={inventory}
        ></ManageSingle>
      ))}
    </div>
  );
};

export default ManageInventories;
