import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header(props) {
    return (
        <div className='header'>
            <Link to={'/'}>
            <button className='home'>Home</button>
            </Link>
            <Link to={'add-products'}>
            <button className='add-product'>Add products</button>
            </Link>
            <Link to={'cart'}>
            <button className='cart'>Cart</button>
            </Link>
        </div>
    );
}

export default Header;