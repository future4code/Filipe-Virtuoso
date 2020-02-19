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

  componentDidMount() {
    const newState = JSON.parse(localStorage.getItem("todos"));
    this.setState(newState);
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state));
  }

  compone;

  addItem = (name, description) => {
    const newItem = [
      ...this.state.todo,
      {
        id: Date.now(),
        name: name,
        description: description,
        status: "pending"
      }
    ];
    this.setState({ todo: newItem });
  };

  completeTask = el => {
    if (el.status === "pending") {
      this.setState(prevState => ({
        todo: prevState.todo.map(elm =>
          elm.id === el.id ? { ...elm, status: "done" } : elm
        )
      }));
    } else if (el.status === "done") {
      this.setState(prevState => ({
        todo: prevState.todo.map(elm =>
          elm.id === el.id ? { ...elm, status: "pending" } : elm
        )
      }));
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Navbar />
        <MainContainer>
          <SectionContainer>
            <AddTodo addItem={this.addItem} />
          </SectionContainer>
          <SectionContainer>
            <ListTodo
              todos={this.state.todo}
              completeTask={this.completeTask}
            />
          </SectionContainer>
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
