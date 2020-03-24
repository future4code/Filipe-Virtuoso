import React, { Component } from 'react';
import GlobalStyles from '../styles/global';
import axios from 'axios';

// Components
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import Info from './Info';
import Activity from './Activity';
import Footer from './Footer';

const baseUrl = 'http://www.boredapi.com/api/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activity: []
    };
  }

  getRandomActivity = async () => {
    try {
      const response = await axios.get(`${baseUrl}activity/`);
      this.setState({ activity: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <MainContainer>
          <Info getRandomActivity={this.getRandomActivity} />
          <Activity activity={this.state.activity} />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
