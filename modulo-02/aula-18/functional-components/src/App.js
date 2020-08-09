import React from "react";
import "./App.css";
// Components
import BigCard from "./Components/BigCard";
import SmallCard from "./Components/SmallCard";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <BigCard
        imgLink={"https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"}
        name={"Filipe Virtuoso"}
        description={"Lorem ipsum, something"}
      />
      <SmallCard
        icon={"fas fa-envelope-open-text"}
        label="Email:"
        text={"meuemail@gmail.com"}
      />
      <SmallCard
        icon={"fas fa-home"}
        label="Endereço:"
        text={"Rua do Futuro, 132"}
      />
      <Button
        link={"https://facebook.com"}
        icon={"fas fa-arrow-down"}
        text={"Ler Mais..."}
      />
      <h2 class="work-exp">Experiências profissionais:</h2>
      <BigCard
        imgLink={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSl5Xame48W1TlD4p0ABAlLBwFRRAECxiWmLw&usqp=CAU"
        }
        name={"Consultor"}
        description={"Lorem ipsum, something"}
      />
      <BigCard
        imgLink={
          "https://png.pngtree.com/png-clipart/20190604/original/pngtree-journalists-live-coverage-png-image_1638620.jpg"
        }
        name={"Jornalista"}
        description={"Lorem ipsum, something"}
      />
      <h2 class="work-exp">Minhas redes sociais:</h2>
      <Button
        link={"https://facebook.com"}
        icon={"fab fa-facebook-f  "}
        text={"Facebook"}
      />
    </div>
  );
}

export default App;
