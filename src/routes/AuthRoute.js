import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../pages/public/LoginScreen";
import RegisterScreen from "../pages/public/RegisterScreen";

const AuthRoute = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default AuthRoute;
