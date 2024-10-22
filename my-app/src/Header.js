import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Header.css';

function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <div className={isSidebarOpen ? "shifted" : ""}>
      {/* Navbar with fixed position */}
      <Navbar className="header" expand="lg">
        <Button variant="primary" onClick={toggleSidebar}>
          ☰
        </Button>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>A.B.C.D.Samarasinghe</Navbar.Text>
          <div className="profile-vector"></div>
        </Navbar.Collapse>
      </Navbar>

      {/* Adding padding below the Navbar to avoid overlap */}
      <div className="header-spacing"></div>

      {/* Fixed row for Duties */}
      <div className="duties-row">
        <h5>Duties</h5>
      </div>
    </div>
  );
}

export default Header; 
