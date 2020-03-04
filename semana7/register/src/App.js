import React, { Component } from 'react';
// Components
import Navbar from './Components/Navbar/';
import MainContainer from './Components/MainContainer';
import Form from './Components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContainer>
          <Form />
        </MainContainer>
      </div>
    );
  }
}

export default App;
