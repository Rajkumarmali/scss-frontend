import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><input placeholder='' /></li>
                    <li><Link className='nav' to="/">Categories</Link></li>
                    <li><Link className='nav' to="/">Website Builders</Link></li>
                    <li><Link className='nav' to="/">Today's deals</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
