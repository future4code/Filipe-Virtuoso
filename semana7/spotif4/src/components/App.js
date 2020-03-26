import React, { Component } from 'react';
import GlobalStyles from '../styles/global';
// Components
import Navbar from './Navbar';
import Home from './Home';
import Playlists from './Playlists';
import ShowPlaylist from './ShowPlaylist';

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
