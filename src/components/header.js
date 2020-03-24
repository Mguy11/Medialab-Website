import React, { Component } from 'react';
import bicycleHeader from '../images/bicycle-orange-wheels.jpg';
const Header = () => {
  return (
    <header className="header">
        <div className="header__image" style={{ backgroundImage: `url(${bicycleHeader})` }}>
        </div>
    </header>
  );
}

export default Header;