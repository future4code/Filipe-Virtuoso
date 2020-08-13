import React from "react";
import "./style.css";

function Header() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <a href="#">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </h1>
      <ul className="menu">
        <li>
          <a href="">
            <i class="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-telegram-plane"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="far fa-compass"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="far fa-heart"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
