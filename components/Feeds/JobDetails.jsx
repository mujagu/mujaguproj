"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const JobDetails = ({ job }) => {
  const baseURL = "http://localhost:8000";
  return (
    <>
    <div className="col-span-2 flex flex-col gap-1 p-4">
      
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
          <h6 className="text-[#37383b]">{job.author.username}</h6>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <div className="max-h-[1000px] max-w-[1000px] overflow-hidden">
        {job.image ? (
          <img
            src={`${baseURL}${job.image}`}
            alt="job image"
            className="hover:scale-110 transition-all duration-500"
          />
        ) : (
          <div className="placeholder-image"></div>
        )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-[#404145] mb-1">{job.job_title}</h2>
      <p><strong>Job Description:</strong></p>
        <p className="font-extralight text-[13px]">{job.job_description}</p>
      </div>
      <div className="flex flex-col gap-2 mt-5">
          <h3 className="text-xl font-medium text-[#404145]">Application Details:</h3>
          <p><strong>Qualifications:</strong></p>
          <p className="font-extralight text-[13px]">{job.qualification}</p>
          <p><strong>Job Type:</strong> {job.job_type}</p>
          <p><strong>Salary Range:</strong> Shs{job.min_salary} - Shs{job.max_salary}</p>
          <p><strong>Experience Required:</strong> {job.experience}</p>
          <p><strong>Gender Preference:</strong> {job.gender}</p>
          <p><strong>Application Deadline:</strong> {job.application_deadline}</p>
          <p><strong>Contact Email:</strong> <a href={`mailto:${job.job_apply_email}`} className="text-blue-500">{job.job_apply_email}</a></p>
          <a href={job.external_url} className="mt-2 text-white bg-blue-600 hover:bg-blue-700 rounded py-2 px-4">
            Apply Now
          </a>
        </div>
    </div>
    </>
    
  )
}

export default JobDetails