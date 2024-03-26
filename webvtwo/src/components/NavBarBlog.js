import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './NavBarBlog.css'
import logo from './assets/img/logo/logo.png';
function NavBar() {
    return (
        <nav className="navbarC">
            <div className="logo-box">
                <a href="/">
                    <img src={logo} alt="" style={{height:'50px',width:'40px'}}/>
                </a>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/#contact-section">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
