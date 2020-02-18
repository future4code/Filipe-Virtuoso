import React, { Component } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 30%;
`;

const Button = styled.button`
  font-size: 2rem;
  padding: 1.1rem;
  margin: 0.75rem;
  width: 30%;
  // background: #43bce8;
  background: #c4f1ff;
  border: 0;
  outline: 0;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: bold;
  // color: #f4f4f4;
  color: #444;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

class NextButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonContainer>
        <Button
          onClick={() => {
            this.props.showNextForm();
          }}
        >
          <i class="fas fa-arrow-right animated infinite pulse"></i>
        </Button>
      </ButtonContainer>
    );
  }
}

export default NextButton;
