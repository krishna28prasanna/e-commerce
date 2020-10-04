import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
import {selectCurrentUser} from "../Redux/User.Selector"
import { Link } from "react-router-dom";
import "./Header.css"
const Header = (props) => {
  console.log("header", props);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">E-Commerce</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link to="/shop">Shop</Link></Nav.Link>
            {props.currentUser ? (
              <Nav.Link
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link><Link to="/signup">Sign In</Link></Nav.Link>
            )}
            <CartIcon />
            <Nav.Link><Link to="/">Contact Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse> 
      </Navbar>
      <CartDropdown />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps)(Header);
