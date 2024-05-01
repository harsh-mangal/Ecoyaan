import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  var currheight = document.documentElement.clientHeight;
window.onresize = function(){
    if(currheight != document.documentElement.clientHeight) {
      window.location.reload();
    }    
}
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-brand">
          <i className="fa-brands fa-pagelines"></i>
          <h1><Link to="/home">Ecoyaan</Link></h1>
        </div>
        {window.innerWidth < 998 ? (
         
          <div className="hamburger-menu" onClick={toggleMenu}><i class="fa-solid fa-bars"></i>
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
              <li> <Link to="/about">About Us</Link></li>
              <li>Sell On Ecoyaan</li>
             
              <li>Careers</li>
            </ul>
          </div>
        )}

       
        {isOpen && window.innerWidth < 998 && (
          <div className="hamburger-menu-links">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li> <Link to="/about">About Us</Link></li>
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
