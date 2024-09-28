"use client";

import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const PostJob = () => {
  const api = useAxios();
  const [jobs, setJobs] = useState([]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    job_title: "",
    job_description: "",
    business_name: "",
    tag: "",
    apply_type: "",
    salary_type: "",
    experience: "",
    category: "",
    qualification: "",
    apply_email: "",
    min_salary: "",
    application_deadline: "",
    job_type: "",
    gender: "",
    apply_url: "",
    max_salary: "",
    career_level: "",
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });
    console.log("FormData before submission:", Object.fromEntries(form));

    try {
      await api.post("/jobs/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Refresh posts after posting
      const response = await api.get("/jobs/");
      setJobs(response.data);

      router.push('#?added=true');
      // PostJob.close();

      // Clear form
      setFormData({
        job_title: "",
        job_description: "",
        business_name: "",
        tag: "",
        apply_type: "",
        salary_type: "",
        experience: "",
        category: "",
        qualification: "",
        apply_email: "",
        min_salary: "",
        application_deadline: "",
        job_type: "",
        gender: "",
        apply_url: "",
        max_salary: "",
        career_level: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex justify-center py-6">
      <form onSubmit={handleSubmit} className="px-[30px]">
        <h1 className="text-[23px] font-semibold">Post a New Job</h1>
        <div>
          <div className="">
            <label className="text-[15px] py-2" htmlFor="job_title">
              Job Title
            </label>
            <br />
            <input
              className="focus:border-[#DC2DFF] border px-1 placeholder:text-semibold_text-[13px]_text-gray-400"
              type="text"
              placeholder="Job title"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="py-2">
            <label className="text-[15px] py-2" htmlFor="job_description">
              Job Description
            </label>
            <br />
            <textarea
              className="focus:border-[#DC2DFF] border px-1"
              placeholder="Short description of your service"
              name="job_description"
              onChange={handleChange}
              value={formData.job_description}
              cols="40"
              rows="2"
              required
            ></textarea>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <div className="flex-1 flex flex-col justify-between gap-4">
            <label className="text-[15px]" htmlFor="">
              Company or Business Name
            </label>
            <input
              className="focus:border-[#DC2DFF] border px-1"
              type="text"
              placeholder="Business Name"
              name="business_name"
              onChange={handleChange}
              value={formData.business_name}
            />
            <label className="text-[15px]" htmlFor="tag">
              Tag
            </label>
            <input
              className="border"
              type="text"
              name="tag"
              onChange={handleChange}
              value={formData.tag}
            />
            <label className="text-[15px]" htmlFor="apply_type">
              Job Apply Type
            </label>
            <select
              name="apply_type"
              value={formData.apply_type}
              onChange={handleChange}
            >
              <option></option>
              <option value="external">External URL</option>
              <option value="with_email">By Email</option>
              <option value="call">Call To Apply</option>
            </select>
            <label className="text-[15px]" htmlFor="salary_type">
              Salary Type
            </label>
            <select
              name="salary_type"
              value={formData.salary_type}
              onChange={handleChange}
            >
              <option></option>
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="daily">Daily</option>
              <option value="hourly">Hourly</option>
              <option value="yearly">Yearly</option>
            </select>
            <label className="text-[15px]" htmlFor="experience">
              Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            >
              <option></option>
              <option value="Fresh">Fresh</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Year">2 Year</option>
              <option value="3 Year">3 Year</option>
              <option value="4 Year">4 Year</option>
              <option value="5 Year">5 Year</option>
              <option value="6 Year">6 Year</option>
              <option value="7 Year">7 Year</option>
              <option value="8 Year">8 Year</option>
              <option value="9 Year">9 Year</option>
              <option value="10 Year">10 Year</option>
              <option value="11 Year">11 Year</option>
              <option value="12 Year">12 Year</option>
              <option value="13 Year">13 Year</option>
              <option value="14 Year">14 Year</option>
              <option value="15 Year">15 Year</option>
              <option value="16 Year">16 Year</option>
              <option value="17 Year">17 Year</option>
              <option value="18 Year">18 Year</option>
              <option value="19 Year">19 Year</option>
              <option value="20 Year ">20 Year</option>
              <option value="20+">20+</option>
            </select>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-4">
            <label className="text-[15px]" htmlFor="category">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option></option>
              <option value="Accounting / Finance">Accounting / Finance</option>
              <option value="Administration">Administration</option>
              <option value="Administration department">
                Administration department
              </option>
              <option value="Agriculture">Agriculture</option>
              <option value="Automotive Jobs">Automotive Jobs</option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Catering Department">Catering Department</option>
              <option value="Children Care and Management">
                Children Care and Management
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Climate and Energy">Climate and Energy</option>
              <option value="Commercial Banking Department">
                Commercial Banking Department
              </option>
              <option value="Communications">Communications</option>
              <option value="Community and Social Services">
                Community and Social Services
              </option>
              <option value="Consultancy Services">Consultancy Services</option>
              <option value="Content Writing">Content Writing</option>
              <option value="Counselling">Counselling</option>
              <option value="Customer">Customer</option>
              <option value="Customer Care">Customer Care</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Data Management">Data Management</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Information and Technology">
                Information and Technology
              </option>
              <option value="Driving">Driving</option>
              <option value="Editorial">Editorial</option>
              <option value="Education">Education</option>
              <option value="Electrical Engineering Department">
                Electrical Engineering Department
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Environment Management">
                Environment Management
              </option>
              <option value="Estate Management">Estate Management</option>
              <option value="Field Activities">Field Activities</option>
              <option value="Field Operations Activities">
                Field Operations Activities
              </option>
              <option value="Food Science and Technology">
                Food Science and Technology
              </option>
              <option value="Food Security and Management">
                Food Security and Management
              </option>
              <option value="Gender Equality and Disability">
                Gender Equality and Disability
              </option>
              <option value="Graduate Training">Graduate Training</option>
              <option value="Internship">Internship</option>
              <option value="Internship and Volunteer">
                Internship and Volunteer
              </option>
              <option value="IT Support and Management">
                IT Support and Management
              </option>
              <option value="IT Systems in the Audit Department">
                IT Systems in the Audit Department
              </option>
              <option value="Kampala Uganda">Kampala Uganda</option>
              <option value="Law and Legal">Law and Legal</option>
              <option value="Legal">Legal</option>
              <option value="Library and Information Management">
                Library and Information Management
              </option>
              <option value="Machine Operation">Machine Operation</option>
              <option value="Management">Management</option>
              <option value="Marketing">Marketing</option>
              <option value="Marketing and Sales">Marketing and Sales</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Media and Publication">
                Media and Publication
              </option>
              <option value="Monitoring and Evaluation">
                Monitoring and Evaluation
              </option>
              <option value="Natural Resources Management">
                Natural Resources Management
              </option>
              <option value="Non-Profit Activities">
                Non-Profit Activities
              </option>
              <option value="Plant Management">Plant Management</option>
              <option value="Procurement & Logistics">
                Procurement & Logistics
              </option>
              <option value="Project Management">Project Management</option>
              <option value="Public Relations">Public Relations</option>
              <option value="Publications and Media">
                Publications and Media
              </option>
              <option value="Quantity Surveying">Quantity Surveying</option>
              <option value="Research">Research</option>
              <option value="Risk Department">Risk Department</option>
              <option value="Saloon Skills">Saloon Skills</option>
              <option value="Sanitation">Sanitation</option>
              <option value="Security">Security</option>
              <option value="Social Service">Social Service</option>
              <option value="Sports">Sports</option>
              <option value="Store Management">Store Management</option>
              <option value="Stores Management">Stores Management</option>
              <option value="Survey Engineering">Survey Engineering</option>
              <option value="Tender Jobs">Tender Jobs</option>
              <option value="Training">Training</option>
              <option value="Transportation and Management">
                Transportation and Management
              </option>
              <option value="Volunteer Programme">Volunteer Programme</option>
              <option value="Web Design">Web Design</option>
              <option value="Wildlife Management">Wildlife Management</option>
            </select>
            <label className="text-[15px]" htmlFor="qualification">
              Qualification
            </label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            >
              <option></option>
              <option value="Certificate">Certificate</option>
              <option value="Associate Degree">Diploma</option>
              <option value="Bachelor Degree">Bachelor Degree</option>
              <option value="Master’s Degree">Master’s Degree</option>
              <option value="Doctorate Degree">Doctorate Degree</option>
            </select>
            <label className="text-[15px]" htmlFor="emai">
              Job Apply Email
            </label>
            <input
              className="border"
              type="email"
              name="apply_email"
              placeholder="job apply email"
              onChange={handleChange}
              value={formData.apply_email}
            />
            <label className="text-[15px]" htmlFor="">
              Min. Salary
            </label>
            <input
              className="border"
              type="text"
              name="min_salary"
              placeholder="min job salary"
              onChange={handleChange}
              value={formData.min_salary}
            />
            <label className="text-[15px]" htmlFor="">
              Application Deadline Date
            </label>
            <input
              type="text"
              className="border"
              name="application_deadline"
              value={formData.application_deadline}
              onChange={handleChange}
              placeholder="YYY-DD-MM"
              data-datepicker='{"dateFormat":"MM d, yy","altField":"#application_deadline","altFormat":"yy-mm-dd"}'
            />
          </div>

          <div className="flex-1 flex flex-col justify-between gap-1">
            <label className="text-[15px]" htmlFor="job_type">
              Job Type
            </label>
            <select
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
            >
              <option></option>
              <option value="Freelance">Freelance</option>
              <option value="Full Time">Full Time</option>
              <option value="Internship">Internship</option>
              <option value="Part Time">Part Time</option>
              <option value="Temporary">Temporary</option>
            </select>
            <label className="text-[15px]" htmlFor="gender">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option></option>
              <option value="Both (Male &amp; Female)">
                Both (Male &amp; Female)
              </option>
              <option value="Female only">Female only</option>
              <option value="Male only">Male only</option>
            </select>
            <label className="text-[15px]" htmlFor="">
              External URL for Apply Job
            </label>
            <input
              className="border"
              type="text"
              name="apply_url"
              onChange={handleChange}
              value={formData.apply_url}
            />
            <label className="text-[15px]" htmlFor="max_salary">
              Max. Salary
            </label>
            <input
              className="focus:border-[#DC2DFF] border px-1 focus:outline-none"
              type="number"
              name="max_salary"
              placeholder="max job salary"
              onChange={handleChange}
              value={formData.max_salary}
            />
            <label className="text-[15px]" htmlFor="career_level">
              Career Level
            </label>
            <select
              name="career_level"
              value={formData.career_level}
              onChange={handleChange}
            >
              <option></option>
              <option value="Manager">Manager</option>
              <option value="Officer">Officer</option>
              <option value="Student">Student</option>
              <option value="Executive">Executive</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Others">Others</option>
            </select>
            <button
              type="submit"
              className="w-5/6 hover:bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] py-1 border border-[#74767e] px-5 text-[#6c6d75] hover:text-white transition-all duration-300 text-lg rounded font-bold"
            >
              Preview &amp; Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
