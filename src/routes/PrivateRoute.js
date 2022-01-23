import React from "react";
import {  Route, Routes } from "react-router-dom";
import HomeBackoffice from "../pages/backoffice/HomeBackoffice";
import UsersBackoffice from "../pages/backoffice/UsersBackoffice";
import CategoriesBackoffice from "../pages/backoffice/CategoriesBackoffice";
import ProductsBackoffice from "../pages/backoffice/ProductsBackoffice";
import NavbarPrivate from "../components/Navbar/private navbar/NavbarPrivate";
import UserForm from "../components/Forms/UserForm";
import CategoryForm from "../components/Forms/CategoryForm";
import ProductForm from "../components/Forms/ProductForm";




const Privateroute = () => {
  

  return (

    <div>
      <NavbarPrivate />
        <Routes>
          <Route path="/categories" element={<CategoriesBackoffice />} />
          <Route path="/products" element={<ProductsBackoffice />} />
          <Route path="/users" element={<UsersBackoffice />} />
          
          {/* forms */}
          <Route path="/users/create" element={<UserForm />} />
          <Route path="/users/edit" element={<UserForm />} />
          <Route path="/categories/create" element={<CategoryForm />} />
          <Route path="/categories/edit" element={<CategoryForm />} />
          <Route path="/products/create" element={<ProductForm />} />
          <Route path="/products/edit" element={<ProductForm />} />



          <Route path="/" element={<HomeBackoffice />} />
        </Routes>
    </div>

  );
};

export default Privateroute;
