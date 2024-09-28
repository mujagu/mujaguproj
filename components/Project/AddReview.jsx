"use client"

import React, { useEffect, useState, useRef } from "react"
import { FaStar } from "react-icons/fa";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Cookie from "js-cookie";

function AddReview() {
  const api = useAxios();
  const [data, setData] = useState("");
  const [reviews, setReviews] = useState([]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    reviewText: "",
    category: "",
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
    form.append("reviewText", formData.reviewText);
    form.append("category", formData.category);
    form.append("category", formData.num);
    console.log("FormData before submission:", Object.fromEntries(form));

    try {
      await api.post("/add_reviews/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Refresh posts after posting
      const response = await api.get("/add_reviews/");
      setReviews(response.data);

      router.push('#?added=true');
      // PostJob.close();

      // Clear form
      setFormData({
        reviewText: "",
        job_description: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  
  return (
    <div className="mb-10">
      <h3 className="text-2xl my-5 font-normal text-[#404145]">
        Give Mujagu Group a Review
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col items-start justify-start gap-3">
        <textarea
          name="reviewText"
          id="reviewText"
          value={formData.reviewText}
          onChange={handleChange}
          className="block p-2.5 w-4/6 text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Add Review"
        ></textarea>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <FaStar
              key={num}
              className={`cursor-pointer ${
                Math.ceil() >= num ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => setData({ ...data, rating: num })}
            />
          ))}
        </div>
        <button
          className="flex items-center bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] text-white py-2 justify-center text-md rounded px-5"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}

export default AddReview;
