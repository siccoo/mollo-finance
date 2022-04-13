import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/mollo.png";
import "./index.css";

export const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(false);
  };

  return (
    <div className="navbar-section">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md">
          <Link className="navbar-brand d-flex w-50 mr-auto" to="/">
            <img src={Logo} alt="" className="home-logo" />
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!menu ? true : false}
            aria-label="Toggle navigation"
            type="button"
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <div
            className={`${menu ? "collapse" : ""} navbar-collapse w-100`}
            id="navbarsExample09"
          >
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                {/* <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/"
                    exact
                    activeClassName="active"
                  >
                    Bills Payment
                  </NavLink>
                </li> */}
                <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/enterprise"
                    exact
                    activeClassName="active"
                  >
                    Enterprise partner
                  </NavLink>
                </li>
                <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/bushire"
                    exact
                    activeClassName="active"
                  >
                    Hire a Bus
                  </NavLink>
                </li>
                <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/pickup"
                    exact
                    activeClassName="active"
                  >
                    Pick Up services
                  </NavLink>
                </li>
                <li className="nav-item navmenu">
                  <NavLink
                    className="nav-link"
                    to="/busterminal"
                    exact
                    activeClassName="active"
                  >
                    Bus Terminal
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link to="/entry" className="blue-btn-nav">
                    Sign In / Sign Up
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;