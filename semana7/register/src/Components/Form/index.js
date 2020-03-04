import React, { Component } from 'react';
import * as S from './styled';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  setName = event => {
    this.setState({ name: event.target.value });
  };

  setEmail = event => {
    this.setState({ email: event.target.value });
  };

  clearForm = () => {
    this.setState({ name: '', email: '' });
  };

  render() {
    return (
      <S.FormWrapper>
        <S.Article>
          <S.Title>
            <i className="fas fa-user"></i> Informe os dados
          </S.Title>
          <S.Label>Nome:</S.Label>
          <S.Input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.setName}
          />
          <S.Label>Email:</S.Label>
          <S.Input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.setEmail}
          />
        </S.Article>
        <S.ButtonWrapper>
          <S.Button>Enviar</S.Button>
          <S.Button clear onClick={this.clearForm}>
            Limpar campos
          </S.Button>
        </S.ButtonWrapper>
      </S.FormWrapper>
    );
  }
}

export default Form;
