import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
        <nav className="container-fluid px-0">
        <section className="bg-header">
        <img src="img/bg-header.jpg" alt="Bg Header"/>
        </section>
    </nav>
    <nav className="container-fluid navbar navbar-expand-lg navbar-light">
        <div className="container px-0 px-sm-2">
            <a className="navbar-brand fw-bolder fs-2" href="#">Go<span className="text-light">Travel</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end mb-3" id="navbarSupportedContent">
                <hr className="border border-success d-block d-lg-none"/>
                <ul className="navbar-nav">
                    <li className="nav-item px-1 mt-1">
                        <a className="nav-link mt-2" aria-current="page" href="#">Beranda</a>
                    </li>
                    <li className="nav-item px-1 mt-1">
                        <a className="nav-link mt-2" href="#">Book</a>
                    </li>
                    <li className="nav-item px-1 mt-1">
                        <a className="nav-link mt-2" href="#">About Us</a>
                    </li>
                    <li className="nav-item px-1 mt-1">
                        <a className="nav-link mt-2" href="#">Testimonial</a>
                    </li>
                    <li className="nav-item px-1">
                        <a className="nav-link" href="#">
                            <img src="img/profile1.png" alt="Profile 1" className="rounded-circle" height="45"/>
                        </a>
                        <ul className="dropdown-menu bg-dark">
                            <li>
                                <a className="dropdown-item active" href="#">Profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/header">Wishlist</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
  );
};

export default Header;
