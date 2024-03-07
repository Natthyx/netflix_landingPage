import React from "react";
import Button from './Button';
import questions from '../questions';
import InputArea from './InputArea';

function FAQ(){
    
    return(
      <div className="faq-section">
        <div className="FAQ">
        <h1>Frequently Asked Quesitons</h1>
        {questions.map(questionItem=>
        <Button  
          question = {questionItem.question}
          answer = {questionItem.answer}
        />
      )}
        </div>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <InputArea />
        </div>
    )
}


export default FAQ;