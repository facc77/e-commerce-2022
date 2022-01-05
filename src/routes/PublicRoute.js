import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/public/HomeScreen";
import NosotroScreen from "../pages/public/NosotroScreen";
import LoginScreen from "../pages/public/LoginScreen";
import RegisterScreen from "../pages/public/RegisterScreen";
import ContactScreen from "../pages/public/ContactScreen";
import NotFoundScreen from "../pages/public/NotFoundScreen";
import AuthRoute from "./AuthRoute";
import NavBar from "../components/Navbar/NavBar";
import DownNavBar from "../components/Navbar/DownNavBar";

const PublicRoute = () => {
  return (
    <>
      <NavBar />
      <DownNavBar />
      <div>
        <Routes>
          <Route path="*" element={<NotFoundScreen />} />
          <Route path="nosotros" element={<NosotroScreen />} />
          <Route path="auth/*" element={<AuthRoute />} />

          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default PublicRoute;
