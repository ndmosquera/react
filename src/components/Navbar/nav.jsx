import logo_negativo from "./logo-suministros-negativo.png";
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link as NavLink } from "react-router-dom";
import CartWidget from "../CartView/cartWidget";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authContext = useContext(AuthContext)
  const { token } = authContext;

  const session = token ? "LOGOUT" : "LOGIN"

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
        <li><NavLink to="/profile" className="links">PERFIL</NavLink></li>
        <li><NavLink to="/products" className="links">PRODUCTOS</NavLink></li>
        <li><NavLink to="/session" className="links">{session}</NavLink></li>

        <CartWidget></CartWidget>
      </ul>
    </nav>
  );
};

export default Navbar;
