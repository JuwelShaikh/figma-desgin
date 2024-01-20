import React from 'react';
import './Feedback.css';
import leftIcon from '../../../Images/left-icon.png'
import rightIcon from '../../../Images/Right-icon.png'
import fb from '../../../Images/Facebook.png'
import tw from '../../../Images/Twitter.png'
import link from '../../../Images/Linkedin.png'
import star from '../../../Images/star.png'

const Feedback = () => {
    return (
        <div className='feed-main'>
            <div className="feed-head">
                <div className="head-text">
                    <span>Testimonials</span>
                    <h4>What My Clients Say</h4>
                </div>
                <div className="details">
                    <div>
                        <span>Total reviews</span>
                        <p>323</p>
                    </div>
                    <div className="sRightSide rev">
                        <button><img src={leftIcon} alt="" /></button>
                        <button><img src={rightIcon} alt="" /></button>
                        <button id='btn-src'>View all source</button>
                    </div>
                </div>
            </div>
            <div className="review-content">
                <div className="rev-card">
                    <div className='rev-head'>
                        <div>
                            <p>Emily Johnson</p>
                            <p>USA, California</p>
                        </div>
                        <div>
                            <img src={fb} alt="" />
                            <img src={tw} alt="" />
                            <img src={link} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid odit facere esse asperiores doloremque accusantium praesentium voluptatem quasi voluptates!
                    </div>
                </div>
                <div className="rev-card">
                    <div className='rev-head'>
                        <div>
                            <p>Emily Johnson</p>
                            <p>USA, California</p>
                        </div>
                        <div>
                            <img src={fb} alt="" />
                            <img src={tw} alt="" />
                            <img src={link} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid odit facere esse asperiores doloremque accusantium praesentium voluptatem quasi voluptates!
                    </div>
                </div>
                <div className="rev-card">
                    <div className='rev-head'>
                        <div>
                            <p>Emily Johnson</p>
                            <p>USA, California</p>
                        </div>
                        <div>
                            <img src={fb} alt="" />
                            <img src={tw} alt="" />
                            <img src={link} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquid odit facere esse asperiores doloremque accusantium praesentium voluptatem quasi voluptates!
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Feedback;