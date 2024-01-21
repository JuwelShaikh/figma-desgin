import React from 'react';
import './footer.css';
import design from '../../../Images/Abstract Design1.png';
import design2 from '../../../Images/Abstract Design2.png';

const Footer = () => {
    return (
        <div className='footer-main'>
            <img src={design} alt="" />
            <img src={design2} alt="" />
        </div>
    );
};

export default Footer;