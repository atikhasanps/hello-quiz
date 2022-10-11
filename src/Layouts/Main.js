import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Topics from '../components/Topics/Topics';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;