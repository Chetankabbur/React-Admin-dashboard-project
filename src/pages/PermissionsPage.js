import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState([]); // State to store permissions

  // Write: Add a new permission
  const addPermission = (newPermissionName) => {
    const newPermission = {
      id: permissions.length + 1, // Generate a new ID
      name: newPermissionName,
    };
    setPermissions([...permissions, newPermission]); // Update state with the new permission
  };

  // Read: Display all permissions
  const displayPermissions = () => {
    return permissions.map((permission) => (
      <li key={permission.id}>
        {permission.name}{" "}
        <button onClick={() => deletePermission(permission.id)}>Delete</button>
      </li>
    ));
  };

  // Delete: Remove a permission by its ID
  const deletePermission = (id) => {
    const updatedPermissions = permissions.filter(
      (permission) => permission.id !== id
    );
    setPermissions(updatedPermissions); // Update state without the deleted permission
  };

  return (
    <div>
      <Header />
      <h1>Permissions Management</h1>

      {/* Input to add a new permission */}
      <div>
        <input
          type="text"
          id="permissionName"
          placeholder="Enter permission name"
        />
        <button
          onClick={() =>
            addPermission(document.getElementById("permissionName").value)
          }
        >
          Add Permission
        </button>
      </div>

      {/* List of permissions */}
      <ul>{displayPermissions()}</ul>
      <Footer />
    </div>
  );
};

export default PermissionsPage;
