import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We built the Cosmos App to develop a community of People that want to discover, learn, and educate the worldwide web about celestial objects! 
            We plan on making many iterations to this app.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li className="quicklinks"><a href="/">Home</a></li>
            <li className="quicklinks"><a href="/about">About</a></li>
            <li className="quicklinks"><a href="/contact">Contact</a></li>
          </ul>
        </div>

      
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Cosmos App. All rights reserved by Alexander Tsiklidis</p>
      </div>
    </footer>
  );
}

export default Footer;