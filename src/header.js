import React from 'react';
import './header.css';
import logo from './assets/images/logo.png';


function Header() {
    return (
        <>
        <div className="servClass">
        <span>SHOP SPECTRUM SERVICES</span>
        </div>
        <div>
        <header className="header">
        <img src = {logo} alt="Company Logo" className="logo" />
        <nav>
            <ul>               
                <li><a href="/about">About Us</a></li> 
            </ul>
        </nav>
        
    </header>
    </div>
    </>
    );
}

export default Header;