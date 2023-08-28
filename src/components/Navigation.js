import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='logo-container'>
      <img className="logo" src="./LOGO.png" alt="logo Kasa"  />
      <div className="link-container">
        <ul className='ul-link-pages'>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className='li-link-page'>ACCUEIL</li>
          </NavLink>
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li className='li-link-page'>A PROPOS</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;