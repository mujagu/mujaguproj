"use client";

import React, { useEffect, Fragment, useState, useContext } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { jwtDecode } from "jwt-decode"
import Cookie from "js-cookie";
import AuthContext from '@context/AuthContext'
import Model from "@components/Feeds/Model";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter, usePathname  } from "next/navigation";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { FaGlobeAfrica } from "react-icons/fa";
import LoginForm from '@components/Form/LoginForm';
import RegisterForm from "@components/Form/RegisterForm";
import LanguageSelector from '@components/LanguageSelector';

function Navbar() {
  const {user, logoutUser} = useContext(AuthContext)
  const token = Cookie.get('authTokens');
  const path = usePathname();

  if (token){
    const decoded = jwtDecode(token)
    var userId = decoded.user_id
  }
  const router = useRouter();
  const [navFixed, setNavFixed] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [ShowLoginModal, setShowLoginModal] = useState(false);
  const [ShowSignupModal, setShowSignupModal] = useState(false);

  const links = [
    { linkName: "Explore", handler: "/explore", type: "link1" },
    { linkName: "English", handler: "#", type: "link" },
    { linkName: "Sign in", handler: "#", type: "button" },
    { linkName: "Join", handler: "#", type: "button2" },
    { linkName: "Profile", handler: "/profile", type: "link2" },
    { linkName: "Logout", handler: "/", type: "link3" },
  ];

  useEffect(() => {
    if (path === "/") {
      const positionNavbar = () => {
        window.pageYOffset > 0 ? setNavFixed(true) : setNavFixed(false);
      };
      window.addEventListener("scroll", positionNavbar);
      return () => window.removeEventListener("scroll", positionNavbar);
    } else {
      setNavFixed(true);
    }
  }, [router.pathname]);

  return (
    <>
      <Fragment>
        <nav
          className={`h-24 w-full lg:px-24 flex justify-between items-center py-6 top-0 z-30 t ${
            navFixed
              ? "fixed bg-slate-100 border-b border-gray-200"
              : "absolute bg-transparent border-transparent"
          }`}
        >
          <div className="pl-7">
            <Link href="/">
              <Logo fillColor={!navFixed ? "#404145" : "#404145"} />
            </Link>
          </div>
          <div className={`flex px-9 lg:pl-[2rem]`}>
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="w-[15rem] lg:w-[30rem] py-2.5 px-4 border rounded-l-full border-[#DC2DFF]"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button
              className="bg-fuchsia-600 py-2.5 text-white w-16 flex justify-center items-center rounded-r-full"
              onClick={() => {
                setSearchData("");
                router.push(`/search?q=${searchData}`);
              }}
            >
              <IoSearchOutline className="fill-white text-white h-6 w-6" />
            </button>
          </div>

          <ul className="hidden lg:flex gap-10 items-center">
            {links.map(({ linkName, handler, type }) => {
              return (
                <li
                  key={linkName}
                  className={`${
                    navFixed ? "text-black" : "text-black"
                  } font-medium`}
                >
                  {type === "link1" && <Link href={handler}>{linkName}</Link>}
                  {type === "link" && (
                    <div>
                      <LanguageSelector />
                      {/* <LanguageSwitcher /> */}
                      {/* <select
                        name=""
                        id=""
                        className="focus:outline-none hover:cursor-pointer p-4 bg-transparent"
                      >
                        <option className="hover:cursor-pointer border-fuchsia-600  rounded  ">
                          English
                        </option>
                        <option value="Luganda">Luganda</option>
                        <option value="swahili">Swahili</option>
                      </select> */}
                    </div>
                  )}
                  {!userId ? (
                    <>
                    {type === "button" && (
                    <button
                      onClick={() => setShowLoginModal(true)}
                      shape={"round"}
                      className={`text-fuchsia-600 bg-purple-100 border border-fuchsia-600 text-md font-semibold py-1 px-3 rounded-[9px] hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-500`}
                    >
                      {linkName}
                    </button>
                  )}
                  {type === "button2" && (
                    <button
                      onClick={() => setShowSignupModal(true)}
                      className={`bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] rounded-[9px] border text-md font-semibold py-1 px-3 hover:text-white transition-all duration-500`}
                    >
                      {linkName}
                    </button>
                  )}
                    </>
                  ) : (
                    <>
                    {type === "link2" && (
                      <Link href={handler}><Image src="/img_rectangle_27_94x96.png" alt="Profile" width={40} height={40} className="rounded-full cursor-pointer"/></Link>
                    )}
                    {type === "link3" && (
                      <span className="text-black font-medium cursor-pointer" onClick={logoutUser}>Logout</span>
                    )}
                    </>
                  )}
                  {/* {token === null && (
                    <>
                    {type === "button" && (
                    <button
                      onClick={() => setShowLoginModal(true)}
                      shape={"round"}
                      className={`text-fuchsia-600 bg-purple-100 border border-fuchsia-600 text-md font-semibold py-1 px-3 rounded-[9px] hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-500`}
                    >
                      {linkName}
                    </button>
                  )}
                  {type === "button2" && (
                    <button
                      onClick={() => setShowSignupModal(true)}
                      className={`bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] rounded-[9px] border text-md font-semibold py-1 px-3 hover:text-white transition-all duration-500`}
                    >
                      {linkName}
                    </button>
                  )}
                    </>
                  )}
                  {token !== null && (
                    <>
                    {type === "link2" && (
                      <Link href={handler}><Image src="/img_rectangle_27_94x96.png" alt="Profile" width={40} height={40} className="rounded-full cursor-pointer"/></Link>
                    )}
                    {type === "link3" && (
                      <span className="text-black font-medium cursor-pointer" onClick={logoutUser}>Logout</span>
                    )}
                    </>
                  )} */}
                  
                </li>
              );
            })}
          </ul>
          <Model
            isVisible={ShowLoginModal}
            onClose={() => setShowLoginModal(false)}
          ><LoginForm /></Model>
          <Model
            isVisible={ShowSignupModal}
            onClose={() => setShowSignupModal(false)}
          ><RegisterForm /></Model>
        </nav>
      </Fragment>
    </>
  );
}

export default Navbar;
