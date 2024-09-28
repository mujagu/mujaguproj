"use client";

import React from "react";
import Image from "next/image";
import Cookie from "js-cookie";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect, Component } from "react";
import TimeAgo from "javascript-time-ago";

const Post = ({ post }) => {
  const api = useAxios();
  const token = Cookie.get("authTokens");

  if (token) {
    const decode = jwtDecode(token);
    var user_id = decode.user_id;
    var user_email = decode.email;
    var username = decode.username;
  }

  return (
    <div className="flex flex-col gap-4 border-l-[0.5px] border-[0.5px] border-[#DC2DFF] p-4 bg-white shadow-md rounded-lg">
      {/* user */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/img_rectangle_27_94x96.png"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            alt="profile image"
          />
          <span className="font-light mr-1">
            {post.author.replace(/\s+/g, "").toLowerCase()}
          </span>
        </div>
        {/* <TimeAgo date={post.created_at} className="text-sm text-gray-500"/> */}
        {user_email != post.author && (
          <button className="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] p-2 rounded-md text-white ">
          Hire
        </button>
        )}
        
      </div>

      {/* post content */}
      <div className="flex flex-col gap-4">
        <p className="font-extralight text-[13px]">{post.job_description}</p>

        {post.image ? (
          <img
            src={post.image}
            alt="Post image"
            className="object-cover rounded-lg max-h-60 ml-0 m-5 mb-1 shadow-sm"
          />
        ) : (
          <div className="placeholder-image"></div>
        )}
      </div>

      {/* interaction */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex gap-8">
          <Image
            src="/Favorite.png"
            alt="favorite"
            width={20}
            height={20}
            className="object-contain cursor-pointer"
          />
        </div>
        <div className="flex gap-8">
          <Image
            src="/SpeechBubble1.png"
            alt="speech"
            width={20}
            height={20}
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

export default Post;
