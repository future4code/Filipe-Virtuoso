import React, { Component } from 'react';
import * as S from './styled';
import axios from 'axios';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';

class ShowPlaylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      name: '',
      artist: '',
      url: ''
    };
  }

  componentDidMount() {
    this.getPlaylistMusics(this.props.playlistId);
  }

  getPlaylistMusics = async id => {
    try {
      const response = await axios.get(
        `${baseUrl}/playlists/getPlaylistMusics/${id}`,
        {
          headers: {
            auth: 'string'
          }
        }
      );
      this.setState({ playlist: response.data.result.musics });
    } catch (error) {
      console.log(error);
    }
  };

  addMusicToPlaylist = async (name, artist, url) => {
    try {
      await axios.put(
        `${baseUrl}/playlists/addMusicToPlaylist`,
        {
          playlistId: this.props.playlistId,
          music: {
            name: name,
            artist: artist,
            url: url
          }
        },
        {
          headers: {
            auth: 'string'
          }
        }
      );
      this.setState({ name: '', artist: '', url: '' });
      this.getPlaylistMusics(this.props.playlistId);
    } catch (error) {
      console.log(error);
    }
  };

  removeMusicFromPlaylist = async (playlistId, musicId) => {
    const deleteMusic = window.confirm(
      'Tem certeza de que deseja remover essa música da playlist?'
    );

    if (deleteMusic) {
      try {
        await axios.delete(
          `${baseUrl}/playlists/removeMusicFromPlaylist?playlistId=${playlistId}&musicId=${musicId}`,
          {
            headers: {
              auth: 'string'
            }
          }
        );
        alert('A música foi removida com sucesso!');
        this.getPlaylistMusics(this.props.playlistId);
      } catch (error) {
        console.log(error);
      }
    }
  };

  getNameInput = event => {
    this.setState({ name: event.target.value });
  };

  getArtistInput = event => {
    this.setState({ artist: event.target.value });
  };

  getUrlInput = event => {
    this.setState({ url: event.target.value });
  };

  render() {
    const showPlaylistMusics = this.state.playlist.map((el, index) => {
      console.log(el.url);
      return (
        <tr key={index}>
          <td>{el.name}</td>
          <td>{el.artist}</td>
          <td>
            <audio controls="controls">
              <source src={el.url} type="audio/mp3" />
            </audio>
          </td>
          <td>
            <S.Action
              bgred
              onClick={() => {
                this.removeMusicFromPlaylist(this.props.playlistId, el.id);
              }}
            >
              <i className="fas fa-trash"></i>
            </S.Action>
          </td>
        </tr>
      );
    });

    return (
      <S.ShowPlaylistWrapper>
        <S.Overlay>
          <S.FormWrapper>
            <S.Title>
              <i className="fas fa-compact-disc"></i> Adicionar música
            </S.Title>
            <S.Label htmlFor="name">Name:</S.Label>
            <S.TextInput
              value={this.state.name}
              onChange={this.getNameInput}
              id="name"
            ></S.TextInput>
            <S.Label htmlFor="artist">Artista:</S.Label>
            <S.TextInput
              value={this.state.artist}
              onChange={this.getArtistInput}
              id="artist"
            ></S.TextInput>
            <S.Label htmlFor="url">Link:</S.Label>
            <S.TextInput
              value={this.state.url}
              onChange={this.getUrlInput}
              id="url"
            ></S.TextInput>
            <S.Button
              onClick={() => {
                this.addMusicToPlaylist(
                  this.state.name,
                  this.state.artist,
                  this.state.url
                );
              }}
            >
              <i className="fas fa-plus-circle"></i> Adicionar
            </S.Button>
          </S.FormWrapper>

          <S.TableWrapper>
            <S.Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Artista</th>
                  <th>Música</th>
                  <th width="15%">Ações</th>
                </tr>
              </thead>
              <tbody>{showPlaylistMusics}</tbody>
            </S.Table>
          </S.TableWrapper>
        </S.Overlay>
      </S.ShowPlaylistWrapper>
    );
  }
}

export default ShowPlaylist;
