"use client";

import { useState, useEffect, useContext } from "react";
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Cookie from "js-cookie";
import Feeds from "@/components/Feeds/Feeds";
import Muse from '@/components/Dashboard/Muse';
import Explore from '@/components/Dashboard/Explore'
import AuthContext from '@context/AuthContext'



const Main = ({ userpro }) => {
  const [res, setRes] = useState("");
  const { user } = useContext(AuthContext)
  const [activeSection, setActiveSection] = useState("POSTS"); // Default to "POSTS"
  const api = useAxios();
  const token = Cookie.get("authTokens");

  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const response = await api.get('/profile/current/');
      setProfile(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  if (!profile) return <div>No profile</div>
  console.log(profile.image.url);

  return (
    // <!-- Main Content -->
    <div className="flex-1 ">
      {/* <!-- Cover Photo --> */}
      <div className="relative w-full h-0 pb-[30%] bg-co{`/profile/${user_id}`}ver bg-center rounded bg-profile-image">
        {/* <!-- Profile Picture --> */}

        <div className="absolute left-4 bottom-0 transform translate-y-1/2">
          {profile.image ?
            <Image
              // src={profile.image}
              width={96}
              height={96}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            : ('')}
        </div>

      </div>

      {/* <!-- Profile Details --> */}
      <div className="flex flex-row justify-between">
        <div className="ml-[8rem] mt-4 text-gray-900">
          {profile.full_name ? (<h2 className="text-2xl font-bold">{profile.full_name}</h2>) : (<h2 className="text-2xl font-bold">{profile.user.username}</h2>)}
          {/* <h2 className="text-2xl font-bold">{userpro.email}</h2> */}
          <p className="text-sm">@{profile.user.username}</p>
          <p className="text-sm">Kikoni, Uganda</p>
        </div>

        {/* <!-- Stats Section --> */}
        <div className="rounded-lg border border-[#DC2DFF] p-2 w-48 float-right mt-4">
          <div className="flex flex-row justify-between ">
            <div className="">
              <h3 className="text-sm font-bold">Project Views</h3>
              <h3 className="text-sm font-bold">Appreciations</h3>
              <h3 className="text-sm font-bold">Followers</h3>
              <h3 className="text-sm font-bold">Following</h3>
            </div>
            <div>
              <p className="text-sm font-bold">2200</p>
              <p className="text-sm font-bold">300</p>
              <p className="text-sm font-bold">40</p>
              <p className="text-sm font-bold">500</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Grey Line --> */}
      <div className="w-full border-t border-gray-300 mt-4 clear-both"></div>

      <div className="flex justify-center gap-10">
        <button
          className={`focus:border-t py-4 text-sm font-semibold flex gap-2 ${activeSection === "POSTS"
            ? "border-[#DC2DFF] text-[#DC2DFF]"
            : "text-gray-400"
            }`}
          onClick={() => handleToggle("POSTS")}
        >
          POSTS
        </button>
        <button
          className={`focus:border-t py-4 text-sm font-semibold flex gap-2 ${activeSection === "MUSE"
            ? "border-[#DC2DFF] text-[#DC2DFF]"
            : "text-gray-400"
            }`}
          onClick={() => handleToggle("MUSE")}
        >
          MUSE
        </button>
        <button
          className={`focus:border-t py-4 text-sm font-semibold flex gap-2 ${activeSection === "PROJECTS"
            ? "border-[#DC2DFF] text-[#DC2DFF]"
            : "text-gray-400"
            }`}
          onClick={() => handleToggle("PROJECTS")}
        >
          PROJECTS
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-5">
        {activeSection === "POSTS" && (
          <div>
            {/* Render posts content here */}
            <Feeds />
          </div>
        )}
        {activeSection === "MUSE" && (
          <div>
            {/* Render muse content here */}
            <Muse />
          </div>
        )}
        {activeSection === "PROJECTS" && (
          <div>
            {/* Render projects content here */}
            <Explore />
            {/* <div className="grid grid-cols-3 gap-5 mt-5">
              <div className="w-full h-24 bg-gray-100 border border-gray-300 rounded-sm overflow-hidden">
                <Image
                  src="/img_rectangle_27_94x96.png"
                  width={96}
                  height={96}
                  alt="Image 1"
                  className="object-cover w-full h-full"
                />
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
