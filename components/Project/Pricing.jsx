"use client"

import React from "react";
import { FiClock, FiRefreshCcw } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { useRouter } from 'next/navigation'

function Pricing() {
    const router = useRouter();
  return (
    <>
        <div className=" top-36 mb-10 h-max w-96">
          <div className="border p-10 flex flex-col gap-5">
            <div className="flex justify-between">
              <h4 className="text-md font-normal text-[#74767e]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              </h4>
              <h6 className="font-medium text-lg">Shs 10,000</h6>
            </div>
            <div>
              <div className="text-[#62646a] font-semibold text-sm flex gap-6">
                <div className="flex items-center gap-2">
                  <FiClock className="text-xl" />
                  <span>5-Days Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiRefreshCcw className="text-xl" />
                  <span>2 Revisions</span>
                </div>
              </div>
              <ul></ul>
            </div>
            <ul className="flex gap-1 flex-col">
                <li className="flex items-center gap-3">
                  <BsCheckLg className="text-[#DC2DFF] text-lg" />
                  <span className="text-[#4f5156]">Source Code</span>
                </li>
            </ul>
              {/* <button
                className="flex items-center bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] text-white py-2 justify-center font-bold text-lg relative rounded"
              >
                <span>Edit</span>
                <BiRightArrowAlt className="text-2xl absolute right-4" />
              </button> */}
              <button
                className="hover:bg-white flex items-center bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] text-white py-2 justify-center font-bold text-lg ] rounded hover:text-gray-950"
              >
                <span>Continue</span>
                <BiRightArrowAlt className="text-2xl absolute right-4" />
              </button>
          </div>
            <div className="flex items-center justify-center mt-5">
              <button className=" w-5/6 hover:bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] py-1 border border-[#74767e] px-5 text-[#6c6d75] hover:text-white transition-all duration-300 text-lg rounded font-bold"
              onClick={() => router.push(`/message`)} >
                Contact Me
              </button>
            </div>
        </div>
    </>
  );
}

export default Pricing;
