"use client";

import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const CreateProject = () => {
  const api = useAxios();
  const [res, setRes] = useState("");
  const [projects, setProjects] = useState([]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    project_title: "",
    category: "",
    cover_image: "",
    upload_images: "",
    description: "",
    service_title: "",
    short_description: "",
    delivery_time: "",
    revision_number: "",
    features: "",
    price: "",
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
      if (formData.cover_image) {
        form.append("cover_image", formData.cover_image);
      }
      if (formData.image_mult) {
        form.append("upload_images", formData.image_mult);
      }
      console.log("FormData before submission:", Object.fromEntries(form));
  
      try {
        await api.post("/project/", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // Refresh posts after posting
        const response = await api.get("/project/");
        setProjects(response.data);
  
        router.push('#?added=true');
        // Project.close();
  
        // Clear form
        setFormData({
          project_title: "",
          category: "",
          cover_image: "",
          upload_images: "",
          description: "",
          service_title: "",
          short_description: "",
          delivery_time: "",
          revision_number: "",
          features: "",
          price: "",
        });
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };

    const ref = useRef < HTMLFormElement > null;
    const fileInputRef = useRef(null);
  
  return (
    <div className="flex justify-center py-4">
      <form onSubmit={handleSubmit} className="px-[5px]">
        <h1 className='font-bold'>Add New Project</h1>
        <div className="flex justify-between gap-11">
          <div className="flex-1 flex flex-col justify-between gap-4 ">
            <label className="text-[15px]" htmlFor="">Title</label>
            <input className='focus:border-[#DC2DFF] border px-1'
              type="text"
              name="project_title"
              placeholder="e.g I will do something I'm really good at"
              value={formData.project_title}
              onChange={handleChange}
            />
            <label className="text-[15px]" htmlFor="">Category</label>
            <select name="category" value={formData.category}
              onChange={handleChange}>
              <option></option>
              <option value="Design">Design</option>
              <option value="web">Web Development</option>
              <option value="Animation">Animation</option>
              <option value="Logo Design">Logo Design</option>
            </select>
            <label className="text-[15px]" htmlFor="">Cover Image</label>
            <input type="file" name="cover_image" accept="image/*" onChange={handleChange}/>
            <label className="text-[15px]" htmlFor="">Upload Images</label>
            <input type="file" multiple name="upload_images" accept="image/*" onChange={handleChange}/>
            <label className="text-[15px]" htmlFor="">Description</label>
            <textarea className='focus:border-[#DC2DFF] border px-1' placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="10" name="description" value={formData.description}
              onChange={handleChange}></textarea>
            <button className='w-5/6 hover:bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] py-1 border border-[#74767e] px-5 text-[#6c6d75] hover:text-white transition-all duration-300 text-lg rounded font-bold'>Create</button>
          </div>
          <div className="flex-1 flex flex-col justify-between gap-1">
            <label className="text-[15px]" htmlFor="">Service Title</label>
            <input className='focus:border-[#DC2DFF] border px-1' name="service_title" type="text" placeholder="e.g. One-page web design" value={formData.service_title}
              onChange={handleChange}/>
            <label className="text-[15px]" htmlFor="">Short Description</label>
            <textarea className='focus:border-[#DC2DFF] border px-1' name="short_description" id="" placeholder="Short description of your service" cols="10" rows="10" value={formData.short_description}
              onChange={handleChange}></textarea>
            <label className="text-[15px]" htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" name="delivery_time" value={formData.delivery_time}
              onChange={handleChange}/>
            <label className="text-[15px]" htmlFor="">Revision Number</label>
            <input type="number" name="revision_number" value={formData.revision_number}
              onChange={handleChange}/>
            <label className="text-[15px]" htmlFor="">Add Features</label>
            <input className='focus:border-[#DC2DFF] border px-1' name="features" type="text" placeholder="e.g. page design" value={formData.features}
              onChange={handleChange}/>
            <label className="text-[15px]" htmlFor="">Price</label>
            <input className='focus:border-[#DC2DFF] border px-1' name="price" type="number" placeholder='Ugx'value={formData.price}
              onChange={handleChange}/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateProject