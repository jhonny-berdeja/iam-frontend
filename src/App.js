import React from 'react';
import './index.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login/Login'
import Home from './home/Home';

function App() {
  return (
  <HashRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </HashRouter>

  );
}

export default App;
