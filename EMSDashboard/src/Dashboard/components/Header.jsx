import React from 'react';
import './Header.css';
import { FaBars } from 'react-icons/fa'; // Import the list icon from react-icons
import profile from '../assets/profile.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <FaBars className="menu-icon" /> {/* List icon on the left */}
      </div>
      <div className="header-right">
        <span className="profile-name">A.B.C.D. Samarasighe</span>
        <img 
          src={profile} 
          alt="Profile" 
          className="profile-pic" 
        /> {/* Profile picture on the right */}
      </div>
    </header>
  );

};

export default Header;
