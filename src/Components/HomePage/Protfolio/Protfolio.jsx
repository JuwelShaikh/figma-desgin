import React from 'react';
import '../Protfolio/Protfolio.css';
import leftIcon from '../../../Images/left-icon.png';
import rightIcon from '../../../Images/Right-icon.png';
import prot1 from '../../../Images/prot1.png';
import prot2 from '../../../Images/prot2.png';
import prot3 from '../../../Images/prot3.png';


const Protfolio = () => {
    return (
        <div className='main-prot'>
            <div className="protfolio">
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
            <div className="photos">
                <div className="card">
                    <img src={prot1} alt="" />
                    <div className="textContent">
                        <div>
                            <h3>Faces of Resilience</h3>
                            <p>March 2022</p>
                        </div>
                        <button>View product</button>
                    </div>
                </div>
                <div className="card">
                    <img src={prot2} alt="" />
                    <div className="textContent">
                        <div>
                            <h3>Wedding photo</h3>
                            <p>January 2021</p>
                        </div>
                        <button>View product</button>
                    </div>
                </div>
                <div className="card">
                    <img src={prot3} alt="" />
                    <div className="textContent">
                        <div>
                            <h3>Product shoot</h3>
                            <p>May 2023</p>
                        </div>
                        <button>View product</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Protfolio;