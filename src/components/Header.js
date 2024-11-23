import React from 'react';
import './Header.css'; // Import the styles for the header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Admin Dashboard</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#users">Users</a></li>
          <li><a href="#roles">Roles</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
