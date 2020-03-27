import React, { Component } from 'react';
import * as S from './styled';

class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.props.getPlaylists();
  }

  getNameInput = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const showAllPlaylists = this.props.playlists.map((el, index) => {
      return (
        <tr key={index}>
          <td>{el.name}</td>
          <td>
            <S.Action
              onClick={() => {
                this.props.goToPlaylistPage(el.id);
              }}
            >
              <i className="fas fa-play-circle"></i>
            </S.Action>
            <S.Action
              bgred
              onClick={() => {
                this.props.deletePlaylist(el.id);
              }}
            >
              <i className="fas fa-trash"></i>
            </S.Action>
          </td>
        </tr>
      );
    });

    return (
      <S.PlaylistsWrapper>
        <S.Overlay>
          <S.FormWrapper>
            <S.Title>
              <i className="fas fa-play-circle"></i> Criar nova playlist
            </S.Title>
            <S.Label>Nome:</S.Label>
            <S.CreateInput
              id="name"
              value={this.state.name}
              onChange={this.getNameInput}
            ></S.CreateInput>
            <S.Button
              onClick={() => {
                this.props.createPlaylist(this.state.name);
                this.setState({ name: '' });
              }}
            >
              Criar
            </S.Button>
          </S.FormWrapper>

          <S.TableWrapper>
            <S.Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th width="15%">Ações</th>
                </tr>
              </thead>
              <tbody>{showAllPlaylists}</tbody>
            </S.Table>
          </S.TableWrapper>
        </S.Overlay>
      </S.PlaylistsWrapper>
    );
  }
}

export default Playlists;
