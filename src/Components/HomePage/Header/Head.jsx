import React from 'react';
import '../Header/head.css'
import arrow from '../../../Images/Arrow.png'

const Head = () => {
    return (
        <div className='header'>
            <div className="h-left">
                <span>Stunning photography by</span>
                <h1>Dmein Braun</h1>
            </div>
            <div className="h-right">
                <h1>Let's <button className='h-btn'><img src={arrow} alt="" /></button></h1>
                <h1>work together</h1>
                
            </div>
        </div>
    );
};

export default Head;