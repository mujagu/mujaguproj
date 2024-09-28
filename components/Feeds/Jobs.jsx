"use client";

import React from "react";
import Image from "next/image";
import Cookie from "js-cookie";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useState, useEffect, Component } from "react";
import TimeAgo from "javascript-time-ago";

const Jobs = ({ job }) => {
  const api = useAxios();
  const token = Cookie.get("authTokens");

  if (token) {
    const decode = jwtDecode(token);
    var user_id = decode.user_id;
    var user_email = decode.email;
    var username = decode.username;
  }

  return (
    
      <div className="flex flex-col gap-4 border-l-[0.5px] border-[0.5px] border-[#DC2DFF] p-4 bg-white shadow-md rounded-lg ">
        {/* user */}

        <div className="flex items-center justify-between">
        <Link href={`/profile/${user_id}`} className="link">
          <div className="flex items-center gap-4">
            <Image
              src="/img_rectangle_27_94x96.png"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
              alt="profile image"
            />
            <span className="font-light mr-1">{job.author.username}</span>
          </div>
          </Link>
          {/* <TimeAgo date={post.created_at} className="text-sm text-gray-500"/> */}
          {username != job.author.username && (
            <button className="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] p-2 rounded-md text-white ">
              Hire
            </button>
          )}
        </div>
        <Link href={`/feeds/${job.id}`} className="link">
        {/* post content */}
        <div className="flex flex-col gap-4 hover:bg-slate-200 rounded-lg">
          <h1>{job.job_title}</h1>
          <p className="text-[13px] pl-4">{job.job_description}</p>

          {job.image ? (
            <img
              src={job.image}
              alt="job image"
              className="object-cover rounded-lg max-h-60 ml-0 m-5 mb-1 shadow-sm"
            />
          ) : (
            <div className="placeholder-image"></div>
          )}
        </div>
        </Link>

        {/* interaction */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex gap-8">
            <Image
              src="/Favorite.png"
              width={20}
              height={20}
              alt="favorite"
              className="object-contain cursor-pointer"
            />
          </div>
          <div className="flex gap-8">
            <Image
              src="/SpeechBubble1.png"
              width={20}
              height={20}
              alt="speech"
              className="object-contain cursor-pointer"
            />
          </div>
          {/* <div className="flex gap-8">
          <Image
            src="/Letter.png"
            width={20}
            height={20}
            className="object-contain cursor-pointer"
          />
        </div> */}
          <div className="flex gap-8">
            <Image
              src="/Bookmark1.png"
              alt="bookmark"
              width={20}
              height={20}
              className="object-contain cursor-pointer"
            />
          </div>
          <div className="flex gap-8">
            <Image
              src="/Share1.png"
              alt="share"
              width={20}
              height={20}
              className="object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    
  );
};

export default Jobs;
