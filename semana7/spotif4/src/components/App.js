import React, { Component } from 'react';
import GlobalStyles from '../styles/global';
// Components
import Navbar from './Navbar';
import Home from './Home';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [],
      page: 0
    };
  }

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
