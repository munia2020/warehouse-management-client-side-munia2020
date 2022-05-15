import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect (()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then (data => setInventories(data));
    },[]);

    const sixInventories = inventories.slice(0, 6);

    return (
        <div className='inventories-area'>
            <h1 className='inventories-heading'>Available Items</h1>
            <div className='inventories-container'>
                {
                    sixInventories.map(inventory => <Inventory 
                        key={inventory._id}
                        inventory={inventory}
                        ></Inventory>)
                }
            </div>
            <div>
                <Link to="/manageinventories" className="banner-btn">Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventories;