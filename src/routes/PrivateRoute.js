import React from "react";
import {  Route, Routes } from "react-router-dom";
import HomeBackoffice from "../pages/backoffice/HomeBackoffice";
import UsersBackoffice from "../pages/backoffice/UsersBackoffice";
import CategoriesBackoffice from "../pages/backoffice/CategoriesBackoffice";
import ProductsBackoffice from "../pages/backoffice/ProductsBackoffice";
import NavbarPrivate from "../components/Navbar/private navbar/NavbarPrivate";




const Privateroute = () => {
  

  return (

    <div>
      <NavbarPrivate />
        <Routes>
          <Route path="/categories" element={<CategoriesBackoffice />} />
          <Route path="/products" element={<ProductsBackoffice />} />
          <Route path="/users" element={<UsersBackoffice />} />
          <Route path="/" element={<HomeBackoffice />} />
        </Routes>
    </div>

  );
};

export default Privateroute;
