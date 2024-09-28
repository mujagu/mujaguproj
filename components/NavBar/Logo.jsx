import React from "react";
import Image from "next/image";

function Logo({ fillColor }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10">
      <Image width={40} height={40} alt="logo" src="/img_exercise.png"/>
    </div>
    <div className="hidden lg:flex pt-3 font-medium">
      <span>Ug Skills Showcase</span>
    </div>
    </div>
    
   
  );
}

export default Logo;
