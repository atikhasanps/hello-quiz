import React from 'react';

const QuizShow = ({quiz}) => {
    const{question,id,options } = quiz
    return (
        <div className='w-1/2 mx-auto mt-12 bg-orange-400 rounded-2xl'>
            <div className=''>
                <h2 className='text-2xl py-4 w-3/4 mx-auto'>Quiz: {question}</h2>
                <div className='grid grid-cols-2 w-3/4 mx-auto pb-4'>
                <div><p className='border border-solid border-2 border-slate-400 rounded-lg p-4'>{options[0]}</p></div>
                <div><p className='border border-solid border-2 border-slate-400 rounded-lg p-4'>{options[1]}</p></div>
                <div><p className='border border-solid border-2 border-slate-400 rounded-lg p-4'>{options[2]}</p></div>
                <div><p className='border border-solid border-2 border-slate-400 rounded-lg p-4'>{options[3]}</p></div>
                </div>
            </div>
        </div>
    );
};

export default QuizShow;