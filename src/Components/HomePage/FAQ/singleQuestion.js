
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className='ques'>
            <header>
                <h4>{title}</h4>
                <button className='btn-f' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
                {showInfo && <p>{info}</p>}
        </div>
    );
};

export default SingleQuestion;