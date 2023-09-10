import React from 'react';
import logo from "../assets/logo/LOGOnb.png";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="logo-footer-container">
        <img className="logo-footer" src={logo} alt="logo Kasa"  />
        <p className="copyright">&#169;  2020 Kasa.All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;