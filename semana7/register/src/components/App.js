import React, { Component } from 'react';
import GlobalStyles from '../styles/global';
// Components
import Navbar from './Navbar/';
import MainContainer from './MainContainer';
import Form from './Form';
import ListUsers from './ListUsers';
import EditUser from './EditUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      userId: 0
    };
  }

  showRegister = () => {
    this.setState({ page: 1 });
  };

  showUsers = () => {
    this.setState({ page: 2 });
  };

  showUserInfo = id => {
    this.setState({ page: 3, userId: id });
  };

  render() {
    let page;
    switch (this.state.page) {
      case 1:
        page = <Form />;
        break;
      case 2:
        page = <ListUsers showUserInfo={this.showUserInfo} />;
        break;
      case 3:
        page = <EditUser userId={this.state.userId} showUsers={this.showUsers} />;
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
