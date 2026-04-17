import React, { use } from 'react';
import { useNavigate } from 'react-router';

const PostInfo = ({postPromise}) => {

    const post = use(postPromise);
    // console.log(post)

    const navigate = useNavigate()

    return (
        <div>
            <h3>Post title: {post.title}</h3>
            <p>id: {post.id}</p>
            <p>Post Details: {post.body}</p>

            <button onClick={()=> navigate(-1)}>Go back</button>

        </div>
    );
};

export default PostInfo;<h3>Post info</h3>