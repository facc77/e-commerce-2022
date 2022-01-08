import React from "react";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import HomeBackoffice from "../pages/backoffice/HomeBackoffice";
import UsersBackoffice from "../pages/backoffice/UsersBackoffice";
import AdminNavbar from "../components/Navbar/AdminNavbar";

const Privateroute = () => {
  return (
    <>
      <AdminNavbar />
      <Box marginLeft="250px">
        <Routes>
          <Route path="/users" element={<UsersBackoffice />} />
          <Route path="/" element={<HomeBackoffice />} />
        </Routes>
      </Box>
    </>
  );
};

export default Privateroute;
