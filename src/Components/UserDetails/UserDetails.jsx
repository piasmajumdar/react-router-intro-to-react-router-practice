import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;

    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

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