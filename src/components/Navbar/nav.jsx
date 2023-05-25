import logo_negativo from "./logo-suministros-negativo.png";
import React, { useState } from 'react';
import './Navbar.css';
import { Link as NavLink } from "react-router-dom";
import CartWidget from "../cart/cartWidget";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo_negativo} className="logo-navbar" alt="Logo" />
      </NavLink>

      {/* HAMBURGER LINES */}
      <div className={`hamburger ${isMenuOpen ? 'lines-rotate' : ''}`} onClick={handleMenuToggle}>
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </div>

      {/* LINKS */}
      <ul id="nav-links" className={`nav-links ${isMenuOpen ? 'hide' : ''}`}>
        <li><NavLink to="/brands" className="links">MARCAS</NavLink></li>
        <li><NavLink to="/trajectory" className="links">TRAYECTORIA</NavLink></li>
        <li><NavLink to="/parther" className="links">SOCIO DE NEGOCIO</NavLink></li>
        <li><NavLink to="/contact" className="links">CONTACTO</NavLink></li>

        <CartWidget></CartWidget>
      </ul>
    </nav>
  );
};

export default Navbar;
