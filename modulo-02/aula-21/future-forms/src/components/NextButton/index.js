import React from "react";
import * as S from "./style";

const NextButton = (props) => {
  return (
    <S.ButtonContainer>
      <S.Button
        onClick={() => {
          props.showNextForm();
        }}
      >
        <i className="fas fa-arrow-right"></i>
      </S.Button>
    </S.ButtonContainer>
  );
};

export default NextButton;
