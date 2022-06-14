import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

import MolloLogo from "../../assets/mollo.png";

const Navbar = () => {
  return (
    <div className="mollo__navbar">
      <div className="mollo__navbar-links">
        <div className="mollo__navbar-links__logo">
          <img src={MolloLogo} alt="mollo-logo" />
        </div>
        <div className="mollo__navbar-links__container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="wpgt3">What is Mollo</a>
          </p>
          <p>
            <a href="possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
