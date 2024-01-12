import React from 'react';
import '../../HomePage/Photo-content/PhotoContent.css'
import boy1 from '../../../Images/boyImage1.png'
import boy2 from '../../../Images/boyImage2.png'
import girl1 from '../../../Images/girlImage1.png'
import girl2 from '../../../Images/girlImage2.png'
import girl3 from '../../../Images/girlImage3.png'
import girl4 from '../../../Images/girlImage4.png'

const PhotoContent = () => {
    return (
        <div className='main-content'>
            <div className="p-container">
                <div className="g1">
                    <img src={girl1} alt="" />
                </div>
                <div className="g-2">
                    <img src={girl2} alt="" />
                </div>
                <div className="imgg-3">
                    <img src={girl3} alt="" />
                </div>
                <div className="b-1">
                    <img src={boy1} alt="" />
                </div>
                <div className="g-4">
                    <img src={girl4} alt="" />
                </div>
                <div className="b2">
                    <img src={boy2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PhotoContent;