"use client"

import React, { useEffect, useState } from "react";
import LeftSidebar from "@/components/Dashboard/LeftSidebar";
import Main from "@/components/Profile/Main";
import RightSide from "@/components/Profile/RightSide";
import RootLayout from "@app/dashboard/layout";
// import AuthContext from '@context/AuthContext'
import useAxios from "@utils/useAxios";


const Home = ({ params }) => {
  const [users, setUsers] = useState([]);
  const { id } = params;
  const api = useAxios();

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await api.get(`/user/${id}/`);
          setUsers(Array.isArray(response.data) ? response.data : [response.data]);
          console.log(response.data)
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };

      fetchUsers();
    }, []);

  return (
    <RootLayout>
      <div className="flex gap-6 pt-[120px]">
        <div className="hidden xl:block w-[20%]">
          <LeftSidebar type="home" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            {/* <Feed /> */}
            {users.map((userpro) => {
                return <Main key={userpro.id} user={userpro} />;
              })}
            {/* <Main /> */}
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightSide />
        </div>
      </div>
    </RootLayout>
  )
}

export default Home
