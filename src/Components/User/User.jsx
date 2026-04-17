import React from 'react';
import './User.css'
import { Link } from 'react-router';

const User = ({user}) => {

    // console.log(user)

    return (
        <div className='user-card'>
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link to={`/users/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;