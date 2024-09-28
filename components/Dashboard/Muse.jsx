"use client";

import Cookie from "js-cookie";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import { useState, Component } from "react";
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";

export const Muse = () => {
    const [muse, setMuses] = useState([]);
    const api = useAxios();

    const video = useRef<HTMLVideoElement>(null)
        useEffect(() => {
            video.current?.play()
  })

  const getMuse = async () => {
    try {
      const response = await api.get('/muse/');
      setMuses(response.data);
      console.log(response.data);
  } catch (error) {
      console.error('Error fetching posts:', error);
  }
  };

  useEffect(() => {
    getMuse();
  }, []);
//<main className="flex h-full min-h-screen flex-col ">
  return (
    <>
    {muse.map(muses => (
        <main className="flex h-full flex-col ">  
    <div className='mt-2.5 flex border-[#DC2DFF] border-[0.5px] rounded-xl p-1'>
        <div className="relative min-h-[480px] max-h-[580px] flex items-center bg-black rounded-xl">
            <video src={ muses.video} loop muted controls  className='object-cover h-full mx-auto rounded-lg aspect-[3/4]'></video>
            <Image src="/img_exercise.png" width={40} height={40} className="absolute w-10 h-10 rounded-full right-12 bottom-14 mr-3"/>
        </div>
    </div>
    
    <div className='relative '>
        <div className='absolute bottom-0  right-5'>
            <div className='pb-4 text-center'>
                <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                    <Image src="/Favorite.png" width={25} height={25} size="25"/>
                </div>
                <span class="text-xs text-white font-semibold">43</span>
            </div>
            <div className='pb-4 text-center'>
                <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                    <Image src="/SpeechBubble1.png" width={25} height={25} size="25"/>
                </div>
                <span class="text-xs text-white font-semibold">43</span>
            </div>
            <div className='pb-4 text-center'>
                <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                    <Image src="/Bookmark1.png" width={25} height={25} size="25"/>
                </div>
                <span class="text-xs text-white font-semibold">43</span>
            </div>
            <div className='pb-4 text-center'>
                <div class="rounded-full bg-gray-200 p-2 cursor-pointer">
                    <Image src="/Share1.png" width={25} height={25} size="25"/>
                </div>
                <span class="text-xs text-gray-800 font-semibold">43</span>
            </div>
        </div>
    </div>

    <div className='relative'>
        <div className='absolute bottom-0 left-1 mb-9'>
            <div className='flex flex-row pl-4 align-center'>
                <Image src="/img_rectangle_27_94x96.png" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full"/>
                <div className='pt-[10px]'>
                    <span className='font-medium text-white px-4'>{muses.author.username}</span>
                    <button className='bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] p-1 rounded-full text-white w-[120px] h-8 text-center pb-4'>Hire</button>
                </div>
                
            </div>
            <p className='text-white pl-[80px] pr-[50px] pb-11'>{muses.caption}</p>
        </div>
    </div>
    </main>
    ))}
    </>
  )
}

export default Muse