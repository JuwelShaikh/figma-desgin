import React from 'react';
import './Footerunder.css'
import fb from '../../../Images/Facebook.png';
import tw from '../../../Images/Twitter.png';
import link from '../../../Images/Linkedin.png';

const FooterUnder = () => {
    return (
        <div className='uner-main'>
            <div className="un-wrapper">
            <div className='p-first'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div>
                <div className='rev-links'>
                    <img src={fb} alt="" />
                    <img src={tw} alt="" />
                    <img src={link} alt="" />
                </div>
            </div>
            <div>
                <p>© 2024 Damien Braun Photography. All rights reserved.</p>
            </div>
            </div>
        </div>
    );
};

export default FooterUnder;