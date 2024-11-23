import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <ul>
          <li><Link to="/users">User Management</Link></li>
          <br></br>
          <li><Link to="/roles">Role Management</Link></li>
          <br></br>
          <li><Link to="/permissions">Permissions Management</Link></li>
        </ul>   
    </div>
  );
};

export default Dashboard;
