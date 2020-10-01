import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { auth } from "../../firebase/firebase.utils";
import {connect} from "react-redux"
const Header = (props) => {
  console.log("header",props)
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
            {props.currentUser ? (
              <Nav.Link
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link href="/signup">Sign In</Nav.Link>
            )}

            <Nav.Link href="/">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = state =>{
  return{
    currentUser : state.user.currentUser
  }
}
export default connect(mapStateToProps)(Header);
