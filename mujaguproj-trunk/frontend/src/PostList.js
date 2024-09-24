// PostList.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [comment, setComment] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/')
            .then(response => setPosts(response.data))
            .catch(error => console.error("Error fetching posts", error));
    }, []);

    const handleLike = (postId) => {
        axios.post(`http://localhost:8000/api/posts/${postId}/like/`)
            .then(() => {
                const updatedPosts = posts.map(post =>
                    post.id === postId ? { ...post, likes_count: post.likes_count + 1 } : post
                );
                setPosts(updatedPosts);
            })
            .catch(error => console.error("Error liking post", error));
    };

    const handleBookmark = (postId) => {
        axios.post(`http://localhost:8000/api/posts/${postId}/bookmark/`)
            .then(() => {
                console.log(`Bookmarked post with ID: ${postId}`);
            })
            .catch(error => console.error("Error bookmarking post", error));
    };

    const handleComment = (postId) => {
        axios.post(`http://localhost:8000/api/posts/${postId}/comment/`, { content: comment })
            .then(response => {
                setComment(''); // Clear the comment input
                navigate(`/post/${postId}`);
            })
            .catch(error => console.error("Error commenting on post", error));
    };

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    return (
        <div className="posts-list">
            {posts.map(post => (
                <div key={post.id} className="post-item" onClick={() => handlePostClick(post.id)}>
                    <h2>{post.author}</h2>
                    <p>{post.job_description.substring(0, 100)}</p>
                    {post.image ? (<p><img src={post.image} alt='image'/></p>) : ('')}
                    <p><small>Posted on {new Date(post.created_at).toLocaleDateString()}</small></p>
                    <div className="post-actions">
                        <button onClick={(e) => { e.stopPropagation(); handleLike(post.id); }}>Like ({post.likes_count})</button>
                        <button onClick={(e) => { e.stopPropagation(); handleBookmark(post.id); }}>Bookmark</button>
                        <input 
                            type="text" 
                            value={comment} 
                            onClick={(e) => e.stopPropagation()} 
                            onChange={e => setComment(e.target.value)} 
                            placeholder="Add a comment..." 
                        />
                        <button onClick={(e) => { e.stopPropagation(); handleComment(post.id); }}>Comment</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;
