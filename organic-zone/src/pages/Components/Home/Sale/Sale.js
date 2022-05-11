import React from 'react';
import './Sale.css';

const Sale = () => {
    return (
        <div className='summer-special'>
            <h1>Summer Special Fruits!</h1>
            <div className='summer-container'>
                <div className='summer-single-item-1'>
                    <h1>Taste The Summer</h1>
                </div>
                <div className='summer-single-item-2'>
                    <h1>Taste The Summer</h1>
                </div>
                <div className='summer-single-item-3'>
                    <h1>Taste The Summer</h1>
                </div>
            </div>
            <div>
                <button className='sale-btn'>Subscribe And Get Discount</button>
            </div>
        </div>
    );
};

export default Sale;