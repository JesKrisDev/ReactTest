import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/*  <Navbar.Brand href="#Home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
          <Nav.Link as={Link} to="./">Home</Nav.Link>
            <Nav.Link as={Link} to="./components/Page1">Page1</Nav.Link>
            <Nav.Link as={Link} to="./components/Page2">Page2</Nav.Link>
            <Nav.Link as={Link} to="./components/Page3">Page3</Nav.Link>
            <Nav.Link as={Link} to="./components/Page4">Page4</Nav.Link>
            <Nav.Link as={Link} to="./components/Page5">Page5</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default ColorSchemesExample;