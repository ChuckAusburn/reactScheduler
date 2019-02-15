import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon
            icon="gamepad"
          />
        </Link>
        <div>
        <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent41" aria-controls="navbarSupportedContent41" aria-expanded="false" aria-label="Toggle navigation">
          <span className="white-text"><i className="fa fa-bars fa-1x"></i></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent41">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/saved"
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              >
                Saved Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
