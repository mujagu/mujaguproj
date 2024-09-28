"use client"

import React, { useEffect, useState, useRef } from "react"
import { FiUploadCloud } from "react-icons/fi"
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import { GiBoxCutter } from "react-icons/gi"
import Image from "next/image";
import Cookie from "js-cookie";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const UploadVid = () => {
  const api = useAxios();
  const [res, setRes] = useState("");
  const [muse, setMuses] = useState([]);
  const router = useRouter();
  const ref = useRef < HTMLFormElement > null;
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    video: "",
    caption: "",
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
    if (formData.video) {
      form.append("video", formData.video);
    }
    console.log("FormData before submission:", Object.fromEntries(form));

    try {
      await api.post("/muse/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Refresh posts after posting
      const response = await api.get("/muse/");
      setMuses(response.data);

      router.push('#?added=true');
      // Project.close();

      // Clear form
      setFormData({
        video: "",
        caption: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex flex-col">
          <div>
            <div className="text-[23px] font-semibold">Upload a Muse</div>
            <div className="text-gray-400 mt-1">
              Post a muse to your account
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 md:flex gap-6">

              <label
                onDragOver={(e) => {
                  e.preventDefault() // Prevent default behavior on drag over
                }}
                onDragEnter={(e) => {
                  e.preventDefault()
                }}
                onDrop={(e) => {
                  e.preventDefault()
                  onDrop(e)
                  console.log("drop")
                }}
                htmlFor="fileInput"
                className="md:mx-0 mx-auto mt-2 mb-2 flex flex-col items-center justify-center w-full max-w-[260px] h-[370px] text-center p-2 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <FiUploadCloud size="30" color="#b3b3b1" />
                <div className="mt-4 text-[17px]">Select a video to upload</div>
                <div className="mt-1.5 text-gray-500 text-[13px]">
                  Or drag and drop a file
                </div>
                <div className="mt-5 text-gray-400 text-sm">MP4</div>
                <div className="mt-2 text-gray-400 text-[13px]">
                  Up to 30 minutes
                </div>
                <div className="mt-2 text-gray-400 text-[13px]">
                  Less than 1 GB
                </div>
                <div className="px-2 py-1.5 mt-8 text-white text-[15px] w-80% bg-[#F02C56] rounded-sm">
                  Select file
                </div>
                <input
                  type="file"
                  name="video"
                  id="fileInput"
                  className="hidden"
                  accept=".mp4"
                  ref={fileInputRef}
                  onChange={handleChange}
                />
              </label>
         
              <>
                <div className="md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[240px] p-3 rounded-2xl cursor-pointer relative">
                  <div className="bg-black h-full w-full" />
                  <Image src="/img_exercise.png" width={20} height={20}
                    className="absolute right-4 bottom-6 z-20"
                  />
                  <video
                    autoPlay
                    loop
                    muted
                    className="absolute rounded-xl object-cover z-10 p-[13px] w-full h-full"
                    src="/seavid.mp4" 
                  />
                  {/* <div className="absolute -bottom-12 flex items-center justify-between border-gray-300 w-full p-2 border rounded-xl z-50  ">
                    <div className="flex items-between truncate">
                      <IoCheckmarkDoneCircleOutline
                        size="16"
                        className="min-w-[16px]"
                      />
                      <div className="text-[11px] pl-1 truncate text-ellipsis">
                      <input className='focus:border-[#DC2DFF] border px-1 focus:outline-none' type="text" placeholder="filename" />
                      </div>
                    </div>
                    <button
                      className="text-[11px] ml-4 font-semibold"
                    >
                      Change
                    </button>
                  </div> */}
                </div>
                <div className="mt-4 mb-6">
                  {/* <div className="flex bg-[#F8F8F8] py-4 px-6">
                    <GiBoxCutter className="mr-4" size="20" />

                    <div>
                      <div className="text-semibold text-[15px] mb-1.5">
                        Devide videos and edit
                      </div>
                      <div className="text-semibold text-[13px] text-gray-400">
                        You can quickly devide videos into multiple clips and
                        edit them.
                      </div>
                    </div>
                    <div className="flex justify-end max-w-[130px] w-full h-full text-center my-auto">
                      <button className="px-8 py-1.5 text-white text-[15px] bg-[#F02C56] rounded-sm">
                        Edit
                      </button>
                    </div>
                  </div> */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <div className="mb-1 text-[15px]">Caption</div>
                      <div className="text-gray-400 text-[12px]">
                      </div>
                    </div>
                    <input
                      name="caption"
                      onChange={handleChange}
                      value={formData.caption}
                      maxLength={150}
                      className="w-full border p-2.5 rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    {/* <button
                      className="px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm"
                    >
                      Discard
                    </button> */}
                    <button
                      className="px-10 py-2.5 mt-8 border text-[16px] text-white bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] rounded-[9px]"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </>
        
          </form>
        </div>
  )
}

export default UploadVid