import React, { Component } from 'react';
import * as S from './styled';
import axios from 'axios';
import PropTypes from 'prop-types';

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      infoMessage: { msg: '', error: false }
    };
  }

  setName = event => {
    this.setState({ name: event.target.value });
  };

  setEmail = event => {
    this.setState({ email: event.target.value });
  };

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      infoMessage: { msg: '', error: false }
    });
  };

  addUser = () => {
    const newUser = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(`${baseUrl}/users/createUser`, newUser, {
        headers: {
          'api-token': 'string'
        }
      })
      .then(response => {
        this.setState({
          name: '',
          email: '',
          infoMessage: { msg: 'Usuário cadastrado com sucesso!', error: false }
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          infoMessage: {
            msg: 'Não foi possível efetuar o cadastro.',
            error: true
          }
        });
      });
  };

  render() {
    let info;
    if (this.state.infoMessage.msg) {
      switch (this.state.infoMessage.error) {
        case false:
          info = <S.Info green>{this.state.infoMessage.msg}</S.Info>;
          break;
        case true:
          info = <S.Info>{this.state.infoMessage.msg}</S.Info>;
          break;
        default:
          info = null;
      }
    }

    return (
      <S.FormWrapper>
        <S.Article>
          {this.state.infoMessage.msg ? info : null}
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
          <S.Button onClick={this.addUser}>Enviar</S.Button>
          <S.Button clear onClick={this.clearForm}>
            Limpar campos
          </S.Button>
        </S.ButtonWrapper>
      </S.FormWrapper>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Form;
