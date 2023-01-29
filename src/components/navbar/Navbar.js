import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logo--text">Siriuss</h1>
      </div>
      <div className="navbar--options">
        <ul className="links">
          <li className="links--link">Home</li>
          <li className="links--link">Our team</li>
          <li className="links--link">Blog</li>

          <li className="links--link">Plans</li>
        </ul>
        <button>Book a free appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
