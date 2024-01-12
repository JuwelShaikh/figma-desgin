import React from 'react';
import '../SubContainer/Subcontent.css';
import dot from '../../../Images/dot.png';

const SubContent = () => {
    


    return (
       <div className="main-content">
         <div className='sub-content'>
            <div className="s-content">
                <img src={dot} alt="" />
                <p>EVENT PHOTOGRAPHY</p>
            </div>
            <div className="s-content">
                <img src={dot} alt="" />
                <p>COMERCIAL PHOTOGRAPHY</p>
            </div>
            <div className="s-content">
                <img src={dot} alt="" />
                <p>POTRAIT PHOTOGRAPHY</p>
            </div>
            <div className="s-content">
                <img src={dot} alt="" />
                <p>WEDDING PHOTOGRAPHY</p>
            </div>
            <div className="s-content">
                <img src={dot} alt="" />
                <p>LANDSCAPE PHOTOGRAPHY</p>
            </div>
            <div className="s-content">
                <img src={dot} alt="" />
                <p>BRANDING PHOTOGRAPHY</p>
            </div>
            <div className="s-content">
                <img src={dot} alt="" />
                <p>Lorem ipsum.</p>
            </div>
        </div>
       </div>
    );
};

export default SubContent;