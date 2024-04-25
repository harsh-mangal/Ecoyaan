import React from "react";

import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const history = useNavigate();

  const handleButtonClick = () => {
    history('/about');
  };
  return (
    <div>
      {" "}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Buy Less,
            <br /> Buy Better!</h1>
          <p>Choose purposeful products for a greener world.</p>
          <button className="hero-button" onClick={handleButtonClick}>
            About Us
          </button>
        </div>
        <img
          src="https://www.yonature.com/wp-content/uploads/2019/05/green-4123698_1920-576x1024.jpg"
          className="img-hero"
          alt=""
        />
      </div>
      {/* <div className="hero-section">
    <div className="hero-content">
    <h1>Follow us on Instagram</h1>
    <p>For climate news, lifestyle tips, & updates</p>
    <button className='hero-button'>Follow Us</button>
    </div>
    <img src="https://th.bing.com/th/id/OIP.e0zhduO-QpZPwS4BO1wwxAHaF7?w=1280&h=1024&rs=1&pid=ImgDetMain" className="img-hero"alt="" />
  </div>
  <div className="hero-section">
    <div className="hero-content">
    <h1 className='h1-q'>Are you a business that truly cares about sustainability?</h1>
    <p>Authentic source of truth for your sustainability needs.</p>
    <button className='hero-button'>About Us</button>
    </div>
    <img src="https://th.bing.com/th/id/OIP.e0zhduO-QpZPwS4BO1wwxAHaF7?w=1280&h=1024&rs=1&pid=ImgDetMain" className="img-hero"alt="" />
  </div> */}
    </div>
  );
};

export default HeroSection;
