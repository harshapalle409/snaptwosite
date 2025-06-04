import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      <div className="nav-logo">SnapToSite</div>
      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#samples">Work</a>
        <a href="#reviews">Reviews</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
