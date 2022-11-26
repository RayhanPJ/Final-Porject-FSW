import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import NavbarHeader from "../Header/Navbars";
import Link from "next/link";
// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import jwtDecode from "jwt-decode";

async function doLogin({ email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("http://localhost:8000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data.token;
}

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const GOOGLECLIENTID = "1075166577960-qiqbp7khn8e0e50mrgf01hcci3kognqf.apps.googleusercontent.com";

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ username, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => err.message);
  }

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
      <NavbarHeader />
      <br />
      <br />
      <Container>
        <div className="row">
          <div className="col-7"></div>
          <div className="col-5">
            <h2>Masuk</h2>
            <p>
              Belum punya akun? <a href="#">Daftar disini</a>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 h6">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control bg-transparent formInput"
                  id="email"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="your email"
                />
              </div>
              <div className="mb-3 h6">
                <label htmlFor="passwd" className="col-sm-2 col-form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control bg-transparent formInput"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="your password"
                />
              </div>
              <a href="/" className="forgot">
                Back to the site
              </a>
              <br />
              <br />
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
            <Link href="/"/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
