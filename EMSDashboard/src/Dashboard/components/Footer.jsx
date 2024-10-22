import React from 'react';
import './Footer.css';
import Logo from '../assets/logo.png'; // Make sure the path is correct

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="ems">
          <img src={Logo} alt="University of Ruhuna Logo" className="footer-logo" />
          <div className="ems-info">
            <p>Please obtain an email and password from</p>
            <p>the EMS administrator in the Science Faculty of</p>
            <p>University of Ruhuna</p>
          </div>
        </div>
        
        <div className="contact-info">
          <h4>Contact Us:</h4>
         
            <p>Department of Computer Science</p>
            <p>Faculty of Science, University of Ruhuna</p>
            <p>Phone: 041 2222681</p>
            <p>Email: <a href="mailto:ems@sci.ruh.ac.lk">ems@sci.ruh.ac.lk</a></p>
          
        </div>
      </div>
      <div className="footer-bottom-text">
        <p>© {new Date().getFullYear()} Department of Computer Science</p>
      </div>
    </footer>
  );
};

export default Footer;
