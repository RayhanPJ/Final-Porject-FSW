import React, { useState } from "react";
import { Container } from "react-bootstrap";

const InfoPenerbangan = () => {
  const [show, setShow] = useState(true);
  return (
    <Container>
      <div className="row">
        <div className="col">
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
        <div className="col">
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
        <div className="col">
          <label className="form-label" htmlFor="typeDriver">
            Pergi
          </label>
          <input
            show={show}
            type="date"
            name="date"
            id="date"
            className="form-control border-dark"
            placeholder="Pilih Tanggal"
          />
        </div>
        {!show && (
          <div className="col">
            <label className="form-label" htmlFor="typeDriver">
              Pulang
            </label>
            <input
              show={show}
              type="date"
              name="date"
              id="date"
              className="form-control border-dark"
              placeholder="Pilih Tanggal"
            />
          </div>
        )}
        <div className="col">
          <label className="form-label" htmlFor="typeDriver">
            Pilih
          </label>
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
        <div className="col d-grid gap-2">
          <button
            className="btn btn-light shadow py-2 mb-5 bg-body rounded"
            type="submit"
          >
            <b>Cari Tiket</b>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default InfoPenerbangan;
