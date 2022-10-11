import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizShow from '../QuizShow/QuizShow';

const Quiz = () => {
    const loaderData = useLoaderData();
   const  questions = loaderData.data
    return (
        <div>
           {
            questions.map(question => <QuizShow
            key={question.id}
            question = {question}
            ></QuizShow>)
           }
        </div>
    );
};

export default Quiz;