import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const PesanTiket = () => {
  return (
    <div style={{backgroundColor: "#F0F0F0"}}>
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
        {/* data diri */}
        <div className="row">
          <div className="col-lg-8">
            <h3 style={{borderStyle: "solid",backgroundColor: "#ffffff"}}>Pemesan</h3>
            <form style={{borderStyle: "solid", backgroundColor: "#ffffff"}}>
              <h3>Data Diri</h3>
              <div className="col-lg-12">
                <label>Nama Lengkap</label><br/>
                <input type={"text"} style={{width: "200px", backgroundColor: "#ffffff"}}></input>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <label>Kursi</label><br/>
                  <input type={"text"} style={{width: "140px", backgroundColor: "#ffffff"}}></input>
                </div>
                <div className="col-lg-4">
                  <label>Makanan</label><br/>
                  <input type={"text"} style={{width: "140px", backgroundColor: "#ffff"}}></input>
                </div>
                <div className="col-lg-4">
                  <label>Bagasi</label><br/>
                  <input type={"text"} style={{width: "140px", backgroundColor: "#ffff"}}></input>
                </div>
              </div>
              <h3 style={{marginTop: "30px"}}>Informasi Kontak</h3>
              <div className="row">
                <div className="col-lg-6">
                  <label>Email</label><br/>
                  <input type={"email"} style={{backgroundColor: "#ffff"}}></input><br/>
                  <label>Re-Email</label><br/>
                  <input type={"email"} style={{backgroundColor: "#ffff"}}></input>
                </div>
                <div className="col-lg-6">
                  <label>Home Phone</label><br/>
                  <input type={"tel"} style={{backgroundColor: "#ffffff"}}></input><br/>
                  <label>Mobile Phone</label><br/>
                  <input type={"tel"} style={{backgroundColor: "#ffffff"}}></input>
                </div>
              </div>
            </form>
          </div>
          {/* detail pesanan & total */}
          <div className="col-lg-4">
            <div style={{borderStyle: "solid", backgroundColor: "#ffffff"}}>
              <p>Penerbangan</p>
              <p>Garuda Airlines</p>
              <p>dd/mm/yy</p>
              <p>Jakarta (JKT) - Bali (DPS)</p>
              <p>15.30 WIB - 18.00 WIB</p>
              <p>2 jam 30 menit</p>
              <p>Tiket Rp 850.000</p>
              <p>Layanan Rp 250.000</p>
              <p>Total Rp 1.150.000</p>
              <button>Lanjut Pembayaran</button>
            </div>
          </div>
        </div>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default PesanTiket;
