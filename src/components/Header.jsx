import React, { useState } from 'react';
import '../styles/Header.css';
import HikotekLogo from '/Hikotek_Logo.png'


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

  return (
    <nav>
          <div className="nav-container">
            <div className="nav-flex">
              <div className="logo-container">
                <img
                  className="logo"
                  src={HikotekLogo}
                  alt="Hikotek Logo"
                />
                {/* <span className="brand">Hikotek</span> */}
              </div>

              <div className="desktop-menu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Products</a>
                <a href="#">Contact Us</a>
                <a href="#">Distributor Apply</a>
              </div>

              <button
                className="mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Products</a>
              <a href="#">Contact Us</a>
              <a href="#">Distributor Apply</a>
            </div>
          </div>
        </nav>
  );
}

export default Header;