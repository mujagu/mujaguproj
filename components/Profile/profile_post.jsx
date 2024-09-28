"use client"

import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import useAxios from "@utils/useAxios"

const profile_post = () => {

    const [posts, setPosts] = useState([]);
  const api = useAxios();

  const getPosts = async () => {
    try {
      const response = await api.get('/posts/');
      setPosts(response.data);
      console.log(response.data);
  } catch (error) {
      console.error('Error fetching posts:', error);
  }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    {posts.map((post) => {
      return (
        <div className='flex flex-col gap-5 mb-2'>
          < Posts
            key={post.id}
            post={post}
          />
        </div>
      )
    })}
    </>
  )
}

export default profile_post