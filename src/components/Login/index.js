import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import NavbarHeader from "../navbar";
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { Navigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";
// import logo from "../../logo.svg";

// async function doLogin({ email, password }) {
//   // Gunakan endpoint-mu sendiri
//   const response = await fetch(
//     "https://challenge-8-be-fsw-production.up.railway.app/api/v1/login/",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     }
//   );
//   const data = await response.json();
//   return data.token;
// }

// async function doLoginGoogle(res, email) {
//   // Gunakan endpoint-mu sendiri
//   const response = await fetch(
//     "https://challenge-8-be-fsw-production.up.railway.app/api/v1/google",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password: "",
//         token: res,
//       }),
//     }
//   );
//   const data = await response.json();
//   return data.token;
// }

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const token = localStorage.getItem("token");
  // const GOOGLECLIENTID = "1075166577960-qiqbp7khn8e0e50mrgf01hcci3kognqf.apps.googleusercontent.com";

  // useEffect(() => {
  //   setIsLoggedIn(!!token);
  // }, [token]);

  // function handleSubmit(e) {
  //   setIsLoading(true);
  //   e.preventDefault();
  //   doLogin({ email, password })
  //     .then((token) => localStorage.setItem("token", token))
  //     .catch((err) => err.message)
  //     .finally(() => setIsLoading(false));
  // }

  // const haldleSuccessGoogle = (response) => {
  //   const userData = jwtDecode(response.credential);
  //   // const response = await fetch("https://challenge-8-be-fsw-production.up.railway.app/api/v1/google"
  //   if (response.credential) {
  //     doLoginGoogle(response.credential, userData.email)
  //       .then((token) => {
  //         localStorage.setItem("token", token);
  //         setIsLoggedIn(token);
  //       })
  //       .catch((err) => err.message)
  //       .finally(() => setIsLoading(false));
  //   }
  // };

  // function handleLogout(e) {
  //   setIsLoading(true);
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setIsLoggedIn(false);
  //   setIsLoading(false);
  // }

  return (
    <div className="bgLogin">
      <NavbarHeader/>
      <br/>
      <br/>
      <Container>
        <div className="row">
          <div className="col-7"></div>
          <div className="col-5">
            <h2>Masuk</h2>
            <p>
              Belum punya akun? <a href="#">Daftar disini</a>
            </p>
            <form>
              <div className="mb-3 h6">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control bg-transparent formInput"
                  id="exampleFormControlInput1"
                  placeholder="your email"
                />
              </div>
              <div className="mb-3 h6">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control bg-transparent formInput"
                  id="inputPassword"
                  placeholder="your password"
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-light shadow py-2 mb-5 bg-body rounded"
                  type="submit"
                >
                  <b>Masuk</b>
                </button>
              </div>
              <p>Atau masuk dengan</p>
              <div className="d-grid gap-2"></div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
