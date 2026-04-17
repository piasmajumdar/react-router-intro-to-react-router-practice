import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;

    const navigate = useNavigate();

    return (
        <div>
            <h3>User Details are here: </h3>

            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;