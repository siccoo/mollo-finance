import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

import MolloLogo from "../../assets/mollo.png"

const Navbar = () => {
  return (
    <div className="mollo__navbar">
      <div className="mollo__navbar-links">
        <div className="mollo__navbar-links__logo">
          <img src={MolloLogo} alt="mollo-logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
