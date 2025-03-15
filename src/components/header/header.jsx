import React from "react";
import "./header.css";
import HeaderLogo from "../../assets/header-logo"; 

function Header() {
  return (
      <header className="nav-bar">
        <HeaderLogo/> 
        <h3>Web Crafters</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#home">Log in</a></li>
        </ul>
      </header>
  );
}

export default Header;
