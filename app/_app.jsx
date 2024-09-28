import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import Navbar from "../components/NavBar/Navbar";
import LoginForm from "../components/LoginForm/LoginForm";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <Navbar/>
        <LoginForm />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;