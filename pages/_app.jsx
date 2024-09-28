"use client";

import React from 'react'
import { AuthProvider } from "@context/AuthContext";
import PrivateRoute from '@utils/PrivateRoute'

const _app = () => {
  return (
    <AuthProvider>
      <PrivateRoute>
      <div>_app</div>
      </PrivateRoute>
      
    </AuthProvider>
    
  )
}

export default _app