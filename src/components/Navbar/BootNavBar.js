import React from 'react';
import './BootNavBar.css';
import logo from '../../assets/logovegan.png';
import { Link } from 'react-router-dom';

const BootNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark">
            <Link to="/" class="navbar-brand mr-0"><img src={logo} alt='logo' height='50px'/></Link>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/calculator" class="nav-link text-white">Calculator</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/meal-plan" class="nav-link text-white">Meal Plan</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about-us" class="nav-link text-white">About Us</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default BootNavBar;