import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const Protect = ({children}) => {

 const {logged} = useSelector(state => state.auth);

  return logged 
        ?  children
        : <Navigate to="/" />
}
export default Protect;