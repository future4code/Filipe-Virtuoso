import React, { Component } from 'react';
// Components
import Navbar from './Components/Navbar/';
import MainContainer from './Components/MainContainer';
import Form from './Components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  showUsers = () => {
    if (this.state.page < 2) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  showRegister = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  render() {
    let page;
    switch (this.state.page) {
      case 1:
        page = <Form />;
        break;
      case 2:
        page = <h1>It works!</h1>;
        break;
    }
    return (
      <div className="App">
        <Navbar showUsers={this.showUsers} showRegister={this.showRegister} />
        <MainContainer>{page}</MainContainer>
      </div>
    );
  }
}

export default App;
