"use client"

import HeroBanner from "../components/Landing/HeroBanner";
import Join from "../components/Landing/Join";
import PopularServices from "../components/Landing/PopularServices";
import React from "react";
import { LanguageSwitcher } from "../components/lang-switcher";
import LanguageSelector from '@components/LanguageSelector';



function Index() {

  return (
    <div>
      <HeroBanner />
      {/* <LanguageSelector /> */}
      <PopularServices />
    </div>
  );
}

export default Index;
