import React, { Component } from "react";
import "./App.css";
// Components
import MainContainer from "./Components/MainContainer/MainContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SectionContainer from "./Components/SectionContainer/SectionContainer";
import AddTodo from "./Components/AddTodo/AddTodo";
import ListTodo from "./Components/ListTodo/ListTodo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }

  addItem = (name, description) => {
    const newItem = [
      ...this.state.todo,
      { name: name, description: description }
    ];
    this.setState({ todo: newItem });
    console.log(this.state.todo);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContainer>
          <SectionContainer>
            <AddTodo addItem={this.addItem} />
          </SectionContainer>
          <SectionContainer>
            <ListTodo />
          </SectionContainer>
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
