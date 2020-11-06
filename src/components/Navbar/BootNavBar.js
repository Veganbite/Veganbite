import React from 'react';
import './BootNavBar.css';
import logo from '../../assets/logovegan.png';
import { Link } from 'react-router-dom';

const BootNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light">
            <a class="navbar-brand mr-0"><Link to="/"><img src={logo} alt='logo' height='50px'/></Link></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/calculator"><a class="nav-link text-white">Calculator</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/meal-plan"><a class="nav-link text-white">Meal Plan</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about-us"><a class="nav-link text-white">About Us</a></Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default BootNavBar;