"use client"

import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Jobs from './Jobs';
import useAxios from "@utils/useAxios"

const Feed = () => {

  const [data, setData] = useState({ posts: [], jobs: [] });
  const api = useAxios();

  const getData = async () => {
    try {
      const postsResponse = await api.get('/posts/');
      const jobsResponse = await api.get('/jobs/');

      // Merge posts and jobs
      const mergedData = [
        postsResponse.data.map(post => ({ ...post, type: 'post' })),
        jobsResponse.data.map(job => ({ ...job, type: 'job' }))
      ];
      setData({ posts: postsResponse.data, jobs: jobsResponse.data });
      console.log(postsResponse.data);
      console.log(jobsResponse.data);
  } catch (error) {
      console.error('Error fetching posts:', error);
  }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
    {/* {data.posts.map((post) => {
      return (
        <div key={post.id} className='flex flex-col gap-5 mb-2'>
          < Posts
            
            post={post}
          />
        </div>
      )
    })} */}
    {data.jobs.map((job) => {
      return (
        <div key={job.id} className='flex flex-col gap-5 mb-2'>
          < Jobs
          
          job={job}
          />
        </div>
      )
    })}
    </>
  )
}

export default Feed