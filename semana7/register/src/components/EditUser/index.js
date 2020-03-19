import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as S from './styled';
import axios from 'axios';

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api';

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      id: '',
      name: '',
      email: '',
      infoMessage: { msg: '', error: false }
    };
  }

  componentDidMount() {
    this.getUserById();
  }

  getUserById = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/users/getUser/${this.props.userId}`,
        {
          headers: {
            'api-token': 'string',
            'Content-Type': 'application/json'
          }
        }
      );
      this.setState({
        user: response.data.result,
        id: response.data.result.id,
        name: response.data.result.name,
        email: response.data.result.email
      });
    } catch (error) {
      console.error(error);
    }
  };

  editUser = async () => {

    const newUser = {
      "user": {
        "id": this.state.user.id,
        "name": this.state.name ? this.state.name : this.state.user.name,
        "email": this.state.email ? this.state.email : this.state.user.email
      }
    };
    try {
      await axios.put(`${baseUrl}/users/editUser`, newUser, {
        headers: {
          'api-token': 'string',
          'Content-Type': 'application/json'
        }
      });
      this.props.showUsers();
    } catch (error) {
      console.error(error);
    }

  };

  changeName = event => {
    this.setState({ name: event.target.value });
  };

  changeEmail = event => {
    this.setState({ email: event.target.value });
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
      <S.SectionWrapper>
        <S.Article>
          {this.state.infoMessage.msg ? info : null}
          <S.Title>
            <i className="fas fa-user"></i> Editar usuário
          </S.Title>
          <S.Label htmlFor="id">ID:</S.Label>
          <S.Input id="id" type="text" value={this.state.id} disabled />
          <S.Label htmlFor="name">Nome:</S.Label>
          <S.Input
            id="name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.changeName}
          />
          <S.Label htmlFor="email">Email:</S.Label>
          <S.Input
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.changeEmail}
          />
        </S.Article>
        <S.ButtonWrapper>
          <S.Button onClick={this.editUser}>Salvar</S.Button>
          <S.Button clear onClick={this.props.showUsers}>
            Voltar
          </S.Button>
        </S.ButtonWrapper>
      </S.SectionWrapper>
    );
  }
}

export default UserEdit;
