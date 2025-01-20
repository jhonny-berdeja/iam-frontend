import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login/Login'

function App() {
  return (
<HashRouter>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Navigate to="/login" />} />
  </Routes>
</HashRouter>

  );
}

export default App;
