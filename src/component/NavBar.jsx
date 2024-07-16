import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
  return (
    <>
    <Navbar expand="lg" className=" fw-bolder sticky-top" style={{minHeight:"10vh"}} >
      <Container>
        <Navbar.Brand href="#home" className="text-light fs-3 text-uppercase">Keppuraja</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto order float-end">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#about" className="text-light">About</Nav.Link>
            <Nav.Link href="#skills" className="text-light">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar