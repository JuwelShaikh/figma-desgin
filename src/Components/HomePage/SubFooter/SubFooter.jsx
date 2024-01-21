import React from 'react';
import './SubFooter.css'
import a from '../../../Images/A.png';
import d from '../../../Images/D.png';
import m from '../../../Images/M.png';
import i from '../../../Images/I.png';
import e from '../../../Images/E.png';
import n from '../../../Images/N.png';
import SubContent from '../SubContainer/SubContent';

const SubFooter = () => {
    return (
        <div className='foo-Main'>
            <div className="foo-wraper">
                <img src={d} alt="" />
                <img src={a} alt="" />
                <img src={m} alt="" />
                <img src={i} alt="" />
                <img src={e} alt="" />
                <img src={n} alt="" />
            </div>
            <div className="scroll">
                <SubContent />
            </div>
        </div>
    );
};

export default SubFooter;