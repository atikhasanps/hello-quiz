import React, { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';

import  './QuizShow.css'




const QuizShow = ({quiz, quizTopic}) => {
    const{question,options,name, id ,correctAnswer} = quiz
   
    // console.log(id)




  const  handleRadioButton =(event)=>{
         
   
      

         if(options === correctAnswer){
            alert('Answer is right')
         } else{
            alert('Answer is wrong')
         }
    }

    
            const [modal, setModal] = useState(false)
            const toggleModal=()=>{
                setModal(!modal)
                
            }
     
    return (

            

                    
            <div>

                      

                <div className='w-1/2 mx-auto mt-12 mb-12 bg-orange-400 rounded-2xl'>
                            
                            <div className=''>

                                <div className='flex justify-between'>
                                        <div>
                                        <h2 className='text-2xl py-4 w-3/4 mx-auto'>Quiz: {question}</h2>
                                        </div>
                                        <div className='font-bold text-4xl mr-3 mt-2'>
                                            <button className='btn-modal' onClick={toggleModal}><AiFillEye></AiFillEye></button></div>
                                </div>
                                    
                                <div className='grid grid-cols-2 gap-4 w-3/4 mx-auto pb-4'>

                                <div className='border border-solid border-2 border-slate-400 rounded-lg p-4'><input className='rounded-full border-2 w-6 h-6 ' type="radio" name="fgf" onClick={(event)=>handleRadioButton()} /> <label   id="option">{options[0]}</label></div>

                                
                                <div className='border border-solid border-2 border-slate-400 rounded-lg p-4'><input className='rounded-full border-2 w-6 h-6 ' type="radio" name="fgf"  onClick={(event)=>handleRadioButton()}/> <label id="option">{options[1]}</label></div>

                                <div className='border border-solid border-2 border-slate-400 rounded-lg p-4'><input className='rounded-full border-2 w-6 h-6 ' type="radio" name="fgf"  onClick={(event)=>handleRadioButton()}/> <label id="option">{options[2]}</label></div>
                                   

                                <div className='border border-solid border-2 border-slate-400 rounded-lg p-4'><input className='rounded-full border-2 w-6 h-6 ' type="radio" name="fgf"  onClick={(event)=>handleRadioButton()}/> <label id="option">{options[3]}</label></div>

                               
                               
                               
                            
                            {modal &&(

                                    <div className='modal'>

                                    <div onClick={toggleModal} className='overlay'></div>
                                    <div className='modal-content '>
                                        <h2 className='mt-10'>Correct Answer:-</h2>
                                        <h3 className='mb-10'>{correctAnswer}</h3>
                                        <button className='close-modal' onClick={toggleModal}>CLOSE</button>
                                    </div>
                                    </div>
                                                                
                                 )}



                            </div>
                        </div>

               </div>
            </div>

 

                //------ modal -----//

                
        
    );
};

export default QuizShow ; 