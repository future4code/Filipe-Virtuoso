import React, { Component } from "react";
import "./App.css";
// Components
import Header from "./Components/Header";
import Feed from "./Components/Feed";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Feed
        profileImg={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Ayd5c-kgaeN-QGtUzCEHQi4YjcCTQjIMrVgD5_T_AFWyKAhN"
        }
        username={"lfvirtuoso"}
        imgLink={
          "https://caianomundo-prod.imgix.net/2018/07/iStock-876682026.jpg?fm=pjpg&ixlib=php-1.2.1"
        }
      />

      <Feed
        profileImg={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Ayd5c-kgaeN-QGtUzCEHQi4YjcCTQjIMrVgD5_T_AFWyKAhN"
        }
        username={"virtuoso"}
        imgLink={
          "https://pix10.agoda.net/hotelImages/4877634/0/db7ebdd6192005597fb67a0632c3a153.jpg?s=1024x768"
        }
      />
    </div>
  );
};

export default App;
