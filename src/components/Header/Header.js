import React from 'react';

const Header = () => {
    return (
        <div className='grid grid-cols-2 align-center justify-between  py-2'>
            <div className=' '>
            <img src='https://img.freepik.com/premium-vector/quiz-time-megaphone-yellow-banner-3d-style-illustration_123447-821.jpg?w=2000' alt='' className='w-2/4 h-40 ml-16'></img>
        </div>
        <div>
            <div className='mr-8'>
                    <h2 className='font-bold mt-8 mb-8'> Welcome to Our Quiz Show </h2>
                    <p>


                   
                    Hello Quiz is an online quiz maker that has crafted thousands of creative quizzes that will have you coming back for more. We have quizzes on your favourite topics from TV shows, movies, sports, trivia and more.</p>
            </div>
        </div>
        </div>
    );
};

export default Header;