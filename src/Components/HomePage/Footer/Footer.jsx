import React from 'react';
import './footer.css';
import design from '../../../Images/Abstract Design1.png';
import design2 from '../../../Images/Abstract Design2.png';
import arrow from '../../../Images/Arrow.png';


const Footer = () => {
    return (
        <div className='footer-main'>
            <img className='design' src={design} alt="" />
            <div className="wrapper">
                <div className="foo-left-side">
                    <p>A more meaningful home for photography</p>
                    <div className="h-right">
                        <h1>Let's <button className='h-btn'><img src={arrow} alt="" /></button></h1>
                        <h1>work together</h1>
                    </div>
                </div>
                <div className="foo-right-side">
                    <div className='foo-list'>
                        <ul>
                            <li className='list-head'>Home</li>
                            <li>About me</li>
                            <li>My Works</li>
                            <li>Testimonials</li>
                        </ul>
                        <ul>
                            <li className='list-head'>Clients</li>
                            <li>Nokia</li>
                            <li>Samsung</li>
                            <li>Microsoft</li>
                            <li>Walton</li>
                            <li>Givson</li>
                        </ul>
                        <ul>
                            <li className='list-head'>Protfolio</li>
                            <li>Nokia</li>
                            <li>Samsung</li>
                            <li>Microsoft</li>
                            <li>Walton</li>
                            <li>Givson</li>
                            <li>Walton</li>
                            <li>Givson</li>
                        </ul>
                        <ul>
                            <li className='list-head'>Services</li>
                            <li>Nokia</li>
                            <li>Samsung</li>
                            <li>Microsoft</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img className='design' src={design2} alt="" />
        </div >
    );
};

export default Footer;