import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <h2>This is Navbar.</h2>

            <nav className='nav-bar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/users2'>Users2</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;