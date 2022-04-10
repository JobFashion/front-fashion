import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import PrivateLayout from './components/PrivateLayout';

import ProtectedPage from './pages/ProtectedPage';
import PuplicPage from './pages/PublicPage';
import {
  Home,
  Profile,
  Login,
  Landing,
  RegisterSuccess,
  Recovery,
  Register,
} from './pages';

export function App() {
  return (
    <Routes>
      <Route element={<PuplicPage />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/success" element={<RegisterSuccess />} />
        </Route>
      </Route>
      <Route element={<ProtectedPage />}>
        <Route element={<PrivateLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
