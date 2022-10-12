import React from 'react';
import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'

const Questions = ({q}) => {
 // console.log(q)
  const {question,options,id,correctAnswer  } =q

  return (
    <div className='question-box'>
     <div className='question-part'>
       <h4>{question}</h4>
      
       <button onClick={()=>{toast(correctAnswer)}}> <FontAwesomeIcon icon={faEye} /></button>
      
     </div>
     <div className='options'>
        <button onClick={()=>{options[0]===correctAnswer?toast("Correct Answer!"):toast("Wrong Answer")}}>{options[0]}</button>
        
        <button onClick={()=>{options[1]===correctAnswer?toast("Correct Answer!"):toast("Wrong Answer")}}>{options[1]}</button>
       
        <button onClick={()=>{options[2]===correctAnswer?toast("Correct Answer!"):toast("Wrong Answer")}}>{options[2]}</button>
      
        <button onClick={()=>{options[3]===correctAnswer?toast("Correct Answer!"):toast("Wrong Answer")}}>{options[3]?options[3]:"No Option"}</button>
        
     </div>
     <ToastContainer />
    </div>
  );
};

export default Questions;