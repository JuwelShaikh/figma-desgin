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
                <div className="n-list"></div>
            </div>
            <div className="n-left">
                <p>right side</p>
            </div>
        </div>
    );
};

export default Navbar;