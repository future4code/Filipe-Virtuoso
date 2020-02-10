import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h1 className="logo">
          Future<span className="red-text">Tube</span>
        </h1>
        <form className="search-form" action="#">
          <input
            type="text"
            placeholder="Pesquisar"
            name="search-input"
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </nav>
      <main id="main-content">
        <aside className="menu">
          <ul>
            <li className="item">
              <a href="index.html">Home</a>
            </li>
            <li className="item">
              <a href="#">Em alta</a>
            </li>
            <li className="item">
              <a href="#">Inscrições</a>
            </li>
            <li className="item">
              <a href="#">Salvos</a>
            </li>
          </ul>
        </aside>
        <article className="item">
          <a href="watch.html">
            <img
              src="https://gd-paris.sfo2.cdn.digitaloceanspaces.com/2016/04/Paris.jpg"
              alt="Thumbnail do vídeo"
            ></img>
          </a>
          <a href="watch.html">
            <h3>Esse vídeo é muito legal</h3>
          </a>
          <p>
            Esse vídeo é muito leorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti, sequi!
          </p>
        </article>
        <article className="item">
          <a href="watch2.html">
            <img
              src="https://www.southernoregon.org/wp-content/uploads/2018/12/122018_SOVA_IceSkating-768x341.jpg"
              alt="Thumbnail do vídeo"
            ></img>
          </a>
          <a href="watch2.html">
            <h3>Patinando no gelo</h3>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            facere.
          </p>
        </article>
        <article className="item">
          <img
            src="https://ci-prod.imgix.net/upload/galeriadeimagens/00204218.jpg"
            alt="Thumbnail do vídeo"
          ></img>
          <h3>Vlog no Canadá</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            enim.
          </p>
        </article>
        <article className="item">
          <img
            src="https://abrilviagemeturismo.files.wordpress.com/2016/10/paris-verao-franca.jpeg?quality=70&strip=info&w=920"
            alt="Thumbnail do vídeo"
          ></img>
          <h3>Como foi minha viagem a Paris</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            sequi!
          </p>
        </article>
        <article className="item">
          <img
            src="https://hackernoon.com/hn-images/1*qzwKz8AvnUayRgboTdJPJQ.jpeg"
            alt="Thumbnail do vídeo"
          ></img>
          <h3>Trabalhar com infosec</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            facere.
          </p>
        </article>
        <article className="item">
          <img
            src="https://www.incimages.com/uploaded_files/image/970x450/getty_803789400_2000133320009280103_362124.jpg"
            alt="Thumbnail do vídeo"
          ></img>
          <h3>Como se comportar na entrevista de emprego</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            enim.
          </p>
        </article>
      </main>
      <footer id="footer" className="bg-dark">
        <ul class="social-links">
          <li>
            <a href="https://twitter.com/lfvirtuoso" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com/lfvirtuoso" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lfvirtuoso" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
