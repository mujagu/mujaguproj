import React from 'react'

const MainContent = () => {
  return (
    <div class="flex-1 bg-white p-4 border-l-[0.5px] border-[0.5px] border-[#DC2DFF] rounded-xl">
          <div class="flex justify-between items-center mb-4">
            <h2
              class="text-2xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] to-purple-600"
            >
              Message
            </h2>
            <input
              type="text"
              placeholder="Search in messages"
              class="border border-[#DC2DFF] rounded px-3 py-2 text-gray-900 flex-1 ml-4"
            />
            <button
              class="ml-4 bg-white border border-[#DC2DFF] text-gray-900 px-3 py-2 rounded"
            >
              Filter
            </button>
          </div>
          <div class="flex space-x-4 mb-4 overflow-x-auto">
            <button
              class="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] to-purple-600 text-white px-3 py-2 rounded"
            >
              Unread
            </button>
            <button
              class="bg-white border border-[#DC2DFF] text-gray-900 px-3 py-2 rounded"
            >
              Starred
            </button>
            <button
              class="bg-white border border-[#DC2DFF] text-gray-900 px-3 py-2 rounded"
            >
              Focused
            </button>
            <button
              class="bg-white border border-[#DC2DFF] text-gray-900 px-3 py-2 rounded"
            >
              My conversation
            </button>
          </div>

          <ul class="space-y-2">
            <li
              class="flex justify-between items-center p-4 bg-gray-50 border border-[#DC2DFF] rounded-lg"
            >
              <div class="flex items-center space-x-4">
                <div class="bg-gray-300 rounded-full w-10 h-10"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Jumia</h3>
                  <p class="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                </div>
              </div>
              <div class="text-sm text-gray-500">5:00 AM</div>
            </li>
            <li
              class="flex justify-between items-center p-4 bg-gray-50 border border-[#DC2DFF] rounded-lg"
            >
              <div class="flex items-center space-x-4">
                <div class="bg-gray-300 rounded-full w-10 h-10"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Mark</h3>
                  <p class="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                </div>
              </div>
              <div class="text-sm text-gray-500">5:00 AM</div>
            </li>
            <li
              class="flex justify-between items-center p-4 bg-gray-50 border border-[#DC2DFF] rounded-lg"
            >
              <div class="flex items-center space-x-4">
                <div class="bg-gray-300 rounded-full w-10 h-10"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Rose</h3>
                  <p class="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                </div>
              </div>
              <div class="text-sm text-gray-500">5:00 AM</div>
            </li>
            <li
              class="flex justify-between items-center p-4 bg-gray-50 border border-[#DC2DFF] rounded-lg"
            >
              <div class="flex items-center space-x-4">
                <div class="bg-gray-300 rounded-full w-10 h-10"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Bready</h3>
                  <p class="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                </div>
              </div>
              <div class="text-sm text-gray-500">5:00 AM</div>
            </li>
            <li
              class="flex justify-between items-center p-4 bg-gray-50 border border-[#DC2DFF] rounded-lg"
            >
              <div class="flex items-center space-x-4">
                <div class="bg-gray-300 rounded-full w-10 h-10"></div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Hope</h3>
                  <p class="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
                </div>
              </div>
              <div class="text-sm text-gray-500">June 21</div>
            </li>
          </ul>
          <div className='py-4'>
            <h1 className='py-3 text-lg font-semibold text-gray-900'>Welcome to your inbox!</h1>
            <p className='text-sm text-gray-600 pb-4'>Drop a line, share posts and more with private conversations between you and others on our platform.</p>
            <button className='bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] p-2 rounded-md text-white'>Write a message</button>
          </div>
        </div>

  )
}

export default MainContent