import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/login';
import Recovery from './pages/recovery';
import Register from './pages/register';
import Layout from './components/layout';
import RegisterSuccess from './pages/RegisterSuccess';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/success" element={<RegisterSuccess />} />
      </Route>
    </Routes>
  );
}
