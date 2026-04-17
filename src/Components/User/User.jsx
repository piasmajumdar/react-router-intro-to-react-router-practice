import React, { useState } from 'react';
import './User.css'
import { Link, Navigate } from 'react-router';

const User = ({ user }) => {
    const [showUserName, setShowUserName] = useState(false)
    const [visitHome, setVisitHome] = useState(false);

    // console.log(user)

    if (visitHome) {
        return <Navigate to={'/'}></Navigate>
    }


    return (
        <div className='user-card'>
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link to={`/users/${user.id}`}>Show Details</Link>
            <button onClick={() => setShowUserName(!showUserName)}>{showUserName ? 'Hide username' : 'Show username'}</button>
            {
                showUserName && <div>
                    <p>Username: {user.username}</p>
                </div>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;