import React, { Component } from 'react';
import * as S from './styled';
import axios from 'axios';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      name: '',
      search: ''
    };
  }

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = async () => {
    try {
      const response = await axios.get(`${baseUrl}/playlists/getAllPlaylists`, {
        headers: {
          auth: 'string'
        }
      });
      this.setState({ playlists: response.data.result.list });
    } catch (error) {
      console.log(error);
    }
  };

  createPlaylist = () => {
    axios
      .post(
        `${baseUrl}/playlists/createPlaylist`,
        { name: this.state.name },
        {
          headers: {
            auth: 'string'
          }
        }
      )
      .then(() => {
        this.setState({ name: '' });
        this.getPlaylists();
      })
      .catch(error => {
        console.log(error);
      });
  };

  deletePlaylist = async id => {
    const deletePlaylist = window.confirm(
      'Tem certeza de que deseja apagar essa playlist?'
    );

    if (deletePlaylist) {
      try {
        await axios.delete(
          `${baseUrl}/playlists/deletePlaylist?playlistId=${id}`,
          {
            headers: {
              auth: 'string'
            }
          }
        );
        alert('Playlist deletada com sucesso');
        this.getPlaylists();
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  getNameInput = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const showAllPlaylists = this.state.playlists.map((el, index) => {
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
                this.deletePlaylist(el.id);
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
            <S.Button onClick={this.createPlaylist}>Criar</S.Button>
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
