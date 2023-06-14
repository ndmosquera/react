import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Mi sitio web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Acerca de</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Producto 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Producto 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Todos los productos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
