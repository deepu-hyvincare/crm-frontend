import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  const history = useHistory()
  const LogoutMe = () => {
    history.push('/') 
  }
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/*   <Link to="/dashboard">DashBoard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="">Logout</Link>*/}
          <LinkContainer to="/dashboard">
            <Nav.Link>DashBoard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Ticket</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick = {LogoutMe}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
