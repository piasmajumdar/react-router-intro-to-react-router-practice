import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router';
import './Root.css';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className='root-main'>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Root;