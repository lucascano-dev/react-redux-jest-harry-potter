import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import navLogo from "../../assets/images/harry-potter-logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="NavAll">
      <Container className="contenedor-header">
        <Container className="navLogo ">
          <Link to={"/"}>
            <Navbar.Brand href="" className="nav-logo">
              <img
                className="nav-image"
                src={navLogo}
                alt="logo harry potter"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Container>
          <Navbar.Collapse className="nav-links-texto" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Header;
