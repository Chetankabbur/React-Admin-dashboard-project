import React, { useState, useEffect } from 'react';
import { getUsers } from '../MockApi/Users';
import UserActions from '../components/UserManagement/UserActions';
import Header from '../components/Header';
import Footer from '../components/Footer';


const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <Header />
      <h2>User Management</h2>
      <UserActions setUsers={setUsers} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
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

export default UsersPage;
