import React from 'react';
import Logo from './assets/img/logo/logo.png'; // Assuming you have an SVG logo

const Footer = () => {
  return (
    <footer className="tj-footer-area bg-gray-800 text-white">
      <div className="container py-8">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo-box">
              <a href="/">
                <img src={Logo} className="h-12 w-auto mx-auto" alt="Logo" />
              </a>
            </div>
            <div className="footer-menu">
              <nav>
                <ul className="flex justify-center">
                  <li className="mx-4"><a href="#services-section">Services</a></li>
                  <li className="mx-4"><a href="#works-section">Works</a></li>
                  <li className="mx-4"><a href="#resume-section">Resume</a></li>
                  <li className="mx-4"><a href="#skills-section">Skills</a></li>
                  <li className="mx-4"><a href="#testimonials-section">Testimonials</a></li>
                  <li className="mx-4"><a href="#contact-section">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="copy-text">
              <p>&copy; 2024 All rights reserved by <a href="#" target="_blank" rel="noopener noreferrer">ThemeJunction</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
