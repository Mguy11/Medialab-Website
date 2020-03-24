import React, { Component } from 'react';
import bicycleHeader from '../images/bicycle-orange-wheels.jpg';
const Header = () => {
  return (
    <header className="header">
        <div className="header__image" style={{ backgroundImage: `url(${bicycleHeader})` }}>
          <div className="header__overlay"></div>
          <h1 className="header__title">L'escargo de la Liberté</h1>
        </div>
    </header>
  );
}

export default Header;