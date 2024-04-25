import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-one">
     
        <div className="address">
          <h1>Registered Address:</h1>
          <p>
            1-N-12T-781/1 Sri Krishna Vilasa, Urvastores, Ashoknagar(MR),
            Mangalore, Dakshina Kannada- 575006, Karnataka, India
          </p>
          </div>
          <div className="address">
          <h1>Legal Business Name:</h1>
          <p>
           <b className="b-companyname">Kindkarma E-Retail Private Limited</b>  
            <br />
        CIN: U47912KA2023PTC182592
            Telephone: +91 9980490777
          </p>
          </div>
  
       
          
        
        <div className="form">
          <p>Subscribe to receive updates on blogs, 
            <br />future launches and more !</p>
          <input type="text" placeholder="Your Email Address" />
          <button>Subscribe!</button>
        </div>
      </div>
      <div className="footer-two">
        <div className="footer-links">
          <ul>
            <li>© 2023 Ecoyaan.All rights reserved.</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="socialLinks">
          <ul>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
