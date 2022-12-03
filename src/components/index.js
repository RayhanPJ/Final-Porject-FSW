import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";

import Profile from "./Profile";
import Wishlist from "./Wishlist";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Wishlist />
      <Footer />
    </div>
  );
};

export default LandingPage;
