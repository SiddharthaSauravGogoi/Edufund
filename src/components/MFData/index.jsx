import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../Navbar";

export default function MFData() {
  useEffect(() => {}, []);
  return (
    <Container>
      <Navigation />
      <Link to="/"> Go back</Link>
    </Container>
  );
}
