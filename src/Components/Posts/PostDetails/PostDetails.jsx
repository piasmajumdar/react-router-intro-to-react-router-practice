import React, { Suspense } from 'react';
import { useParams } from 'react-router';
import PostInfo from './PostInfo';

const PostDetails = () => {
    const {postId} = useParams();
    // console.log(postId)
    const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json())

    return (
        <div>
            <h3>Post Details</h3>
            <Suspense fallback={<h3>Post Info is Loading...</h3>}>
                <PostInfo postPromise={postPromise}></PostInfo>
            </Suspense>
        </div>
    );
};

export default PostDetails;