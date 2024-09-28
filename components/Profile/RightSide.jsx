"use client";

import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";
import { BsPencil } from "react-icons/bs"
import AuthContext from '@context/AuthContext'
import useAxios from "@utils/useAxios";
import { jwtDecode } from "jwt-decode";
import Cookie from "js-cookie";


const RightSide = () => {
    const api = useAxios();
    const token = Cookie.get("authTokens");

    if (token) {
        const decode = jwtDecode(token);
        var user_id = decode.user_id;
        var user_email = decode.email;
        var username = decode.username;
    }

    const { user } = useContext(AuthContext)

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

    if (!profile) return <p>No profile</p>

    return (
        // <!-- Right Sidebar -->
        <div class="flex flex-col space-y-4">
            {/* <!-- Hire and Follow Buttons --> */}
            <div class="space-y-2 text-right">
                {profile.user.username !== username && (
                    <div>
                        <button class="block w-full bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] text-white font-bold py-2 px-4 rounded">
                            Hire
                        </button>
                        <button class="block w-full bg-white text-purple-600 border border-[#DC2DFF] font-bold py-2 px-4 rounded">
                            Follow
                        </button>
                    </div>
                )}


            </div>
            {/* {username != job.author.username && ( */}
            <div class="flex gap-3 w-full bg-white text-purple-600 border border-[#DC2DFF] font-bold py-2 px-4 rounded items-center justify-center space-y-2 ">
                <BsPencil className='' />Edit Profile
            </div>
            {/* )} */}


            {/* <!-- About Me Section --> */}
            <div class="bg-white rounded-lg border border-[#DC2DFF] p-4">
                <h3 class="font-bold text-lg">About Me</h3>
                {profile.bio ?
                    <p class="text-sm text-gray-600">
                        {profile.bio}

                    </p> : ('')}
            </div>

            {/* <!-- QR Code Section --> */}
            <div class="bg-white rounded-lg border border-gray-300 p-4 justify-center content-center">
                <h3 class="font-bold text-lg pb-4">Scan Me</h3>
                <QRCode size={256} style={{ height: "100px", maxWidth: "100px", width: "100px" }} value="profile" viewBox={`0 0 256 256`} className='justify-center content-center' />
                {/* <Image src="/img_rectangle_27_94x96.png" width={96} height={96} alt="QR Code" class="w-24 h-24 rounded-lg float-right" /> */}
            </div>

            {/* <!-- Reviews Section --> */}
            <div class="bg-white rounded-lg border border-gray-300 p-4">
                <h3 class="font-bold text-lg">Reviews</h3>
                <ul class="space-y-1">
                    <li class="flex items-center space-x-2">
                        <span>5 Stars</span>
                        <div class="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div class="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] h-full w-3/4"></div>
                        </div>
                    </li>
                    <li class="flex items-center space-x-2">
                        <span>4 Stars</span>
                        <div class="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div class="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] h-full w-1/2"></div>
                        </div>
                    </li>
                    <li class="flex items-center space-x-2">
                        <span>3 Stars</span>
                        <div class="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div class="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] h-full w-1/4"></div>
                        </div>
                    </li>
                    <li class="flex items-center space-x-2">
                        <span>2 Stars</span>
                        <div class="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div class="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] h-full w-1/6"></div>
                        </div>
                    </li>
                    <li class="flex items-center space-x-2">
                        <span>1 Star</span>
                        <div class="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div class="bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] h-full w-1/8"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default RightSide