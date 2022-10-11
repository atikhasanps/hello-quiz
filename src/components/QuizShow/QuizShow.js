import React from 'react';
import { Link } from 'react-router-dom';

const QuizShow = ({quiz}) => {
    const{question,id,options, name } = quiz 
    
    return (

            

                    
            <div className='w-1/2 mx-auto mt-12 bg-orange-400 rounded-2xl'>
                            
                            <div className=''>

                                <h2 className='text-2xl py-4 w-3/4 mx-auto'>Quiz: {question}</h2>

                                <div className='grid grid-cols-2 gap-4 w-3/4 mx-auto pb-4'>

                                <div className='border border-solid border-2 border-slate-400 rounded-lg p-4'><input className='rounded-full border-2 w-6 h-6 ' type="radio" name="fgf"/> <label>{options[0]}</label></div>

                                
                                <div className='border border-solid border-2 border-slate-400 rounded-lg p-4'><input className='rounded-full border-2 w-6 h-6 ' type="radio" name="fgf"/> <label>{options[1]}</label></div>

                                <div className='border border-solid border-2 border-slate-400 rounded-lg p-4'><input className='rounded-full border-2 w-6 h-6 ' type="radio" name="fgf"/> <label>{options[2]}</label></div>
                                   

                                <div className='border border-solid border-2 border-slate-400 rounded-lg p-4'><input className='rounded-full border-2 w-6 h-6 ' type="radio" name="fgf"/> <label>{options[3]}</label></div>

                               
                               


                            




                            </div>
                        </div>

               </div>
        
    );
};

export default QuizShow;