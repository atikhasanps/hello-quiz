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
            <div className='lg:px-28 lg:py-4 mx-auto mb-16'>
         
         <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:gap-10 sm:gap-5 '>
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