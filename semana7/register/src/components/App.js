import React, { Component } from 'react';
import GlobalStyles from '../styles/global';
// Components
import Navbar from './Navbar/';
import MainContainer from './MainContainer';
import Form from './Form';
import ListUsers from './ListUsers';

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
        page = <ListUsers />;
        break;
      default:
        page = null;
    }
    return (
      <div className="App">
        <GlobalStyles />
        <Navbar showUsers={this.showUsers} showRegister={this.showRegister} />
        <MainContainer>{page}</MainContainer>
      </div>
    );
  }
}

export default App;
