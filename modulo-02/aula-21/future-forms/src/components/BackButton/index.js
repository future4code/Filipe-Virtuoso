import React from "react";
import * as S from "./style";

const BackButton = (props) => {
  return (
    <S.ButtonContainer>
      <S.Button
        onClick={() => {
          props.showLastForm();
        }}
      >
        <i className="fas fa-arrow-left"></i>
      </S.Button>
    </S.ButtonContainer>
  );
};

export default BackButton;
