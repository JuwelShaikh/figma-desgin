import React from 'react';
import '../SelfContent/SelfContent.css';
import selfPhoto from '../../../Images/Self photo.png';
import glow from '../../../Images/glow.png';

const SelfContent = () => {
    return (
        <div className='self-container'>
            <div className="s-container">
                <div className="s-about">
                    <div className="s-left-side">
                        <span>about</span>
                        <h2>i am damien</h2>
                    </div>
                    <div className="s-right-side">
                        <button>Know more</button>
                    </div>
                </div>
                <div className="s-abt-container">
                    <div className="abt-left">
                        <img src={selfPhoto} alt="" />
                    </div>
                    <div className="abt-right">
                        <div className="intro">
                            <div>
                                <img src={glow} alt="" /><h3>Introduction</h3>
                            </div>
                            <p>My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                        </div>
                        <div className="contact">
                            <div>
                                <img src={glow} alt="" /><h3>Contact Information</h3>
                            </div>
                            <div className="phone-email">
                                <div className="email">
                                    <h5>Email</h5>
                                    <p>damienbraun@gmail.com</p>
                                </div>
                                <div className="phone">
                                <h5>Phone</h5>
                                    <p>+00 000000000</p>
                                </div>
                            </div>
                            <div className="links">
                                <div className="icons"></div>
                                <div className="btns"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SelfContent;