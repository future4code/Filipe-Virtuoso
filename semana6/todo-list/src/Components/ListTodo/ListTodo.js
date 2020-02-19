import React, { Component } from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #444;
  text-transform: uppercase;
`;

const Label = styled.label`
  align-self: flex-start;
  text-transform: uppercase;
`;

const Select = styled.select`
  padding: 0.75rem;
  margin: 0.75rem;
  width: 100%;
  background: #f4f4f4;
  outline: 0;
  text-transform: uppercase;
`;

const List = styled.ul`
  margin: 0.75rem;
  align-self: flex-start;
  overflow-y: auto;
  width: 100%;
  height: 230px;
`;

const Line = styled.hr`
  width: 100%;
  margin: 1rem;
`;

const ListElement = styled.li`
  margin: 0.5rem 1.1rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  text-decoration: ${props =>
    props.status === "done" ? "line-through" : "none"};
`;

class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "1"
    };
  }

  // componentDidMount() {
  //   console.log("Acabei de ser montado!");
  // }

  // componentDidUpdate() {
  //   const dadosArmazenadosString = localStorage.getItem("valoresDosInputs");
  //   const novoEstado = JSON.parse(dadosArmazenadosString);
  //   this.setState(novoEstado);

  //   const state = JSON.stringify(this.state);
  //   localStorage.setItem("todos", state);

  //   console.log("Componente atualizado");
  //   console.log(estadoComoString);
  // }

  componentWillUnmount() {
    // console.log("Epa, estou indo embora.");
    // const estadoComoString = JSON.stringify(this.state);
    // localStorage.setItem("valoresDosInputs", estadoComoString);
  }

  applyFilter = event => {
    const newValue = event.target.value;
    this.setState({ filter: newValue });
  };

  render() {
    const showAllItems = this.props.todos.map((el, index) => {
      return (
        <ListElement
          onClick={() => {
            this.props.completeTask(el);
          }}
          key={index}
          status={el.status}
        >
          {el.name}
        </ListElement>
      );
    });

    const getPendingItems = this.props.todos
      .filter(el => {
        return el.status === "pending";
      })
      .map((el, index) => {
        return (
          <ListElement
            onClick={() => {
              this.props.completeTask(el);
            }}
            key={index}
            status={el.status}
          >
            {el.name}
          </ListElement>
        );
      });

    const getDoneItems = this.props.todos
      .filter(el => {
        return el.status === "done";
      })
      .map((el, index) => {
        return (
          <ListElement
            onClick={() => {
              this.props.completeTask(el);
            }}
            key={index}
            status={el.status}
          >
            {el.name}
          </ListElement>
        );
      });

    let list;
    switch (this.state.filter) {
      case "1":
        list = showAllItems;
        break;
      case "2":
        list = getPendingItems;
        break;
      case "3":
        list = getDoneItems;
    }

    return (
      <Article>
        <Title>
          <i class="fas fa-list-ul"></i> Tarefas
        </Title>
        <Label for="filter">Filtro:</Label>
        <Select
          name="filter"
          value={this.state.filter}
          onChange={this.applyFilter}
        >
          <option value="1">Todas</option>
          <option value="2">Pendentes</option>
          <option value="3">Completas</option>
        </Select>
        <Line></Line>
        <List>{list}</List>
      </Article>
    );
  }
}

export default ListTodo;
