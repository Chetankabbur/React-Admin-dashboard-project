import React, { useState } from 'react';
import { addUser } from "c:/react/admin-dashboard/src/MockApi/Users";


const UserActions = ({ setUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    status: 'Active',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.role) {
      setError('Name and Role are required.');
      return;
    }

    setError('');

    addUser({
      id: Date.now(), // Simulating a unique ID
      ...formData,
    }).then((newUser) => {
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setFormData({ name: '', role: '', status: 'Active' }); // Reset form
    });
  };

  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={handleAddUser}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter user name"
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            placeholder="Enter role (e.g., Admin, Editor)"
          />
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserActions;
