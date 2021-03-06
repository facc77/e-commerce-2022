import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { startRevalidation } from "../redux/reducers/authReducer";
import { getCategorias } from "../redux/reducers/categorieReducer";
import { getUsuarios } from "../redux/reducers/userReducer";
import {
  getProductos,
  getProductosPorCategoria,
} from "../redux/reducers/productsReducer";
import Privateroute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RouterSpinner from "../components/RouterSpinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Protect from "./Protect";

const Approuter = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCategorias());
    dispatch(getProductosPorCategoria());
    dispatch(getUsuarios());
    dispatch(getProductos());
    dispatch(startRevalidation());
  }, [dispatch]);

  if (loading) {
    return <RouterSpinner />;
  }

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/backoffice/*"
          element={
            <Protect>
              <Privateroute />
            </Protect>
          }
        />
        <Route path="/*" element={<PublicRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
