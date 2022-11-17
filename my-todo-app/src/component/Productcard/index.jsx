import React from 'react';
import './style.css';

function Productcard({ nameP, img, price, handleDel, id }) {
    
    
    return (
        <div className='product-card'>
            <img src={img} width='150px' height='200px' alt="cake" />
            <h4>{ nameP}</h4>
            <p>{price}$</p>
            <button className='add-to-cart'>Add to cart</button>
            <button onClick={() => handleDel(id)} className='delete-product'>&times;</button>
            <button className='edit-product'>&equiv;</button>
            
        </div>
    );
}

export default Productcard;