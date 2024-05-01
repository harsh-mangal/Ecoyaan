import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 998);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 998);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-brand">
          <i className="fa-brands fa-pagelines"></i>
          <h1><Link to="/home">Ecoyaan</Link></h1>
        </div>

        {isSmallScreen ? (
          <div className="hamburger-menu" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
            <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div className="navbar-links">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li>Sell On Ecoyaan</li>
              <li>Careers</li>
            </ul>
          </div>
        )}

        {isOpen && isSmallScreen && (
          <div className="hamburger-menu-links">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
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
