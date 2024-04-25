import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-brand">
        <i class="fa-brands fa-pagelines"></i>
          <h1><a href="/home">Ecoyaan</a></h1>
        </div>
        <div className="navbar-links">
          <ul>
            <li><a href="/home">Home</a></li>
            <li> <a href="/about">About Us</a></li>
            <li>Sell On Ecoyaan</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
