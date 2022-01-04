import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/public/HomeScreen";
import NosotroScreen from "../pages/public/NosotroScreen";
import LoginScreen from "../pages/public/LoginScreen";
import AuthRoute from "./AuthRoute";
import NavBar from "../components/Navbar/NavBar";

const PublicRoute = () => {
  return (
    <>
      {/* espacio para el navbar publico */}
      <NavBar />
      <div>
        <Routes>
          <Route path="nosotros" element={<NosotroScreen />} />
          <Route path="auth/*" element={<AuthRoute />} />

          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default PublicRoute;
