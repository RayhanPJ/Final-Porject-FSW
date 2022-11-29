import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const PesanTiket = () => {
  return (
    <div>
      <Header />
      <Container>
        <nav
          class="navbar navbar-expand-lg"
          style={{ backgroundColor: "#4E4E4E" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#" style={{ color: "#FFFFFF" }}>
              Booking
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="#"
                    style={{ color: "#FFFFFF" }}
                  >
                    Pilih Tiket
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "#FFFFFF" }}>
                    Pesan Tiket
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    href="#"
                    style={{ color: "#FFFFFF" }}
                  >
                    Bayar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-lg-6">
            <h3>Data Diri</h3>
            <form>
              <div className="col-lg-12">
                <label>Nama Lengkap</label><br/>
                <input type={"text"} style={{width: "200px"}}></input>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <label>Kursi</label><br/>
                  <input type={"text"} style={{width: "140px"}}></input>
                </div>
                <div className="col-lg-4">
                  <label>Makanan</label><br/>
                  <input type={"text"} style={{width: "140px"}}></input>
                </div>
                <div className="col-lg-4">
                  <label>Bagasi</label><br/>
                  <input type={"text"} style={{width: "140px"}}></input>
                </div>
              </div>
              <h3>Informasi Kontak</h3>
              <div className="row">
                <div className="col-lg-6">
                  <label>Email</label><br/>
                  <input type={"email"}></input><br/>
                  <label>Re-Email</label><br/>
                  <input type={"email"}></input>
                </div>
                <div className="col-lg-6">
                  <label>Home Phone</label>
                  <input type={"tel"}></input>
                  <label>Mobile Phone</label>
                  <input type={"tel"}></input>
                </div>
              </div>
              
            </form>
          </div>
          <div className="col-lg-6">

          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default PesanTiket;
