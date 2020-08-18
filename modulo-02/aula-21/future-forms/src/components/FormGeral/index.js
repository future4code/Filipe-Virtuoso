import React from "react";
import * as S from "./style";

const FormGeral = (props) => {
  return (
    <S.FormArea>
      <S.FormTitle>
        <i className="fas fa-info-circle"></i> Informações gerais
      </S.FormTitle>
      <S.Label>Nome:</S.Label>
      <S.Input placeholder="Informe o seu nome" />
      <S.Label>Idade:</S.Label>
      <S.Input placeholder="Informe a sua idade" />
      <S.Label>Email:</S.Label>
      <S.Input placeholder="Informe o seu email" />
      <S.Label>Grau de escolaridade:</S.Label>
      <S.Select name="select">
        <option value="1">Ensino Médio Incompleto</option>
        <option value="2">Ensino Médio Completo</option>
        <option value="3">Ensino Superior Incompleto</option>
        <option value="4">Ensino Superior Completo</option>
      </S.Select>
    </S.FormArea>
  );
};

export default FormGeral;
