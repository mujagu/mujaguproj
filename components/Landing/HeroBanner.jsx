'use client'

import Image from "next/image";
import { useRouter } from "next/router";
import Services from "./Services";
import React, { useEffect, useState } from "react";

function HomeBanner() {
  // const router = useRouter();
  const [image, setImage] = useState(1);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 6 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="h-[700px] relative bg-cover bg-[url('/img_group_990.png')] ">
      <div className="z-10 relative flex justify-center flex-col h-full gap-5">
        <div className="flex flex-1 items-center justify-center mt-20 mr-[250px]">
          <div className="flex flex-col gap-4 pr-[110px]">
            <div className="flex gap-4">
              <img src="/img_rectangle_27.png" alt="signup" className="rounded-lg w-[95px] h-48 object-cover " />
              <img src="/img_rectangle_27_94x96.png" alt="signup" className="rounded-lg w-32 h-40 object-cover" />
            </div>
            <div className="flex gap-4">
              <img src="/img_rectangle_27_142x144.png" alt="signup" className="rounded-lg w-32 h-40 object-cover" />
              <img src="/img_rectangle_27_238x240.png" alt="signup" width={'40'} height={'40'} className="rounded-lg w-[90px] h-48 object-cover" />
            </div>
          </div>
          <div className="leading-snug">
          <span className="text-black text-5xl text-[50px] font-bold text-black-900">
            <>
              The World's <br/> Center of  
            </>
          </span>
          <span className="bg-gradient-to-r from-fuchsia-600 to-blue-400 bg-clip-text font-normal text-transparent text-5xl"> Greatness</span>
          <span className="flex left-[0px] bottom-[78px] break-words font-['Outfit'] font-semibold text-[15px] tracking-[0.5px] leading-[1.067] text-[#000000] pt-4">
                  What can we do for you?
          </span>

          <div className="m-[0_0_21px_0] flex flex-row self-start w-[fit-content] box-sizing-border pt-5">
            <div className="backdrop-blur-[35px] rounded-[9px] border-[1px_solid_#FFFFFF] bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)] relative m-[0_17px_0_0] flex flex-row justify-between p-[7px_10px_8px_10px] w-[235px] box-sizing-border hover:bg-white">
              <div className="m-[2px_8px_2px_0] inline-block w-[109px] break-words font-['Outfit'] font-medium text-[16px] tracking-[0.5px] leading-[1.067] text-[#FFFFFF]">
                Find freelancer
              </div>
            </div>
            <div className="backdrop-blur-[35px] rounded-[9px] border border-fuchsia-600 relative m-[0_17px_0_0] flex flex-row justify-between p-[7px_10px_8px_10px] w-[235px] box-sizing-border hover:text-white hover:bg-[linear-gradient(90deg,#D300FF_10.25%,#3D3EEA_82%)]">
              <div className="relative m-[2px_8px_2px_0] inline-block break-words font-['Outfit'] font-medium text-[16px] tracking-[0.5px] leading-[1.067] bg-[linear-gradient(90deg,#9100D8,#4D00FA)] text-[transparent] bg-clip-text hover:text-white ">
                Become a freelancer
              </div>
            </div>
          </div> 
          <span className="self-start break-words font-['Outfit'] font-semibold text-[15px] tracking-[0.5px] leading-[1.067] text-[#000000]">
                    What our platform can do?
          </span>
          <Services />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
