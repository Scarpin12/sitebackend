// src/components/RotaProtegida.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const RotaProtegida = ({ children }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RotaProtegida;
