import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function NavbarHeader() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="/">
          <img
            src="img/GoTravel.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto d-flex align-items-center h5">
            <Nav.Link className="text-dark" href="/">Beranda</Nav.Link>
            <Nav.Link className="mx-3 text-dark" href="#features">Book</Nav.Link>
            <Nav.Link className="mx-3 text-dark" href="#pricing">About Us</Nav.Link>
            <Nav.Link className="mx-3 text-dark" href="#pricing">Testimonial</Nav.Link>
            <Nav.Link className="text-dark" href="/login">
              <Button
                size="md"
                variant="secondary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Login"}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
