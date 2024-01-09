import React from 'react';
import '../Header/head.css'

const Head = () => {
    return (
        <div className='header'>
            <div className="h-left">
                <span>Stunning photography by</span>
                <h1>Dmein Braun</h1>
            </div>
            <div className="h-right">righ-side</div>
        </div>
    );
};

export default Head;