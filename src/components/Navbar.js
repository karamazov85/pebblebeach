import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="branding">
        <p className="site-name">PEBBLE BEACH</p>
        <p className="site-subtitle">poetry by Adam Farkas</p>
      </div>
      <div className="links-container">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
