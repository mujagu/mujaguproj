import React from 'react'

const RightSide = () => {
  return (
    <aside className="">
      <div className='border-l-[0.5px] border-[0.5px] border-[#DC2DFF] rounded-xl bg-white flex flex-col p-[14px_10px_15px_10px]'>
      <h3 className="text-lg font-bold mb-4">New message</h3>
          <input
            type="text"
            placeholder="Type name or Multiple name"
            className="w-full rounded px-3 py-2 text-gray-900 mb-4 border border-gray-300"
          />
          <textarea
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."
            className="w-full rounded px-3 py-2 text-gray-900 h-32 mb-4 border border-gray-300"
          ></textarea>
          
          <div class="flex items-center space-x-2 pt-4">
            <button
              className="bg-white text-purple-600 border border-[#DC2DFF] px-3 py-2 rounded"
            >
              📷
            </button>
            <button
              className="bg-white text-purple-600 border border-[#DC2DFF] px-3 py-2 rounded"
            >
              GIF
            </button>
            <button
              className="bg-white text-purple-600 border border-[#DC2DFF] px-3 py-2 rounded"
            >
              📎
            </button>
            <button
              className="bg-white text-purple-600 border border-[#DC2DFF] px-3 py-2 rounded"
            >
              📹
            </button>
            <button
              className="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] border-[#DC2DFF] text-white px-3 py-2 rounded flex-1"
            >
              Send
            </button>
          </div>
      </div>
          
        </aside>
  )
}

export default RightSide