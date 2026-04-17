import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import './Posts.css';

const Posts = () => {

    const posts = useLoaderData()
    // console.log(posts)


    const navigate = useNavigate();

    return (
        <div>
            <h3>All the POSTS are here.</h3>

            {
                posts.map(post => {
                    const { id, title } = post;

                    return <div key={id} className='post-card'>
                        <h3>Title: {title}</h3>
                        <button onClick={()=> navigate(`/posts/${id}`)}>Details</button>
                    </div>
                })
            }
        </div>
    );
};

export default Posts;