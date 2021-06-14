import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar className="bg-light justify-content-between">
      <Link to="/">MF Data</Link>
      <Nav.Link href="#home">Profile</Nav.Link>
    </Navbar>
  );
}
