import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiztopics from '../Quiztopics/Quiztopics';

const Topics = () => {
    const loaderData = useLoaderData();  
 const quizTopics = loaderData.data;
    return (
        
        <div> 
            <Header></Header>
            <div className='px-28 py-4 mx-auto '>
         
         <div className='grid lg:grid-cols-4  '>
         {
            quizTopics.map(quizTopic => (<Quiztopics
            key={quizTopic.id}
            quizTopic={quizTopic}
           />))
        }
         </div>
    </div>
        </div>
    );
};

export default Topics;