import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './QuizPage.css'

const QuizPage = () => {
  const quizData = useLoaderData()
  console.log(quizData.data)
  const {questions} = quizData.data
  //console.log(questions)
  //console.log(questions)
  //const {question,options,id,correctAnswer  } =questions
  
  return (
    <div >
      <div className='quiz-name'>
      <h2 >Quiz for {quizData.data.name}</h2>
      </div>
      {
        questions.map(q => <Questions key={q.id} q={q} ></Questions>)
      }
    </div>
  );
};

export default QuizPage;