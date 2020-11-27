import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logovegan.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul className='link-list'>
                <li className='logo-li'><Link className='link' to="/"><img src={logo} alt='Veganbite'  height='40px' /></Link></li>
                <li><Link className='link' to="/calculator">Calculator</Link></li>
                <li><Link className='link' to="/about-us">About Us</Link></li>
                <li><Link className='link' to="/meal-plan">Meal Plan</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
