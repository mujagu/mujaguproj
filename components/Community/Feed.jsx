import React from 'react';
import Image from "next/image";


const Posu = () => {
  return (
    <div className='flex flex-col gap-4  border-l-[0.5px] border-[0.5px] border-[#DC2DFF] p-4 bg-white shadow-md rounded-lg'>
      {/* user */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image src="/img_rectangle_27_94x96.png" width={40} height={40} className="w-10 h-10 rounded-full"/>
          <div className='flex flex-col'>
            <span className='font-semibold text-[13px]'>Mujagu</span>
            <span className='font-extralight text-[13px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            <span className='font-medium text-[10px]'>Aug 31</span>
          </div>
        </div>
      </div>

      {/* desc */}
      <div className='flex flex-col gap-4'>
        <p className='font-extralight text-[13px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium, minus commodi doloribus labore tempora voluptatum! Officia quos molestiae,</p>
        <div className='w-full min-h-96'>
          <Image src="/img_rectangle_27_238x240.png" width={645} height={144} className="object-contain rounded-md"/>
        </div>
      </div>

      {/* interaction */}
      <div className='flex flex-row items-center justify-between'>
        <div className='flex gap-8'>
          <Image src="/Favorite.png" width={20} height={20} className="object-contain cursor-pointer"/>
        </div>
        <div className='flex gap-8'>
          <Image src="/SpeechBubble1.png" width={20} height={20} className="object-contain cursor-pointer"/>
        </div>
        <div className='flex gap-8'>
          <Image src="/Letter.png" width={20} height={20} className="object-contain cursor-pointer"/>
        </div>
        <div className='flex gap-8'>
          <Image src="/Bookmark1.png" width={20} height={20} className="object-contain cursor-pointer"/>
        </div>
        <div className='flex gap-8'>
          <Image src="/Share1.png" width={20} height={20} className="object-contain cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Posu