import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/public/HomeScreen';
import NosotroScreen from '../pages/public/NosotroScreen';
import AuthRoute from './AuthRoute';

const PublicRoute = () => {
 return (
  <>
     {/* espacio para el navbar publico */}
   <div>
     <Routes>
       <Route path="nosotros" element={<NosotroScreen />} />
       <Route path="auth/*" element={<AuthRoute />} />

       <Route path="/" element={<HomeScreen />} />
     </Routes>
   </div>
 </>
 );
}

export default PublicRoute;
