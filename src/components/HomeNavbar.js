import React, { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import "../styles/Navbar.css";

const HomeNavbar = ({ page }) => {
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/user/logout", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({}),
  //   }).then((resp) => {
  //     console.log(resp);
  //   });
  // }, []);

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
            <a href="#" className="ml-2 mr-5 text-decoration-none">
              Kitchen1
            </a>
            <button className="btn btn-primary mr-5">Logout</button>
          </Navbar.Text>
          <button className="btn btn-primary mr-5 home_nav_end">
            Add Logs
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;
