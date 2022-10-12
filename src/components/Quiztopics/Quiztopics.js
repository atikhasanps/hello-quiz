import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Quiztopics = ({quizTopic}) => {
    
  const {logo, name,id} = quizTopic


  
    return (
        <div className='bg-orange-400 rounded-lg'>
            <div className='  border-indigo-600 border-none w-64 mx-auto shadow shadow-cyan-500/50'>
            <div>
            <img src={logo} alt='' className=''></img>
            </div>
            <div className='flex justify-between mt-4 '>
            <p className='text-2xl font-bold text-white'>{name}</p>
            <a href={`../quizTopic/${id}`} className='p-2 mb-2 font-bold bg-white text-orange-400 hover:bg-orange-700 rounded'>Start Practice</a>
            </div>
            </div>
        </div>
    );
};

export default Quiztopics;