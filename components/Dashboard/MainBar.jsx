"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Feeds from "@/components/Feeds/Feeds";
import Muse from '@/components/Dashboard/Muse'
import Link from "next/link";
import Cookie from "js-cookie";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

export const MainBar = () => {
  const [res, setRes] = useState("");
  const [preview, setPreview] = useState("");
  const api = useAxios();
  const token = Cookie.get("authTokens");
  const [activeSection, setActiveSection] = useState("FEEDS");

  if (token) {
    const decode = jwtDecode(token);
    var user_id = decode.user_id;
    var username = decode.username;
    var full_name = decode.full_name;
    var image = decode.image;
  }

  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    job_description: "",
    image: null,
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
    // e.preventDefault();

    const form = new FormData();
    form.append("job_description", formData.job_description);
    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      await api.post("/jobs/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Refresh posts after posting
      const response = await api.get("/jobs/");
      setPosts(response.data);
      // Clear form
      setFormData({
        job_description: "",
        image: null,
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const ref = useRef < HTMLFormElement > null;
  const fileInputRef = useRef(null);
  return (
    <main className="flex h-full min-h-screen flex-col">
      <div className="bg-[linear-gradient(90deg,#DD34FE,#0930D3)] rounded-full flex flex-row justify-between m-[0_0_10px_1px] p-[3px_0_3px_3px] h-[46px] ">
      <div
          className={`rounded-[20px] p-[9px_1.5px_9px_0] flex w-[504px] items-center justify-center cursor-pointer ${
            activeSection === "FEEDS" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setActiveSection("FEEDS")}
        >
          <span className="text-xl font-semibold backdrop-blur">Feed</span>
        </div>
        <div
          className={`rounded-r-[20px] p-[9px_1.5px_9px_0] flex w-[504px] items-center justify-center cursor-pointer text-black ${
            activeSection === "MUSE" ? "bg-[#FFFFFF] rounded-[20px]" : ""
          }`}
          onClick={() => setActiveSection("MUSE")}
        >
          <span className="text-xl font-semibold backdrop-blur ">
            Muse
          </span>
        </div>
      </div>

      <div className="border-t-[0.5px]  my-4 px-4 border-[0.5px] flex items-stretch py-6 space-x-2 border-[#DC2DFF] rounded-[9px]">
        <Image
          src="/img_rectangle_27_94x96.png"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
        {/* input */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex gap-4">
            <textarea
              name="job_description"
              value={formData.job_description}
              onChange={handleChange}
              placeholder="write a post"
              className="flex-1 bg-white border-[#DC2DFF] p-2 rounded-lg outline-none"
            ></textarea>
            <div className="flex flex-col">
              <input
                type="file"
                name="image"
                accept="image/*"
                hidden
                ref={fileInputRef}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
              >
                <Image
                  src="/Image.png"
                  width={20}
                  height={20}
                  className="w-5 h-5 self-end cursor-pointer"
                />
              </button>

              <button className="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] p-2 rounded-md text-white  disabled:bg-blue-300 disabled:cursor-not-allowed">
                Post
              </button>
              {/* {preview && (
                <div>
                  <img src={preview} alt="preview" className="w-full object-cover"/>
                </div>
              )} */}
              {/* {image && (
          <Image src={image} alt="" width={100} height={160} className="mt-10 h-40 w-full rounded-lg object-contain shadow-lg"/>
        )} */}
            </div>
          </form>
        </div>
        
      </div>

      {/* feeds */}
      {activeSection === "FEEDS" && <Feeds />}
      {activeSection === "MUSE" && <Muse />}

    </main>
  );
};

export default MainBar;
