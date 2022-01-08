import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/public/HomeScreen";
import NosotroScreen from "../pages/public/NosotroScreen";
import ContactScreen from "../pages/public/ContactScreen";
import NotFoundScreen from "../pages/public/NotFoundScreen";
import CartScreen from "../pages/public/CartScreen";
import AuthRoute from "./AuthRoute";
import NavBar from "../components/Navbar/NavBar";
import DownNavBar from "../components/Navbar/DownNavBar";
import Footer from "../components/Footer";

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
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default PublicRoute;
