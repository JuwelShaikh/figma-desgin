import React from 'react';
import '../Services/Services.css'
import leftIcon from '../../../Images/left-icon.png';
import rightIcon from '../../../Images/Right-icon.png';
import arrow from '../../../Images/Arrow.png';
import dot from '../../../Images/dot.png';

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
            <div className="event-service">
                <div className="eLeftSide">
                    <div className="events">
                        <div>
                            <h1>events <button className='h-btn'><img src={arrow} alt="" /></button></h1>
                        </div>
                        <div className="e-content">
                            <p>Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.</p>
                        </div>
                    </div>
                    <div className="highlights">
                        <p>Service Highlights</p>
                        <ol>
                            <li><img src={dot} alt="" />Quick turnaround for you to relive the day's highlights.</li>
                            <li><img src={dot} alt="" />A mix of candid and posed shots for a comprehensive story.</li>
                            <li><img src={dot} alt="" />Skilled photographers who know how to seize the moment.</li>
                            <li><img src={dot} alt="" />Coverage for weddings, parties, corporate functions, and more.</li>
                        </ol>
                    </div>
                </div>
                <div className="eRightSide">right</div>

            </div>
        </div>
    );
};

export default Services;