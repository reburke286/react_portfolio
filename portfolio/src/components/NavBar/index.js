import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className="row" id="navContainer">
      <div className="col-md-6 pl-0 pr-0 pb-0">
        <nav className="navbar navbar-light pt-0 pb-0 mt-0 mb-0 pl-0 pr-0">
          <span className="navbar-brand h1" id="h1">
            Becca Burke
          </span>
        </nav>
      </div>
      <div className="col-md-6 pl-0 pr-0 pb-0">
        <ul className="nav justify-content-center" id="nav-item">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
