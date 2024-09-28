"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

// import { Link } from "react-router-dom";

const GigCard = ({ project }) => {

  return (
    <Link href={`/explore/${project.id}`}  className="link">
      <div className="h-[400px] bg-[#efeff3] mb-2 rounded-[9px] mt-2">
        <img src={project.cover_image} width={96} height={96} alt="cover_image" className="object-cover h-[50%] w-full" />
        <div className="p-[10px_20px] flex flex-col gap-5">
          <div className="flex items-center gap-[10px]">
            <Image src="/img_rectangle_27_94x96.png" width={26} height={26} alt="" className="object-cover border-r-[50%] rounded-full"/>
            <span>{project.author.username}</span>
          </div>
          <p className="text-black text-xs">{project.short_description}</p>
          <div className="flex items-center gap-3 justify-between">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer ${
                  Math.ceil() >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-yellow-500">3</span>
          <span className="text-[#27272a]">{project.delivery_time}days</span>
        </div>
        </div>
        <hr />
        <div className="p-[10px_10px] flex items-center justify-between gap-2">
          <div>
            <h2 className="text-black text-end">
              From:
            </h2>
          </div>
          <div>
            <h2>Shs {project.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;