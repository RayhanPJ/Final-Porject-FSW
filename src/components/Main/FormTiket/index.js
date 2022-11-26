import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const FormTiket = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="bgForm">
      <main className="py-5 px-5">
        <Container>
          <div className="parent">
            <div className="div1 d-grid gap-2">
              <button type="button" className="btn rounded-0 fs-5">
                <img src="/img/plane1.png" alt="" />
                <br />
                <p>Penerbangan</p>
              </button>
            </div>
            <div className="div2 d-grid gap-2">
              <button type="button" className="btn rounded-0">
                <b>Booking</b>
              </button>
            </div>
            <div className="div3">
              <a href="/login">
                <button type="button" className="btn rounded-0 btn-me">
                  <p className="fs-4">Login</p>
                </button>
              </a>
            </div>
            <div className="div4">
              <label className="form-label" htmlFor="typeDriver">
                Dari
              </label>
              <div className="input-group mb-3">
                <select
                  id="supir"
                  name="supir"
                  className="form-select bg-transparent border-dark"
                >
                  <option value="">Pilih Tipe Driver</option>
                  <option value="true">Dengan Sopir</option>
                  <option value="false">Tanpa Sopir (Lepas Tangan)</option>
                </select>
              </div>
            </div>
            <div className="div5 ">
              <label className="form-label" htmlFor="typeDriver">
                Ke
              </label>
              <div className="input-group mb-3">
                <select
                  id="supir"
                  name="supir"
                  className="form-select bg-transparent border-dark"
                >
                  <option value="">Pilih Tipe Driver</option>
                  <option value="true">Dengan Sopir</option>
                  <option value="false">Tanpa Sopir (Lepas Tangan)</option>
                </select>
              </div>
            </div>
            <div className="div6">
              <p>Pilih :</p>
              <div className="d-flex">
                <div class="form-check">
                  <input
                    onClick={() => setShow(true)}
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Sekali Jalan
                  </label>
                </div>
                <div class="form-check">
                  <input
                    onClick={() => setShow(false)}
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Pulang Pergi
                  </label>
                </div>
              </div>
            </div>
            <div className="div7">
              <label className="form-label" htmlFor="typeDriver">
                Date :
              </label>
              <div className="input-group mb-3">
                <input
                  show={show}
                  type="date"
                  name="date"
                  id="date"
                  className="form-control border-dark"
                  placeholder="Pilih Tanggal"
                />
                {!show && (
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="form-control border-dark"
                    placeholder="Pilih Tanggal"
                  />
                )}
              </div>
            </div>
            <div className="div8">
              <label className="form-label" htmlFor="tipeDriver">
                Penumpang
              </label>
              <input
                type="number"
                name="penumpang"
                id="penumpang"
                className="form-control bg-transparent border-dark" 
                placeholder="Jumlah Penumpang"
              />
            </div>
            <div className="div9">
              <label className="form-label" htmlFor="typeDriver">
                Tipe Driver
              </label>
              <div className="input-group mb-3">
                <select
                  id="supir"
                  name="supir"
                  className="form-select bg-transparent"
                >
                  <option value="">Pilih Tipe Driver</option>
                  <option value="true">Dengan Sopir</option>
                  <option value="false">Tanpa Sopir (Lepas Tangan)</option>
                </select>
              </div>
            </div>
            <div className="div10 d-grid">
              <div className="d-grid gap-2" style={{position: "relative", top : "30px" }}>
                <button
                  className="btn btn-light shadow py-2 mb-5 bg-body rounded"
                  type="submit"
                >
                  <b>Cari Tiket</b>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default FormTiket;
