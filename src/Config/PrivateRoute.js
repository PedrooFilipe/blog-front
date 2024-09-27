import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {

  console.log('testando');

  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;

};

export default PrivateRoute;