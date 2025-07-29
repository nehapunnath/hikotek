import React, { useState } from 'react';
import '../styles/Footer.css';
import HikotekLogo from '/Hikotek_Logo.png';

function Footer() {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Placeholder for subscription logic (e.g., API call)
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-column">
        <img
          src={HikotekLogo}
          alt="Hikotek Logo"
          className="footer-logo"
          onError={(e) => {
            if (e.target.src !== '/fallback-logo.png') {
              e.target.src = '/fallback-logo.png';
              e.target.classList.add('fallback');
            }
          }}
        />
        <h3>Hikotek</h3>
        <p>HSR Layout<br />Bangalore, Karnataka, India</p>
      </div>

      <div className="footer-column">
        <h3>Explore</h3>
        <ul>
          <li><a href="/" aria-label="Go to Home page">Home</a></li>
          <li><a href="/about" aria-label="Go to About Us page">About Us</a></li>
          <li><a href="/products" aria-label="Go to Products page">Products</a></li>
          <li><a href="/contact" aria-label="Go to Contact Us page">Contact Us</a></li>
          <li><a href="/distributor" aria-label="Apply to be a Distributor">Distributor Apply</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Contact</h3>
        <p>Phone: <a href="tel:+919876543210" aria-label="Call Hikotek at +91 9876543210">+91 9876543210</a></p>
        <p>Email: <a href="mailto:example@gmail.com" aria-label="Email Hikotek">example@gmail.com</a></p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Visit Hikotek on Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Visit Hikotek on Facebook">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
        
      </div>

      
    </footer>
  );
}

export default Footer;