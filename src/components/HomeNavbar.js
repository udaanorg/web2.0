import React from "react";
import { Navbar } from "react-bootstrap";
import "../styles/Navbar.css";

const HomeNavbar = ({ page }) => {
  return (
    <div className="Nav">
      <Navbar className="home_nav">
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/landing/LOGO.png"}
            width="175"
            height="175"
            alt=""
          />{" "}
          <span className="pb-3 title">UDAAN</span>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text
            className={`${page === "graphs" ? "d-none" : "home_nav_end"}`}
          >
            Signed in as:
            <a href="#" className="ml-2 mr-5">
              Alias
            </a>
            <button className="btn btn-primary mr-5">Logout</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
