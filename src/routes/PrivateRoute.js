import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeBackoffice from '../pages/backoffice/HomeBackoffice';
import UsersBackoffice from '../pages/backoffice/UsersBackoffice';

const Privateroute = () => {
 return (
  <>
      {/* //espacio para el navbar privado */}
      <div>
        <Routes>
          <Route path="/users" element={<UsersBackoffice />} />
          <Route path="/" element={<HomeBackoffice />} />
        </Routes>
      </div>
    </>
 );
}

export default Privateroute;
