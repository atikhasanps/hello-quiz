import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <div className='shadow-lg w-full  top-0 left-0 px-10 py-7 flex items-center justify-between'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
            <h2>Hello Quiz</h2>
        </div>
        <div className=''>
            <nav className=''>
            
            <Link className='mr-10' to='/topics'>Topics</Link>
            <Link className='mr-10' to='/statistics'>Statistics</Link>
            <Link className='mr-10' to='/blog'>Blog</Link>
            </nav>
        </div>
       </div>
    );
};

export default Navbar;