import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-brand">
          <i className="fa-brands fa-pagelines"></i>
          <h1><a href="/home">Ecoyaan</a></h1>
        </div>
        {window.innerWidth < 998 ? (
          // Hamburger menu for smaller screens
          <div className="hamburger-menu" onClick={toggleMenu}><i class="fa-solid fa-bars"></i>
            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          // Regular navigation links for larger screens
          <div className="navbar-links">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li>Sell On Ecoyaan</li>
              <li>Careers</li>
            </ul>
          </div>
        )}

        {/* Hamburger menu links */}
        {isOpen && window.innerWidth < 998 && (
          <div className="hamburger-menu-links">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li>Sell On Ecoyaan</li>
              <li>Careers</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
