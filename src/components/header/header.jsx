import React from "react";
import "./header.css";
import SignUpBtn from "../sign-up-btn/sign-up-btn.jsx";



function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <h3>Web Crafters</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#home">Log in</a></li>
        </ul>
        <SignUpBtn />
      </nav>
    </header>
  );
}

export default Header;  

