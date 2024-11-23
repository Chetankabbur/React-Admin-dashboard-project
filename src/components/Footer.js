// src/components/Footer.js

import React from 'react';
import './Footer.css';  // Ensure you have styles in Footer.css
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-square"></i> {/* Facebook Icon */}
          </a>
          <a href="https://github.com/login" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i> {/* GitHub Icon */}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square"></i> {/* LinkedIn Icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i> {/* Instagram Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
