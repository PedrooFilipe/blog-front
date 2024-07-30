import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Home from './pages/Home';

function App() {

  return (
      <Home />
  );
}

export default App;