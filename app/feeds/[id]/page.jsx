"use client";

import React, { useEffect, useState } from "react";
import LeftSidebar from "@/components/Dashboard/LeftSidebar";
import JobDetails from "@/components/Feeds/JobDetails";
import RightSidebar from '@/components/Dashboard/RightSidebar'
import RootLayout from "@app/dashboard/layout";
import useAxios from "@utils/useAxios";

const page = ({ params }) => {
  const [jobs, setJobs] = useState([]);
  const { id } = params;
  const api = useAxios();

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await api.get(`/jobs/${id}/`);
          setJobs(Array.isArray(response.data) ? response.data : [response.data]);
          console.log(response.data)
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };

      fetchJobs();
    }, [id]);


  return (
    <RootLayout>
      <div className="flex gap-6 pt-[120px]">
        <div className="hidden xl:block w-[20%]">
          <LeftSidebar type="home" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col rounded-xl my-2 border-l-[0.5px] border-[0.5px] border-[#DC2DFF] bg-[#FFFFFF]">
              {jobs.map((job) => {
                return <JobDetails key={job.id} job={job} />;
              })}
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightSidebar />
        </div>
      </div>
    </RootLayout>
  );
};

export default page;
