import React from 'react';
import '../Services/Services.css'
import leftIcon from '../../../Images/left-icon.png';
import rightIcon from '../../../Images/Right-icon.png';

const Services = () => {
    return (
        <div className='Ser-main'>
            <div className="photo-service">
                <div className="sLeftSide">
                    <span>Services</span>
                    <p>My Photography Services</p>
                </div>
                <div className="sRightSide">
                    <button><img src={leftIcon} alt="" /></button>
                    <button><img src={rightIcon} alt="" /></button>
                    <button id='btn-src'>View all source</button>      
                </div>
            </div>
        </div>
    );
};

export default Services;