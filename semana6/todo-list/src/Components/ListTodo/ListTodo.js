import React, { Component } from "react";
import styled from "styled-components";
import "./ListTodo.css";

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

const Line = styled.hr`
  width: 100%;
  margin: 1rem;
`;

const Div = styled.div`
  width: 100%;
  height: 240px;
  overflow-y: scroll;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #444.;
`;

const Button = styled.button`
  padding: 0.7rem;
  margin: 0.1rem;
  background: ${props => (props.bgred ? "#ffe6ea" : "#fffefc")};
  outline: 0;
  border: none;
  color: ${props => (props.red ? "red" : "#444")};
  border: 0.5px solid #444;
  cursor: pointer;
`;

const Td = styled.td`
  text-decoration: ${props =>
    props.status === "done" ? "line-through" : "none"};
  background: ${props => (props.status === "done" ? "#e3f5fc" : "#fff ")};
`;

const ActionsTd = styled.td`
  background: ${props => (props.status === "done" ? "#e3f5fc" : "#fff ")};
`;

const FilterSection = styled.section``;

class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 1,
      done: 0,
      pending: 0,
      all: 1
    };
  }

  applyFilter = num => {
    const newValue = num;
    this.setState({ filter: newValue });
  };

  render() {
    const showAllItems = this.props.todos.map((el, index) => {
      return (
        <tr key={index}>
          <Td status={el.status}>{el.name}</Td>
          <Td status={el.status}>{el.description}</Td>
          <ActionsTd status={el.status}>
            <Button
              onClick={() => {
                this.props.completeTask(el);
              }}
            >
              <i class="fas fa-check-square"></i>
            </Button>
            <Button>
              <i class="fas fa-edit"></i>
            </Button>
            <Button
              onClick={() => {
                this.props.removeTask(el);
              }}
              red
            >
              <i class="fas fa-trash"></i>
            </Button>
          </ActionsTd>
        </tr>
      );
    });

    const getPendingItems = this.props.todos
      .filter(el => {
        return el.status === "pending";
      })
      .map((el, index) => {
        return (
          <tr key={index}>
            <Td status={el.status}>{el.name}</Td>
            <Td status={el.status}>{el.description}</Td>
            <ActionsTd status={el.status}>
              <Button
                onClick={() => {
                  this.props.completeTask(el);
                }}
              >
                <i class="fas fa-check-square"></i>
              </Button>
              <Button>
                <i class="fas fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.removeTask(el);
                }}
                red
              >
                <i class="fas fa-trash"></i>
              </Button>
            </ActionsTd>
          </tr>
        );
      });

    const getDoneItems = this.props.todos
      .filter(el => {
        return el.status === "done";
      })
      .map((el, index) => {
        return (
          <tr key={index}>
            <Td status={el.status}>{el.name}</Td>
            <Td status={el.status}>{el.description}</Td>
            <ActionsTd status={el.status}>
              <Button
                onClick={() => {
                  this.props.completeTask(el);
                }}
              >
                <i class="fas fa-check-square"></i>
              </Button>
              <Button>
                <i class="fas fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.removeTask(el);
                }}
                red
              >
                <i class="fas fa-trash"></i>
              </Button>
            </ActionsTd>
          </tr>
        );
      });

    let list;
    switch (this.state.filter) {
      case 1:
        list = showAllItems;
        break;
      case 2:
        list = getPendingItems;
        break;
      case 3:
        list = getDoneItems;
    }

    return (
      <Article>
        <Title>
          <i class="fas fa-list-ul"></i> Tarefas
        </Title>
        <FilterSection>
          <Button
            onClick={() => {
              this.applyFilter(1);
              this.setState({ done: 0, pending: 0, all: 1 });
            }}
            value={this.state.all}
            className={this.state.all === 1 ? "active" : ""}
          >
            Todas
          </Button>
          <Button
            onClick={() => {
              this.applyFilter(2);
              this.setState({ pending: 1, done: 0, all: 0 });
            }}
            value={this.state.pending}
            className={this.state.pending === 1 ? "active" : ""}
          >
            Pendentes
          </Button>
          <Button
            onClick={() => {
              this.applyFilter(3);
              this.setState({ done: 1, pending: 0, all: 0 });
            }}
            value={this.state.done}
            className={this.state.done === 1 ? "active" : ""}
          >
            Concluídas
          </Button>
          <Button
            onClick={() => {
              this.props.clearBoard();
            }}
            bgred
          >
            <i class="fas fa-minus-circle"></i> Limpar tarefas
          </Button>
        </FilterSection>
        <Line></Line>
        <Div>
          <Table>
            <thead>
              <tr>
                <th width="30%">Nome</th>
                <th>Descrição</th>
                <th width="22%">Açoes</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </Table>
        </Div>
      </Article>
    );
  }
}

export default ListTodo;
