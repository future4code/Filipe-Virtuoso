import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import axios from 'axios';

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api';
class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: '',
      searchedUser: [],
      infoMessage: { msg: '', error: false }
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users/getAllUsers`, {
        headers: {
          'api-token': 'string',
          'Content-Type': 'application/json'
        }
      });
      this.setState({ users: response.data.result });
    } catch (error) {
      console.error(error);
    }
  };

  searchUser = async name => {
    try {
      const response = await axios.get(`${baseUrl}/users/searchUsers`, {
        headers: {
          'api-token': 'string',
          'Content-Type': 'application/json'
        },
        params: {
          name: name
        }
      });
      this.setState({ searchedUser: response.data.result });
    } catch (error) {
      console.error(error);
    }
  };

  removeUser = async id => {
    if (window.confirm('Tem certeza de que deseja remover esse usuário?')) {
      try {
        axios.delete(`${baseUrl}/users/deleteUser?`, {
          headers: {
            'api-token': 'string'
          },
          params: {
            id: id
          }
        });
        this.setState({
          infoMessage: { msg: 'Usuário removido com sucesso!', error: false }
        });
      } catch (error) {
        this.setState({
          infoMessage: {
            msg: 'Não foi possível remover o usuário!',
            error: true
          }
        });
      }
    }
  };

  changeSearch = event => {
    this.setState({ search: event.target.value });
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

    const showUsers = this.state.users.map((el, index) => {
      return (
        <tr key={index}>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>
            <S.Button
              onClick={() => {
                this.props.showUserInfo(el.id);
              }}
            >
              <i className="fas fa-edit"></i>
            </S.Button>
            <S.Button
              onClick={() => {
                this.removeUser(el.id);
              }}
              red
            >
              <i className="fas fa-trash"></i>
            </S.Button>
          </td>
        </tr>
      );
    });

    let user;
    if (this.state.searchedUser) {
      user = this.state.searchedUser.map((el, index) => {
        return (
          <tr key={index}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>
              <S.Button
                onClick={() => {
                  this.props.showUserInfo(el.id);
                }}
              >
                <i className="fas fa-edit"></i>
              </S.Button>
              <S.Button
                onClick={() => {
                  this.removeUser(el.id);
                }}
                red
              >
                <i className="fas fa-trash"></i>
              </S.Button>
            </td>
          </tr>
        );
      });
    }

    console.log(this.state.searchedUser);
    return (
      <S.UsersWrapper>
        {this.state.infoMessage.msg ? info : null}
        <S.SearchWrapper>
          <S.Input
            placeholder="Informe um nome de usuário"
            value={this.state.search}
            onChange={this.changeSearch}
          />
          <S.SearchButton
            onClick={() => {
              this.searchUser(this.state.search);
            }}
          >
            <i className="fas fa-search"></i>
          </S.SearchButton>
        </S.SearchWrapper>
        <S.Table>
          <thead>
            <tr>
              <th width="40%">ID</th>
              <th>NOME</th>
              <th width="15%">Açoes</th>
            </tr>
          </thead>
          <tbody>{this.state.searchedUser.length > 0 ? user : showUsers}</tbody>
        </S.Table>
      </S.UsersWrapper>
    );
  }
}

ListUsers.propTypes = {
  users: PropTypes.array
};

export default ListUsers;
