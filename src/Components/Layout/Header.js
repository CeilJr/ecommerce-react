import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = ()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img src="https://media.discordapp.net/attachments/1006251776799944754/1039360897979789353/unknown.png?width=1025&height=344" 
        alt="imagem do grupo seis" height="35px"></img>
        <Navbar.Brand href="/Home">Grupo Seis</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="#pricing">SobreNos</Nav.Link>
            <NavDropdown title="Cadastro" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/NotFound">categoria</NavDropdown.Item>
              <NavDropdown.Item href="/Products">produtos</NavDropdown.Item>
              <NavDropdown.Item href="/NotFound">clientes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/NotFound">Pedidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/NotFound">Ajuda</Nav.Link>
            <Nav.Link eventKey={2} href="/Login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

