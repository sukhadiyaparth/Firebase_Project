import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" cl>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/list">Addlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
