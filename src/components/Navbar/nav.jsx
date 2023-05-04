import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo_negativo from "./logo-suministros-negativo.png"
import CartWidget from "../cart/cartWidget"

export default function NavBar() {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const navStyle = {
    backgroundColor: "#0E9747",
    display: "flex",
    justifyContent: 'space-around', 
    alingItems: "center",
    padding: ".5em"
  };
  const navLinkStyle = {
    color: "white",
    fontWeight: "bolder",
    paddingLeft: "5rem",
  };

  const linkHoverStyle = {
    backgroundColor: 'red',
    cursor: 'pointer'
  }



  return (
    <div style={navStyle}>
      <Navbar expand="lg" className='my-nav'>
        <Container className='nav-container'>
          <Navbar.Brand href="#home">
            <img src={logo_negativo} width={200} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#brands" style={navLinkStyle}>MARCAS</Nav.Link>
              <Nav.Link href="#store" style={navLinkStyle}>TRAYECTORIA</Nav.Link>
              <NavDropdown title="SOCIO DE NEGOCIO" id="basic-nav-dropdown" style={navLinkStyle}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Categoria Especial
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contacto" style={navLinkStyle}>CONTACTO</Nav.Link>
              <Nav.Link href="#login" style={navLinkStyle}>LOGIN</Nav.Link>
              <Nav.Link href="#cart" style={navLinkStyle}>
              <CartWidget></CartWidget>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

