import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privateroute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const Approuter = () => {
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
