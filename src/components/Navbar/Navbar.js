import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul>
                <li><Link to="/">Veganbit</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/meal-plan">Meal Plan</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
