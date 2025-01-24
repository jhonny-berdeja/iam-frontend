import React from 'react';
import './index.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login/Login'
import ResourceManagement from './resources/ResourceManagement';
import Home from './home/Home';

function App() {
  return (
  <HashRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/access" element={<ResourceManagement />} />
    </Routes>
  </HashRouter>

  );
}

export default App;
