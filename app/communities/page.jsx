import React from 'react'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'
import MainMesso from '@/components/Community/MainMesso'
import RightSidebar from '@/components/Dashboard/RightSidebar'

export default function Home() {
  return (
    <div className="flex gap-6 pt-[120px]">
      <div className="hidden xl:block w-[20%]">
        <LeftSidebar type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          {/* <Feeds /> */}
          <MainMesso />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightSidebar />
      </div>
    </div>
  )
}
