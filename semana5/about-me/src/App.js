import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BigCard from "./Components/BigCard/BigCard";
import SmallCard from "./Components/SmallCard/SmallCard";
import ImageButton from "./Components/ImageButton/ImageButton";
import PageSection from "./Components/PageSection/PageSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageSection title="Dados pessoais:">
        <BigCard
          imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Ayd5c-kgaeN-QGtUzCEHQi4YjcCTQjIMrVgD5_T_AFWyKAhN"
          imgDescription="Minha foto"
          title="Future4"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
        <SmallCard class="far fa-envelope" text="lfvirtuoso@gmail.com" />
        <SmallCard class="far fa-address-card" text="Ipatinga - MG" />
        <ImageButton class="fas fa-arrow-down" text="Ver mais" />
      </PageSection>
      <PageSection title="Experiências profissionais">
        <BigCard
          imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR-BZbVF0B68r7T4uqT0hnlxwB1NnNC7-khJ2cpO9TNDYLNjeK"
          imgDescription="Logo da empresa"
          title="Future4"
          text="Lorem ipsum dolor sit amet"
        />
        <BigCard
          imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPgipuRpia1mhMRRw6UKTMv4ef946vi3MniZn7av-2mt_sYReW"
          imgDescription="Logo da empresa"
          title="Random"
          text="Lorem ipsum dolor sit amet"
        />
      </PageSection>
      <PageSection title="Minhas redes sociais">
        <ImageButton class="fab fa-instagram" text="Instagram" />
      </PageSection>
      <Footer />
    </div>
  );
}

export default App;
