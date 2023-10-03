import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo/LOGO.png";

const Navigation = () => {
  
  return (
    <div className='logo-container'>
      <img className="logo" src={logo} alt="logo Kasa"  />
      <div className="link-container">
        <ul className='ul-link-pages'>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className='li-link-page'>Accueil</li>
          </NavLink>
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className='li-link-page'>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;