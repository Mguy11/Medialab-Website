import React, { Component } from 'react';
import HeaderImage from '../images/bevrijdingsfestival.jpg';
import logo from '../images/Medialab-logo-trans.png';
const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${HeaderImage})` }}>
      <div className="wrap">
        <div className="header__content">
          <h1 className="header__title">L'escargo de la Liberté</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;