import React from 'react'
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
export default function NavBox() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">astro</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Colors</Nav.Link>
      <Nav.Link href="#pricing">Designs</Nav.Link>
      <NavDropdown title="Arts" id="collasible-nav-dropdown">
        {/* <NavDropdown.Item href="#action/3.1">NFTs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Auto-Generative Arts</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Assets</NavDropdown.Item> */}
        {/* <NavDropdown.Divider /> */}
        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}
