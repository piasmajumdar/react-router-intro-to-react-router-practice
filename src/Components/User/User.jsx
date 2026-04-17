import React from 'react';
import './User.css'

const User = ({user}) => {

    // console.log(user)

    return (
        <div className='user-card'>
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <button>More Details</button>
        </div>
    );
};

export default User;