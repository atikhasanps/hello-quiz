import React from 'react';

const Header = () => {
    return (
        <div className='grid grid-cols-2 border-solid border-2 border-indigo-500 align-center justify-between py-2'>
            <div className=' '>
            <img src='https://img.freepik.com/premium-vector/quiz-time-megaphone-yellow-banner-3d-style-illustration_123447-821.jpg?w=2000' alt='' className='w-2/4 h-60'></img>
        </div>
        <div>
            <p> WElcome to Our Quiz </p>
        </div>
        </div>
    );
};

export default Header;