import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav id="navbar" className="navbar">
        <h1 className="logo">
          <a href="index.html">
            <i class="fab fa-youtube"></i> FUTURE TUBE
          </a>
        </h1>
        <div class="search-input">
          <input type="text" placeholder="Pesquise um vídeo" />
          <a href="index.html">
            <i class="fas fa-search"></i>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="index.html" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="index.html">Em Alta</a>
          </li>
          <li>
            <a href="index.html">Meu canal</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="container">
          <aside className="sidebar">
            <ul>
              <li>
                <a href="index.html">item 1</a>
              </li>
              <li>
                <a href="index.html">item 2</a>
              </li>
              <li>
                <a href="index.html">item 3</a>
              </li>
              <li>
                <a href="index.html">item 4</a>
              </li>
              <li>
                <a href="index.html">item 5</a>
              </li>
            </ul>
          </aside>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </main>
      <footer className="footer">Feito com amor por Filipe Virtuoso</footer>
    </>
  );
}

export default App;
