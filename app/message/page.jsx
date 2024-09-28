import React from 'react';
import LeftSidebar from '@/components/Dashboard/LeftSidebar'
import MainContent from '@/components/Message/MainContent';
import RightSide from '@/components/Message/RightSide'

const message = () => {
  return (
    <div className="flex gap-6 pt-[120px]">
      <div className="hidden xl:block w-[20%]">
        <LeftSidebar type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          {/* <messges /> */}
          <MainContent />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightSide />
      </div>
    </div>
  )
}

export default message