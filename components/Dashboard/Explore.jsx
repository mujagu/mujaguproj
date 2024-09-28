"use client";

import React, { useRef, useState, useEffect } from "react";
import GigsCard from "@/components/Feeds/GigsCard";
import useAxios from "@utils/useAxios"

const Explore = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  const api = useAxios();
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await api.get('/project/');
      setProjects(response.data);
      console.log(response.data);
  } catch (error) {
      console.error('Error fetching projects:', error);
  }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <>
    <div className="bg-[#FFFFFF] p-4 rounded-[9px] border-[0.5px] border-[#DC2DFF]">
      <div className="flex ">
        <div className="flex flex-col gap-4 p-[10px_0px] ">
          <div className="flex items-center justify-center mb-[20px]">
            <div className="relative flex items-center gap-2">
              <span className="font-light">Sort by</span>
              <span className="font-medium">
                {sort === "sales" ? "Best Selling" : "Newest"}
              </span>
              <img
                src="/img_chevron_down.png"
                alt="img"
                onClick={() => setOpen(!open)}
                className="w-3 cursor-pointer"
              />
              {open && (
                <div className="flex flex-col gap-[20px] p-5 rounded-[5px] absolute top-5 right-0 z-[9] bg-white">
                  {sort === "sales" ? (
                    <span onClick={() => reSort("createdAt")}>Newest</span>
                  ) : (
                    <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
                  <span onClick={() => reSort("Best Selling")}>Popular</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
      {projects.map((project) => {
        return (
          <GigsCard
        key={project.id}
        project={project}
        />
        )
      })}
      </div>
    </div>
    </>
    
  );
};

export default Explore;
