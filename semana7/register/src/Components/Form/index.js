import React, { Component } from 'react';
import * as S from './styled';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <S.FormWrapper>
        <S.Article>
          <S.Title>
            <i class="fas fa-user"></i> Informe os dados
          </S.Title>
          <S.Label>Nome:</S.Label>
          <S.Input />
          <S.Label>Email:</S.Label>
          <S.Input />
        </S.Article>
        <S.ButtonWrapper>
          <S.Button>Enviar</S.Button>
          <S.Button clear>Limpar campos</S.Button>
        </S.ButtonWrapper>
      </S.FormWrapper>
    );
  }
}

export default Form;
