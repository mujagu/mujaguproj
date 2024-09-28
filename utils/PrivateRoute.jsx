"use client";

import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../context/AuthContext";
import Model from "@components/Feeds/Model";
import LoginForm from "@components/Form/LoginForm";

const PrivateRoute = (WrappedComponent) => {
    return (props) => {
        const [showLoginModal, setShowLoginModal] = useState(false);
        const { user } = useContext(AuthContext);
    
        if (!user) {
          return (
            <>
              {showLoginModal && (
                <Model
                  isVisible={showLoginModal}
                  onClose={() => setShowLoginModal(false)}
                >
                  <LoginForm />
                </Model>
              )}
              <button onClick={() => setShowLoginModal(true)}>Login</button>
            </>
          );
        }

    return <WrappedComponent {...props} />;
  };
};

export default PrivateRoute;
