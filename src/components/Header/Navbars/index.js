import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';

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
    // <Navbar expand="lg">
    //   <Container>
    //     <Navbar.Brand className="d-flex align-items-center" href="/">
    //       <img
    //         src="img/GoTravel.png"
    //         className="d-inline-block align-top"
    //         alt="React Bootstrap logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //       <Nav className="ms-auto d-flex align-items-center fs-5">
    //         <Nav.Link className="text-dark" href="/">Beranda</Nav.Link>
    //         <Nav.Link className="mx-3 text-dark" href="#features">Book</Nav.Link>
    //         <Nav.Link className="mx-3 text-dark" href="#pricing">About Us</Nav.Link>
    //         <Nav.Link className="mx-3 text-dark" href="#pricing">Testimonial</Nav.Link>
    //         <Nav.Link className="text-dark" href="/login">
    //           <Button
    //             size="md"
    //             variant="secondary"
    //             disabled={isLoading}
    //             onClick={!isLoading ? handleClick : null}
    //           >
    //             {isLoading ? "Loading…" : "Login"}
    //           </Button>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="img/GoTravel.png"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="text-dark">Beranda</Nav.Link>
                  <Nav.Link href="#action2" className="mx-3 text-dark">Books</Nav.Link>
                  <Nav.Link href="#aboutUs" className="mx-3 text-dark">About Us</Nav.Link>
                  <Nav.Link href="#aboutUs" className="mx-3 text-dark">Testimonial</Nav.Link>
                  <Nav.Link href="/login" className="text-dark">
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarHeader;
