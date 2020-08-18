import React, { Component } from "react";
import GlobalStyles from "./styles/global";

// Components
import Navbar from "./components/Navbar";
import FormContainer from "./components/FormContainer";
import FormGeral from "./components/FormGeral";
import FormEducacional from "./components/FormEducacional";
import FormEscolaridade from "./components/FormEscolaridade";
import FormFinal from "./components/FormFinal";
import NextButton from "./components/NextButton";
import BackButton from "./components/BackButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 1,
    };
  }

  showNextForm = () => {
    if (this.state.form < 4) {
      this.setState({ form: this.state.form + 1 });
      console.log(this.state.form);
    }
  };

  showLastForm = () => {
    if (this.state.form > 1) {
      this.setState({ form: this.state.form - 1 });
      console.log(this.state.form);
    }
  };

  render() {
    let form;
    switch (this.state.form) {
      case 1:
        form = <FormGeral />;
        break;
      case 2:
        form = <FormEducacional />;
        break;
      case 3:
        form = <FormEscolaridade />;
        break;
      case 4:
        form = <FormFinal />;
        break;
      default:
        form = <FormGeral />;
    }
    return (
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <FormContainer>
          <BackButton showLastForm={this.showLastForm} />
          {form}
          <NextButton showNextForm={this.showNextForm} />
        </FormContainer>
      </div>
    );
  }
}

export default App;
