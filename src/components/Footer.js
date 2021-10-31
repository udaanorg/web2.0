import React from "react";
import "../styles/Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = ({ page }) => {
  return (
    <>
      <div
        className={`${
          page === "home" ? "home_footer footer-dark" : "footer-dark"
        }`}
      >
        <div className="row">
          <div className="col-sm-6 col-md-3 item">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Graphs</a>
              </li>
              <li>
                <a href="#">Data analysis</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 item">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">What we do</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 item text">
            <h3>UDAAN</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </div>
          <div className="col item social">
            <a href="#">
              <FacebookIcon className="icon" />
            </a>
            <a href="#">
              <TwitterIcon className="icon" />
            </a>
            <a href="#">
              <YouTubeIcon className="icon" />
            </a>
            <a href="#">
              <InstagramIcon className="icon" />
            </a>
          </div>
        </div>
        <p className="copyright">UDAAN © 2021</p>
      </div>
    </>
  );
};

export default Footer;
