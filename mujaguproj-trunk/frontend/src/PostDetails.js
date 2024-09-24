// PostDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}/`)
            .then(response => setPost(response.data))
            .catch(error => console.error("Error fetching post details", error));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className='post-item'>
            <h1>{post.author}</h1>
            <p>{post.job_description}</p>
            {post.image ? (<p><img src={post.image} alt='image'/></p>): ('')}
            <p>Likes ({post.likes_count})</p>
            <p><em>by {post.author}</em></p>
            <p><small>Posted on {new Date(post.created_at).toLocaleDateString()}</small></p>
            <h3>Comments</h3>
            {post.comments && post.comments.length > 0 ? (
                post.comments.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.content}</p>
                        <p><small>by {comment.user_name} on {new Date(comment.created_at).toLocaleDateString()}</small></p>
                    </div>
                ))
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
};

export default PostDetails;
