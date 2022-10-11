import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Quiztopics = ({quizTopic}) => {
    
  const {logo, name,id} = quizTopic


  
    return (
        <div className=''>
            <div className='border-solid border-2  border-indigo-600 rounded-lg w-64 mx-auto shadow shadow-cyan-500/50'>
            <div>
            <img src={logo} alt='' className=''></img>
            </div>
            <div className='flex justify-between mt-4 '>
            <p className='text-2xl'>{name}</p>
            <a href={`../quizTopic/${id}`} className='p-2 bg-indigo-500 rounded'>Start Practice</a>
            </div>
            </div>
        </div>
    );
};

export default Quiztopics;