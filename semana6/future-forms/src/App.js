import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainContainer from "./Components/MainContainer/MainContainer";
import FormContainer from "./Components/FormContainer/FormContainer";
import NextButton from "./Components/NextButton/NextButton";
import BackButton from "./Components/BackButton/BackButton";
import FormGeral from "./Components/FormGeral/FormGeral";
import FormEscolar from "./Components/FormEscolar/FormEscolar";
import FormEscolarExtra from "./Components/FormEscolarExtra/FormEscolarExtra";
import FormFinal from "./Components/FormFinal/FormFinal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 1
    };
  }

  showNextForm = () => {
    if (this.state.form < 4) {
      this.setState({ form: this.state.form + 1 });
    }
  };

  showLastForm = () => {
    if (this.state.form > 1) {
      this.setState({ form: this.state.form - 1 });
    }
  };

  render() {
    let form;
    switch (this.state.form) {
      case 1:
        form = <FormGeral />;
        break;
      case 2:
        form = <FormEscolar />;
        break;
      case 3:
        form = <FormEscolarExtra />;
        break;
      case 4:
        form = <FormFinal />;
        break;
    }
    return (
      <div className="App">
        <Navbar />
        <MainContainer>
          <BackButton showLastForm={this.showLastForm} />
          <FormContainer>{form}</FormContainer>
          <NextButton showNextForm={this.showNextForm} />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
