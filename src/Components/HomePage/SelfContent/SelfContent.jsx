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
                            <img src={glow} alt="" /><h3>Introduction</h3>
                        </div>
                        <div className="contact">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti modi totam fugiat, 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SelfContent;