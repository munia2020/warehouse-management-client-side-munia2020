import React from 'react';
import './MyItem.css';
import { useForm } from 'react-hook-form';
import AddedItems from '../AddedItems/AddedItems';
import { Link } from 'react-router-dom';

const MyItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            alert('Your item added sucessfully. Go to manage inventories to check');
        } )
    };
    return (
        <div className='my-items-div'>
            <h2>Add new items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Supplier Name'  {...register("supplier")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='banner-btn' type="submit" value="Add Item" />
            </form>
            <br />
            <Link className="back-btn" to="/manageinventories">Back to Manage Inventories</Link>
            {/* <AddedItems></AddedItems> */}
        </div>
    );
};

export default MyItem;