import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const BayarTiket = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="row" style={{paddingTop: "10px"}}>
          <div className="col-lg-12">
          <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#4E4E4E"}}>
            <div class="container-fluid">
              <a class="navbar-brand" href="#" style={{color: "#FFFFFF"}}>Booking</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto ">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#" style={{color: "#FFFFFF"}}>Pilih Tiket</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" style={{color: "#FFFFFF"}}>Pesan Tiket</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#" style={{color: "#FFFFFF"}}>Bayar</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
            <h2 style={{marginTop: "40px"}}>
              <img src="img/park-tickets-couple 1.png" alt="tiket" style={{paddingRight: "15px"}}/>
              Metode Pengiriman
            </h2>
            <section style={{marginLeft: "60px",paddingLeft: "15px"}}>
              <h3>Tiket Elektronik</h3>
              <p>
                Inilah cara hemat waktu dan tanpa kertas untuk bepergian. Anda
                akan menerima referensi tiket elektronik melalui e-mail.
              </p>
            </section>
            <h2 style={{paddingTop: "20px"}}>
              <img src="/img/Vector.png" alt="" style={{paddingRight: "15px"}} />
              Pembayaran
            </h2>
            <div style={{textAlign: "center", width: "1050px",height: "70px", marginLeft: "70px",backgroundColor: "#9f9f9f",borderRadius: "8px"}}>
              <p style={{paddingTop: "20px"}}>Jumlah yang harus di bayar adalah IDR 1,921,020</p>
            </div>
            <section style={{marginLeft: "60px",paddingLeft: "15px"}}>
              <h3>Pembayaran Online</h3>
              <p>
                Pembayaran Online Anda akan dialihkan ke halaman eksternal bila
                mengklik tombol Konfirmasi perjalanan. Metode pembayaran yang
                tersedia antara lain: 
              </p>
              <ul>
                <li>
                  <p>Internet Banking</p>
                </li>
                <li>
                  <p>Kartu Kredit (Visa, Master, JCB)</p>
                </li>
                <li>
                  <p>Kartu Debit</p>
                </li>
              </ul>
            </section>
            <button className="btn_bayar" style={{borderRadius: "26px", width: "250px",height: "50px",marginLeft: "450px",color: "#ffff"}}>Bayar</button>
          </div>
        </div>
      </Container>
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

export default BayarTiket;
