import React from 'react';
import './Sidebar.css';
import logo from '../assets/logo.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="EMS Logo" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="/dashboard" className="active">Dashboard</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/duties">Duties</a>
        </li>
        <li>
          <a href="/reports">Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
