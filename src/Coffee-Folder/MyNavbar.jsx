import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GiCoffeeCup } from "react-icons/gi";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark ">
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold fs-4">
          <GiCoffeeCup className="fs-1 mb-3 mx-2 text-warning" />
          Coffee <span className="text-warning ">co</span>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3 fw-bold">
            <Nav.Link href="#home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Product
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Place
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
