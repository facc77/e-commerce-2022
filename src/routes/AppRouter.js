import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { startRevalidation } from '../redux/reducers/authReducer';
import { getCategorias } from '../redux/reducers/categorieReducer';
import { getUsuarios } from '../redux/reducers/userReducer';
import Privateroute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const Approuter = () => {
   const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getCategorias());
        dispatch(getUsuarios());
        dispatch(startRevalidation());
      }, [dispatch]);


 return (
  <BrowserRouter>
     <Routes>
        <Route path="/backoffice/*" element={<Privateroute />} />
        <Route path="/*" element={<PublicRoute />} />
     </Routes>
  </BrowserRouter>
 );
}

export default Approuter;
