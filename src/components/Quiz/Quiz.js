import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizShow from '../QuizShow/QuizShow';


const Quiz = () => {
    const quizData = useLoaderData();
    
   const quizs =quizData.data.questions
    return (
        <div>
           {
            quizs.map(quiz=><QuizShow
            key ={quiz.id}
            quiz={quiz}
            ></QuizShow>)
           }
        </div>
    );
};

export default Quiz;