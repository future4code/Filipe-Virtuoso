import React, { Component } from "react";

import GlobalStyles from "./styles/global";

// Components
import Container from "./components/Container";
import Contacts from "./components/Contacts";
import Chat from "./components/Chat";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  addMessage = (user, message) => {
    if (user && message) {
      const newMessage = [...this.state.messages, { user, message }];
      this.setState({ messages: newMessage });
    } else {
      alert("Preencha os campos corretamente!");
    }
  };

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Container>
          <Contacts />
          <Chat messages={this.state.messages} addMessage={this.addMessage} />
        </Container>
      </div>
    );
  }
}

export default App;
