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
        <div className='p-main-content'>
            <div className="p-container">
                <div>
                    <img className="g-1" src={girl1} alt="" />
                </div>
                <div>
                    <img className="g-2" src={girl2} alt="" />
                </div>
                <div className="g-3">
                    <img src={girl3} alt="" />
                </div>
                <div>
                    <img className="b-1" src={boy1} alt="" />
                </div>
                <div>
                    <img className="g-4" src={girl4} alt="" />
                </div>
                <div>
                    <img className="b-2" src={boy2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PhotoContent;