import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';  // Import HomePage
import Dashboard from './pages/Dashboard';  // Import other pages
import UsersPage from './pages/UsersPage';
import RolesPage from './pages/RolesPage';
import PermissionsPage from './pages/PermissionsPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* HomePage route */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/roles" element={<RolesPage />} />
      <Route path="/permissions" element={<PermissionsPage />} />
    </Routes>
  );
};

export default Router;
