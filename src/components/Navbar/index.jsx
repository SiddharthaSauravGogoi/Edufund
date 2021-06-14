import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar className="bg-light justify-content-between">
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      <Nav.Link href="#home">Profile</Nav.Link>
    </Navbar>
  );
}
