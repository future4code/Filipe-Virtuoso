import React from "react";
import * as S from "./style";

const FormEscolaridade = () => {
  return (
    <S.FormArea>
      <S.FormTitle>
        <i className="fas fa-info-circle"></i> Escolaridade
      </S.FormTitle>
      <S.Label>por que você não terminou um curso de graduação</S.Label>
      <S.Input />
      <S.Label>Você fez algum curso complementar?</S.Label>
      <S.Select name="select">
        <option value="1">Curso técnico</option>
        <option value="2">Curso de inglês</option>
        <option value="3">Não fiz curso complementar</option>
      </S.Select>
    </S.FormArea>
  );
};

export default FormEscolaridade;
