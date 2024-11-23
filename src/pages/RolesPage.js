import React, { useState, useEffect } from 'react';
import { getRoles } from '../MockApi/Roles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RolesPage = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles().then(setRoles);
  }, []);

  return (
    <div>
      <Header />
      <h2>Role Management</h2>
      <button>Add Role</button>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default RolesPage;
