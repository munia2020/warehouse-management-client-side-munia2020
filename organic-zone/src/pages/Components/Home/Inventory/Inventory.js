import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({inventory}) => {
    const {_id, name, description, price, quantity, supplier, img} = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    
    return (
        <div className='single-item'>
            <div className='single-item-img-container'>
                <img className='single-item-img' src={img} alt="" />
            </div>
            <div className='single-item-details'>
                <h3>{name}</h3>
                <p><small>{description}</small></p>
                <p>Supplier Name: {supplier}</p>
                <div className='price-quantity'>
                    <p>Price: $ <span>{price}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
                </div>
                <button onClick={() => navigateToInventoryDetail(_id)} className='single-item-btn'>Update Stock</button>
            </div>
        </div>
    );
};

export default Inventory;