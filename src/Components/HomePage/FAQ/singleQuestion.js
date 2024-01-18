import './Faq.css'
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className='ques'>
            <div className='accordion-title' onClick={() => setShowInfo(!showInfo)}>
                <h4>{title}</h4>
                <span className='btn-f' >
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </span>
            </div>
                 <p className={`accordion-details ${showInfo ? 'show' : 'close'}`}>{info}</p>
        </div>
    );
};

export default SingleQuestion;