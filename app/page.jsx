"use client"

import HeroBanner from "../components/Landing/HeroBanner";
import PopularServices from "../components/Landing/PopularServices";
import React from "react";
import LanguageSelector from '@components/LanguageSelector';
import { AuthProvider } from '../context/AuthContext';
import Navbar from "../components/NavBar/Navbar";



function Index({ Component, pageProps }) {

  return (
    // <AuthProvider>
      <div>
      {/* <LoginForm /> */}
      {/* <Component {...pageProps} /> */}
      <Navbar />
      <HeroBanner />
      <PopularServices />
    </div>
    // </AuthProvider>
    
  );
}

export default Index;
