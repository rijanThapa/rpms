import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

function HomeNav() {
  const [navbarStyle, setNavbarStyle] = useState({});
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const productsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarStyle({ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 });
      } else {
        setNavbarStyle({ position: "relative" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseOver = () => {
    setShowProductsDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowProductsDropdown(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={navbarStyle}>
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <NavDropdown
              title="Products"
              id="basic-nav-dropdown"
              show={showProductsDropdown}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              ref={productsRef}
            >
              <NavDropdown.Item as={Link} to="/noodles">Noodles</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/biscuits">Biscuits</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
