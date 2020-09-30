import React from "react";
import { Navbar,Nav } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/shop">Shop</Nav.Link>
      <Nav.Link href="/">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
};
export default Header;
