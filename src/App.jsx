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
  Buy,
  Favorites,
  New,
  Notifications,
  About,
  Privacy,
  Terms,
  Contact,
  Settings,
} from './pages';

export function App() {
  return (
    <Routes>
      <Route element={<PuplicPage />}>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/success" element={<RegisterSuccess />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
      <Route element={<ProtectedPage />}>
        <Route element={<PrivateLayout />}>
          {/* General */}
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:name" element={<Profile />} />
          <Route path="/shop" element={<Buy />} />
          {/* Personal user */}
          <Route path="/new" element={<New />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}
