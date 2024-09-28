'use client'

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Services() {
  // const router = useRouter();
  const categories = [
    { name: "Graphic Design", logo: "/service-1.svg" },
    { name: "Digital Marketing", logo: "/service-2.svg" },
    { name: "Writing & Translation", logo: "/service-3.svg" },
    { name: "Video & Animation", logo: "/service-4.svg" },
    { name: "Music & Audio", logo: "/service-5.svg" },
    { name: "Programming & Tech", logo: "/service-6.svg" },
    { name: "Business", logo: "/service-7.svg" },
    { name: "Lifestyle", logo: "/service-8.svg" },
    { name: "Data", logo: "/service-9.svg" },
    { name: "Photography", logo: "/service-10.svg" },
  ];
  

  return (
    <div className="flex">
      <ul className="grid grid-cols-5 gap-0.5">
        {categories.map(({ name, logo }) => {
          return (
            <li
              key={name}
              className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl hover:border-[#D300FF]  border-2 border-transparent p-5 transition-all duration-500 text-[#404145]"
              onClick={() => router.push(`/search?category=${name}`)}
            >
              <Image src={logo} alt="category" height={50} width={50} />
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Services;
