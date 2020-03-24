import React from 'react';

const Footer = () => {
  return (
    <footer className="section section--footer">
      <div className="footer">
        <ul className="footer__link-items">
          <li className="footer__link-item">
            <a href="#" className="footer__link">Link 1</a>
          </li>
          <li className="footer__link-item">
            <a href="#" className="footer__link">Link 2</a>
          </li>
          <li className="footer__link-item">
            <a href="#" className="footer__link">Link 3</a>
          </li>
          <li className="footer__link-item">
            <a href="#" className="footer__link">Link 4</a>
          </li>
        </ul>
        <div className="footer__content">
          <span className="footer__text">Martijn Bankert</span>
          <span>&copy;&nbsp;2019</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;