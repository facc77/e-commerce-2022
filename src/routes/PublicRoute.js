import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/public/HomeScreen";
import NosotroScreen from "../pages/public/NosotroScreen";
import ContactScreen from "../pages/public/ContactScreen";
import NotFoundScreen from "../pages/public/NotFoundScreen";
import CartScreen from "../pages/public/CartScreen";
import ProductsScreen from "../pages/public/ProductsScreen";
import ProductDetailScreen from "../pages/public/ProductDetailScreen";
import AuthRoute from "./AuthRoute";
import NavBar from "../components/Navbar/NavBar";
import DownNavBar from "../components/Navbar/DownNavBar";
import Footer from "../components/Footer";
import ProtectAuth from "./ProtectAuth";

const PublicRoute = () => {
  return (
    <>
      <NavBar />
      <DownNavBar />
      <div>
        <Routes>
          <Route path="*" element={<NotFoundScreen />} />
          <Route path="nosotros" element={<NosotroScreen />} />
          <Route
            path="auth/*"
            element={
              <ProtectAuth>
                <AuthRoute />
              </ProtectAuth>
            }
          />

          <Route path="/" element={<HomeScreen />} />
          <Route path="/contacto" element={<ContactScreen />} />
          <Route path="/carrito" element={<CartScreen />} />
          <Route path="/productos/:category" element={<ProductsScreen />} />
          <Route
            path="detalleProducto/:category/:productName"
            element={<ProductDetailScreen />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default PublicRoute;
