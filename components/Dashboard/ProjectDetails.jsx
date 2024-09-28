"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Reviews from "@/components/Project/Reviews";
import AddReview from "@/components/Project/AddReview";
import Rating from "@/components/Project/Rating";

const ProjectDetails = ({ project }) => {
  const baseURL = "http://localhost:8000";
  
  return (
    <div className="col-span-2 flex flex-col gap-1 p-4">
      <h2 className="text-2xl font-bold text-[#404145] mb-1">{project.project_title}</h2>
      <div className="flex items-center gap-2 ">
        <div>
          <Image
            src="/img_rectangle_27_94x96.png"
            alt="profile"
            height={30}
            width={30}
            className="rounded-full"
          />
        </div>
        <div className="flex gap-2 items-center">
          <h6 className="text-[#74767e]">{project.author.username}</h6>
        </div>
        <div className="flex items-center gap-9 ">
          <div className="flex">
          
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${
                  Math.ceil() >= star ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <Rating
                  value={project.rating}
                  text={`${project.Reviews} reviews`}
                  color={"#f8e825"}
                  className="text-yellow-500"
                />
          <span className="text-yellow-500">{project.Reviews}</span>
          <span className="text-[#27272a]">2 weeks</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <div className="max-h-[1000px] max-w-[1000px] overflow-hidden">
          <img
            src={`${baseURL}${project.cover_image}`}
            alt="Gig"
            height={1000}
            width={1000}
            className="hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>
      <div>
        <h3 className="text-3xl my-5 font-medium text-[#404145]">
          About this Project
        </h3>
        <div>
          <p>
            {project.description}
          </p>
        </div>
      </div>
      {/* About the seller */}
      <div className="">
        <h3 className="text-3xl my-5 font-medium text-[#404145]">
          About the Seller
        </h3>
        <div className="flex gap-4">
          <div>
            <Image
              src="/img_rectangle_27_94x96.png"
              alt="profile"
              height={120}
              width={120}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex  gap-2 items-center">
              {/* <h4 className="font-medium text-lg">Mujagu Group</h4> */}
              <span className="font-medium text-lg">{project.author.username}</span>
            </div>
            <div>
              <p>{project.short_description}</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      Math.ceil() >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-yellow-500">{project.Reviews}</span>
              <span className="text-[#74767e]">{project.rating}</span>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <AddReview />
    </div>
  );
};

export default ProjectDetails;
