import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import LeftSideNav from "../leftSideNav/LeftSideNav";
import Image from "react-bootstrap/Image";
import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar
        className="py-3"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <Link
              className="text-decoration-none text-bg-info px-3 py-2 rounded-3 fw-semibold"
              to="/"
            >
              Dragon News
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user ? (
              <Nav>
                <Nav.Link className="text-light" eventKey={2} href="#memes">
                  {user.displayName ? user.displayName : user.email}
                </Nav.Link>
                <Nav.Link href="#deets">
                  {user.photoURL ? (
                    <Image
                      roundedCircle
                      style={{ height: "30px" }}
                      src={user.photoURL}
                    ></Image>
                  ) : (
                    <FaUser></FaUser>
                  )}
                </Nav.Link>
                <Nav.Link>
                  <Button onClick={handleLogout} variant="light" size="sm">
                    Logout
                  </Button>{" "}
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="d-flex gap-2 ">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </Nav>
            )}
            <Nav className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
