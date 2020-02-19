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
  background: #fffefc;
  outline: 0;
  border: none;
  color: ${props => (props.red ? "red" : "#444")};
  border: 0.5px solid #444;
`;

const Td = styled.td`
  text-decoration: ${props =>
    props.status === "done" ? "line-through" : "none"};
  background: ${props => (props.status === "done" ? "#e3f5fc" : "#fff ")};
`;

const ActionsTd = styled.td`
  background: ${props => (props.status === "done" ? "#e3f5fc" : "#fff ")};
`;

class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "1"
    };
  }

  applyFilter = event => {
    const newValue = event.target.value;
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
              {/* <i class="fas fa-trash-alt"></i> */}
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
