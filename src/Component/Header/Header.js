import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
import {selectCurrentUser} from "../Redux/Reducers/User/User.Selector"
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
            <Link to="/">Home</Link>
          </Nav>
          <Nav>
            <Link to="/shop">Shop</Link>
            <CartIcon />
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
