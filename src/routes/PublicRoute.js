import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../pages/public/HomeScreen';
import NosotroScreen from '../pages/public/NosotroScreen';

const PublicRoute = () => {
 return (
  <>
     {/* espacio para el navbar publico */}
   <div>
     <Routes>
       <Route path="nosotros" element={<NosotroScreen />} />

       <Route path="/" element={<HomeScreen />} />
     </Routes>
   </div>
 </>
 );
}

export default PublicRoute;
