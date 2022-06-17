import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

import MolloLogo from "../../assets/mollo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
        <div className="mollo__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="mollo__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="mollo__navbar-menu__container scale-up-center">
              <div className="mollo__navbar-menu__container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">What is Mollo?</a>
                </p>
                <p>
                  <a href="#possibility">Open AI</a>
                </p>
                <p>
                  <a href="#features">Case Studies</a>
                </p>
                <p>
                  <a href="#blog">Library</a>
                </p>
              </div>
              <div className="mollo__navbar-menu__container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
