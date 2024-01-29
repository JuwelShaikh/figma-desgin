import React, { useState } from 'react';
import '../NavBar/Navbar.css';
import logo from '../../../Images/Logo.png';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className="n-container">
            <div className='navBar'>
                <div className='n-toggle'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
                </div>
                <div className="n-right">
                    <img src={logo} alt="" />
                </div>
                <div className={`n-mid ${isMenuOpen ? 'active' : ''}`}>
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
        </div>
    );
};

export default Navbar;