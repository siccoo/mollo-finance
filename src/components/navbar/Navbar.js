import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import ChevronDown from "../../images/arrow-down.svg";
import Logo from "../../images/mollo.png";
import MolloWallet from "../../images/mollo-wallet.svg";
import MolloFinance from "../../images/mollo-finance.svg";
import MolloCard from "../../images/mollo-card.svg";

const Navbar = () => {
    return (
            <section className="nav-section">
                <div className="">
                    <nav className="navbar navbar-expand-lg navbar-light nav-bg justify-content-sm-start fixed-top" >
                    <Link to={'/'} className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto">
                        <img src={Logo} alt='SalesRuby' className="home-logo" />
                    </Link>
                    <button className="navbar-toggler align-self-start hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{marginTop: 5 + 'px'}}>
                        <span className="line"></span> 
                        <span className="line"></span> 
                        <span className="line"></span>
                    </button>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse">
                            <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="/" data-toggle="dropdown">Platform <ChevronDown /></NavLink>
                                <div className="dropdown-menu">
                                    <Link to="/about" className="dropdown-item">
                                        <img src={MolloWallet} alt="nav-icon" className="nav-icon" /> {" "}
                                            Ruby HR
                                        <p>Sequentia helps scale the capabilities of your <br/>team from prospecting to deal closure.</p>
                                    </Link>
                                    <Link to="/contact" className="dropdown-item">
                                        <img src={MolloFinance} alt="nav-icon" className="nav-icon" />{" "}
                                            Ruby Academy
                                        <p>Sequentia helps scale the capabilities of your <br/>team from prospecting to deal closure.</p>
                                    </Link>
                                    {/* <Link to="/careers" className="dropdown-item">Careers</Link>    */}
                                </div>  
                            </li><br />
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/" data-toggle="dropdown">About Us <ChevronDown /></Link>
                                <div className="dropdown-menu">
                                    <Link to="/about" className="dropdown-item">Who We Are</Link>
                                    <Link to="/contact" className="dropdown-item">Contact Us</Link>
                                    <Link to="/careers" className="dropdown-item">Careers</Link>   
                                </div>
                            </li><br />
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="/" data-toggle="dropdown">Resources <ChevronDown /></Link>
                                <div className="dropdown-menu">
                                    <Link to="/" className="dropdown-item">eBooks</Link>
                                    <Link to="https://courses.salesruby.com/" className="dropdown-item">Ruby Courses</Link>
                                    <Link to="/" className="dropdown-item">Sales Evaluation Tool</Link>   
                                </div>
                            </li><br />
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li><br />
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-btn1" href="/">Log In</Link>
                                </li><br />
                                <li className="nav-item">
                                    <Link className="nav-btn" href="/">Request a demo</Link>
                                </li><br />
                            </ul>
                        </div>
                    </nav> 
                </div>
        </section>
        // <div>Navbar</div>
    )
}

export default Navbar;