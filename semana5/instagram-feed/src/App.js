import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import FlexContainer from "./Components/FlexContainer/FlexContainer";
import Post from "./Components/Post/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FlexContainer>
        <Post
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Ayd5c-kgaeN-QGtUzCEHQi4YjcCTQjIMrVgD5_T_AFWyKAhN"
          username="lfvirtuoso"
          imageLink="https://live.staticflickr.com/3375/5763475824_27cf26d01f_c.jpg "
        />
        <Post
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Ayd5c-kgaeN-QGtUzCEHQi4YjcCTQjIMrVgD5_T_AFWyKAhN"
          username="future4"
          imageLink="https://live.staticflickr.com/4139/4739833401_9e2218fa1f_z.jpg"
        />
        <Post
          link="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Ayd5c-kgaeN-QGtUzCEHQi4YjcCTQjIMrVgD5_T_AFWyKAhN"
          username="flaviaviza"
          imageLink="https://live.staticflickr.com/4143/4739852277_db13fb395c_z.jpg"
        />
      </FlexContainer>
    </div>
  );
}

export default App;
