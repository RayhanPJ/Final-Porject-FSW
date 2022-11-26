import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="pt-3">
      <Container>
        <div className="row d-flex align-content-center">
          <div className="col">
            <img src="/img/GoTravel.png" alt="GoTravel" />
            <br />
            <p className="text-light">Copyright Go Travel 2022</p>
          </div>
          {/* <!-- social media --> */}
          <div className="col sosmed">
            <p>Connect With Us</p>
            <a href="tes">
              <img src="/img/icon_facebook.png" alt="" />
            </a>
            <a href="tes">
              <img src="/img/icon_instagram.png" alt="" />
            </a>
            <a href="tes">
              <img src="/img/icon_twitter.png" alt="" />
            </a>
            <a href="tes">
              <img src="/img/icon_mail.png" alt="" />
            </a>
            <a href="tes">
              <img src="/img/icon_twitch.png" alt="" />
            </a>
          </div>
          {/* <!-- navigation --> */}
          <div className="col">
            <div className="nav_footer">
              <a href="tes">
                <p>Beranda</p>
              </a>
              <a href="tes">
                <p>Book</p>
              </a>
              <a href="tes">
                <p>About Us</p>
              </a>
              <a href="tes">
                <p>Testimonial</p>
              </a>
            </div>
          </div>
          <div className="col addres">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo Indonesia</p>
            <p>gotravel@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

{
  /* <Navbar>
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
          <Nav className="ms-auto d-flex align-items-center fs-5">
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
    </Navbar> */
}
