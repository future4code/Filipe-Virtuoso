import React from "react";
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
  // list-style: none;
  margin: 0.75rem;
  align-self: flex-start;
  overflow-y: auto;
  width: 100%;
  height: 30%;
`;

const Line = styled.hr`
  width: 100%;
  margin: 1rem;
`;

const ListTodo = props => {
  return (
    <Article>
      <Title>
        <i class="fas fa-list-ul"></i> Tarefas
      </Title>
      <Label for="filter">Filtro:</Label>
      <Select name="filter">
        <option value="1">Todas</option>
        <option value="2">Pendentes</option>
        <option value="3">Completas</option>
      </Select>
      <Line></Line>
      <List></List>
    </Article>
  );
};

export default ListTodo;
