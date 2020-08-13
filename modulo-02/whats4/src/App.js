import React from "react";

import GlobalStyles from "./styles/global";

// Components
import Container from "./components/Container";
import Contacts from "./components/Contacts";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Contacts />
        <Chat />
      </Container>
    </div>
  );
}

export default App;
