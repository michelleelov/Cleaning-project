import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">Your Logo</a>
          <ul className="nav-menu">
            <li><a href="#">TJÄNSTER</a></li>
            <li><a href="#">OM OSS</a></li>
            <li><a href="#">KONTAKT</a></li>
            <li><a href="#">FÖRETAG</a></li>
          </ul>
          <div className="menu-btn">
          <button>MINA SIDOR</button>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;