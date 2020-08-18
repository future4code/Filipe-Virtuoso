import React from "react";
import * as S from "./style";

const FormEducacional = () => {
  return (
    <S.FormArea>
      <S.FormTitle>
        <i className="fas fa-info-circle"></i> Informações gerais
      </S.FormTitle>
      <S.Label>Qual o curso?</S.Label>
      <S.Textarea />
      <S.Label>Qual a unidade de ensino?</S.Label>
      <S.Textarea />
    </S.FormArea>
  );
};

export default FormEducacional;
