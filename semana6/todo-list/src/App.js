import React, { Component } from "react";
import "./App.css";
// Components
import MainContainer from "./Components/MainContainer/MainContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SectionContainer from "./Components/SectionContainer/SectionContainer";
import AddTodo from "./Components/AddTodo/AddTodo";
import ListTodo from "./Components/ListTodo/ListTodo";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  table, th, td {
    border: 1px solid #b8b8b8;
  }

  th {
    background: #444;
    color: #f4f4f4;
    padding: 0.2rem;
  }

  td {
    padding: 0.2rem;
  }
`;

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

  addItem = (name, description) => {
    if (name && description) {
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
    } else {
      alert("Preencha os campos corretamente!");
    }
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

  clearBoard = () => {
    if (window.confirm("Tem certeza que deseja excluir todas as tarefas?")) {
      this.setState({ todo: [] });
    }
  };

  removeTask = el => {
    const newList = this.state.todo.filter(elm => elm.id !== el.id);
    this.setState({ todo: newList });
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
            <ListTodo
              todos={this.state.todo}
              completeTask={this.completeTask}
              removeTask={this.removeTask}
              clearBoard={this.clearBoard}
            />
          </SectionContainer>
        </MainContainer>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
