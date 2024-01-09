import React from 'react';
import '../NavBar/Navbar.css';
import logo from '../../../Images/Logo.png'

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className="n-right">
                <img src={logo} alt="" />
            </div>
            <div className="n-mid">
                <div>
                    <ul className="n-list">
                        <li>Home</li>
                        <li>About me</li>
                        <li>Protfolio</li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
            <div className="n-left">
                <button>Contact</button>
            </div>
        </div>
    );
};

export default Navbar;