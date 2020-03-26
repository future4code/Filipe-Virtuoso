import React, { Component } from 'react';
import GlobalStyles from '../styles/global';
import axios from 'axios';
// Components
import Navbar from './Navbar';
import Home from './Home';
import Playlists from './Playlists';
import ShowPlaylist from './ShowPlaylist';

const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [],
      playlistId: 0,
      search: '',
      page: 0
    };
  }

  getPlaylistById = async name => {
    try {
      const response = await axios.get(
        `${baseUrl}/playlists/searchPlaylist?playlistName=${name}`,
        {
          headers: {
            auth: 'string'
          }
        }
      );
      this.setState({ playlists: response.data.result.playlist });
    } catch (error) {
      console.log(error);
    }
  };

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

  createPlaylist = name => {
    axios
      .post(
        `${baseUrl}/playlists/createPlaylist`,
        { name: name },
        {
          headers: {
            auth: 'string'
          }
        }
      )
      .then(() => {
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

  goToCreatePage = () => {
    this.setState({ page: 1 });
  };

  goToHomePage = () => {
    this.setState({ page: 0 });
  };

  goToPlaylistPage = id => {
    this.setState({ page: 2, playlistId: id });
  };

  getSearchInput = text => {
    this.setState({ search: text });
  };

  render() {
    let show;
    switch (this.state.page) {
      case 0:
        show = <Home />;
        break;
      case 1:
        show = (
          <Playlists
            getPlaylists={this.getPlaylists}
            playlists={this.state.playlists}
            createPlaylist={this.createPlaylist}
            deletePlaylist={this.deletePlaylist}
            search={this.state.search}
            goToPlaylistPage={this.goToPlaylistPage}
          />
        );
        break;
      case 2:
        show = <ShowPlaylist playlistId={this.state.playlistId} />;
        break;
      default:
        show = null;
    }

    return (
      <div className="App">
        <GlobalStyles />
        <Navbar
          getPlaylistById={this.getPlaylistById}
          page={this.state.page}
          goToCreatePage={this.goToCreatePage}
          goToHome={this.goToHomePage}
          getSearch={this.getSearchInput}
        />
        {show}
      </div>
    );
  }
}

export default App;
