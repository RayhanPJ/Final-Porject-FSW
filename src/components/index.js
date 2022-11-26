import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./Main";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default LandingPage;
