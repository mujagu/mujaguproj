"use client";

import React, { useEffect, useState } from "react";
import LeftSidebar from "@/components/Dashboard/LeftSidebar";
import ProjectDetails from "@/components/Dashboard/ProjectDetails";
import ProPricing from "@/components/Dashboard/ProPricing";
import useAxios from "@utils/useAxios";

const page = ({ params }) => {
  const [projects, setProjects] = useState([]);
  const { id } = params;
  const api = useAxios();

    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await api.get(`/project/${id}/`);
          setProjects(Array.isArray(response.data) ? response.data : [response.data]);
          console.log(response.data)
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };

      fetchProjects();
    }, [id]);


  return (
    <>
      <div className="flex gap-6 pt-[120px]">
        <div className="hidden xl:block w-[20%]">
          <LeftSidebar type="home" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            {/* <Feed /> */}
            <div className="flex flex-col rounded-xl my-2 border-l-[0.5px] border-[0.5px] border-[#DC2DFF] bg-[#FFFFFF]">
              {projects.map((project) => {
                return <ProjectDetails key={project.id} project={project} />;
              })}
              {/* <ProjectDetails /> */}
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <ProPricing />
        </div>
      </div>
    </>
  );
};

export default page;
