import React from 'react';
import '../SelfContent/SelfContent.css';
import selfPhoto from '../../../Images/Self photo.png'

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
                    <div className="abt-right">Right</div>
                </div>
            </div>

        </div>
    );
};

export default SelfContent;