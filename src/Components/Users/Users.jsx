import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();
    // console.log(users);

    return (
        <div>
            <h3>All the users are here.</h3>
            <section>
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </section>
        </div>
    );
};

export default Users;