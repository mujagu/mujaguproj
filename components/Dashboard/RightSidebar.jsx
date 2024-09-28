import React from 'react';
import { BsSearch } from "react-icons/bs";

const RightSidebar = () => {
  return (
    <section className="w-[350px] m-[0_0_197px_0] h-[429px] box-border">
      <div className="flex flex-col rounded-xl  border-l-[0.5px] border-[0.5px] border-[#DC2DFF] bg-[#FFFFFF]">
        <h3 className="font-bold text-xl my-4 px-4">Trends for you</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-[blue]/10 p-4 last:rounded-b-xl transition duration-200"
            >
              <div className="font-bold text-lg ">#trending{i + 1}</div>
              <div className="text-xs text-neutral-400">35.4k</div>
            </div>
          ))}
        </div>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl my-4 border-l-[0.5px] border-[0.5px] border-[#DC2DFF] bg-[#FFFFFF]">
        
        <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
        <div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-[blue]/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-neutral-600 rounded-full flex-none"></div>
                <div className="flex flex-col">
                  <div className="font-bold text-black">Other User</div>
                  <div className="text-gray-500 text-xs">@otheruser1232</div>
                </div>
              </div>

              <button className="rounded-full px-6 py-2 bg-[#DC2DFF] text-neutral-950">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RightSidebar

