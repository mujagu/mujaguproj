"use client";

import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { GoChevronRight } from "react-icons/go";
import Model from "@components/Feeds/Model";
import CreateProject from "@components/Project/CreateProject";
import UploadVid from "@components/Project/UploadVid";
import PostJob from "@components/Project/PostJob";
import { usePathname } from "next/navigation";
import useAxios from "@utils/useAxios"



export const LeftSidebar = () => {
  const path = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const [showModel, setShowModel] = useState(false);
  const [showModel2, setShowModel2] = useState(false);
  const [showModel3, setShowModel3] = useState(false);

  const api = useAxios();
  const [user, setUser] = useState([]);
  console.log('fetching users:', user);

  const getUsers = async () => {
    try {
      const response = await api.get('/user/');
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const Menu = [
    {
      title: "Home",
      icon: <BiHomeCircle />,
      path: "/dashboard",
    },
    {
      title: "Explore",
      icon: <HiOutlineHashtag />,
      path: "/explore",
    },
    {
      title: "Create",
      icon: <CiCirclePlus />,
      path: "#",
      hasSubmenu: true,
      submenu: [
        { title: "Job Advert", action: () => setShowModel(true) },
        { title: "Project", action: () => setShowModel2(true) },
        { title: "Muse", action: () => setShowModel3(true) },
      ],
    },
    {
      title: "Notifications",
      icon: <BsBell />,
      path: "#",
    },
    {
      title: "Messages",
      icon: <BsEnvelope />,
      path: "/message",
    },
    {
      title: "Bookmarks",
      icon: <BsBookmark />,
      path: "#",
    },
    {
      title: "Community",
      icon: <FaPeopleGroup />,
      path: "/communities",
    },
    {
      title: "Profile",
      icon: <BiUser />,
      path: "/profile",
    },
  ];

  return (
    <Fragment>
      <div className="fixed w-[180px] m-[1px_0_307px_0] flex flex-col box-border">
        <div className="rounded-[9px] border-[0.5px] border-[#DC2DFF] bg-[#FFFFFF] relative flex flex-col box-border ">
          <ul>
            {Menu.map((item, index) =>
              item.hasSubmenu ? (
                <li key={index} className="relative">
                  <div
                    className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-[9px] ${openDropdown === index ? "bg-gray-100 text-black" : ""
                      }`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>{item.title}</div>
                    <GoChevronRight
                      className={`w-5 h-5 text-gray-500 transition ${openDropdown === index ? "rotate-90" : ""
                        }`}
                    />
                  </div>
                  {openDropdown === index && (
                    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-[100%]">
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex} className="hover:bg-blue-100">
                          <button
                            className="w-full text-left px-4 py-2"
                            onClick={subitem.action}
                          >
                            {subitem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <Link href={item.path}>
                  <div
                    className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-[9px] ${item.path === path ? "bg-gray-100 text-[#DC2DFF]" : ""
                      }`}
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>{item.title}</div>
                  </div>
                </Link>
              )
            )}
          </ul>
        </div>
        <Model isVisible={showModel} onClose={() => setShowModel(false)}>
          <PostJob />
        </Model>
        <Model isVisible={showModel2} onClose={() => setShowModel2(false)}>
          <CreateProject />
        </Model>
        <Model isVisible={showModel3} onClose={() => setShowModel3(false)}>
          <UploadVid />
        </Model>
      </div>
    </Fragment>
  );
};

export default LeftSidebar;
