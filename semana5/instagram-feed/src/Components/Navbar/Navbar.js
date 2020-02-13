import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <i class="fab fa-instagram"></i>
        <span> Instagram</span>
      </h1>
      <input className="search-input" placeholder="Pesquisar" type="text" />
      <ul className="buttons-list">
        <li>
          <i class="far fa-compass"></i>
        </li>
        <li>
          <i class="far fa-heart"></i>
        </li>
        <li>
          <i class="far fa-user"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
