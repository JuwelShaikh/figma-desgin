import React from 'react';
import './footer.css';
import design from '../../../Images/Abstract Design1.png';
import design2 from '../../../Images/Abstract Design2.png';
import arrow from '../../../Images/Arrow.png';


const Footer = () => {
    return (
        <div className='footer-main'>
            {/* <img src={design} alt="" />
            <img src={design2} alt="" /> */}
            <div className="wrapper">
                <div className="foo-left-side">
                    <p>A more meaningful home for photography</p>
                    <div className="h-right">
                        <h1>Let's <button className='h-btn'><img src={arrow} alt="" /></button></h1>
                        <h1>work together</h1>

                    </div>
                </div>
                <div className="foo-right-side">

                </div>
            </div>
        </div>
    );
};

export default Footer;