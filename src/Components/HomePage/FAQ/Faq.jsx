import React, {useState} from 'react';
import './Faq.css'
;
import SingleQuestion from './SingleQuestion';
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
                <section>
                    {questions.map((question) => {
                        return(
                            <SingleQuestion key={question.id} {...question}/>
                        )
                    } 
                    )}
                </section>
                <section>
                    {questions.map((question) => {
                        return(
                            <SingleQuestion key={question.id} {...question}/>
                        )
                    } 
                    )}
                </section>
            </div>
        </div>
    );
};

export default Faq;