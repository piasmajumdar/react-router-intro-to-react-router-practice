import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet, useNavigation } from 'react-router';
import './Root.css';

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)
    return (
        <div>
            <Navbar></Navbar>
            <section className='root-main'>
                <Sidebar></Sidebar>
                {
                    isNavigating ? <h3>Loading....</h3> : <Outlet></Outlet>
                }
            </section>
        </div>
    );
};

export default Root;