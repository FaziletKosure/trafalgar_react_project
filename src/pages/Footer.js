import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
     
     <footer>
     
      <img src="./images/Group-trafalgar.png" alt="" className="footer-right-img" />
      <div id="footer-container">
      <img src="./images/Group-trafalgar.png" alt="" className="footer-left-img" />
        <div className="footer-left">
          <img src="./images/Ellipse 8.png" alt="" />
          <p className="T-logo">T</p>
          <p>Trafalgar</p>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="copyright">©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div className="footer-center">
          <ul className="company">
            <span>Company</span>

            <li>About</li>
            <li>Testimonials</li>
            <li>Find a doctor</li>
            <li>Apps</li>
          </ul>
          <ul className="region">
            <span>Region</span>

            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
          <ul className="help">
            <span>Help</span>
            <li>Help center</li>
            <li>Contact Support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </div>
      </div>
    </footer>
    
    </div>
  );
}

export default Footer;