import React, {useState} from 'react';
import './Faq.css'
;
import SingleQuestions from './singleQuestion';
import data from './data';

const Faq = () => {
    const [questions, setQuestions] = useState(data);
    return (
        <div className='faq-main'>
            <div className="faq-head">
                <span>faq</span>
                <p>Frequently Asked Questions</p>
            </div>
            <div className="faq-content">
                
            </div>
        </div>
    );
};

export default Faq;