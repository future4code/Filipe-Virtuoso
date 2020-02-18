import React, { Component } from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.75rem;
  border-radius: 5px;
  border: 1px solid #444;
  outline: 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin: 0.75rem;
  border-radius: 5px;
  border: 1px solid #444;
  outline: 0;
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

const ButtonArea = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  outline: 0;
  margin: 0.5rem 0.5rem 0 0;
  padding: 1.2rem;
  background: #d9f2ff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
`;

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
  }

  changeName = event => {
    this.setState({ name: event.target.value });
  };

  changeDescription = event => {
    this.setState({ description: event.target.value });
  };

  render() {
    return (
      <Article>
        <Title>
          <i class="fas fa-plus-circle"></i> Adicionar atividade
        </Title>
        <Label for="name">Nome:</Label>
        <Input
          name="name"
          type="text"
          onChange={this.changeName}
          value={this.state.name}
        ></Input>
        <Label for="description">Descrição:</Label>
        <TextArea
          id="description"
          rows="6"
          value={this.state.description}
          onChange={this.changeDescription}
        ></TextArea>
        <ButtonArea>
          <Button
            onClick={() => {
              this.props.addItem(this.state.name, this.state.description);
            }}
          >
            <i class="fas fa-plus-circle"></i> Adicionar
          </Button>
          <Button>
            <i class="fas fa-eraser"></i> Limpar campos
          </Button>
        </ButtonArea>
      </Article>
    );
  }
}

export default AddTodo;
