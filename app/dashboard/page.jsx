import React from 'react'
import LeftSidebar from '@/components/Dashboard/LeftSidebar'
import MainBar from '@/components/Dashboard/MainBar'
import RightSidebar from '@/components/Dashboard/RightSidebar'
import PrivateRoute from '@utils/PrivateRoute'

const Home = () => {
  return (
    <div className="flex gap-6 pt-[120px]">
      <div className="hidden xl:block w-[20%]">
        <LeftSidebar type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          {/* <Feed /> */}
          <MainBar />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home;