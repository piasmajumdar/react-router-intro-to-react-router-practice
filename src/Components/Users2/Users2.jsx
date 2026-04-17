import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({ usersPromise }) => {

    const users = use(usersPromise);
    // console.log(users);

    return (
        <div>
            <h3>Users 2 file</h3>
            <section>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </section>
        </div>
    );
};

export default Users2;