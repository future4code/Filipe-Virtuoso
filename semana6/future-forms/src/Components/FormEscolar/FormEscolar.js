import React from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.75rem;
  border-radius: 5px;
  border: 1px solid #444;
  outline: 0;
`;

const Title = styled.h1`
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #444;
  text-transform: uppercase;
`;

const Label = styled.label`
  align-self: flex-start;
  text-transform: uppercase;
`;

const FormEscolar = () => {
  return (
    <Article>
      <Title>
        <i class="fas fa-user"></i> Informações educacionais
      </Title>
      <Label>Qual o curso?</Label>
      <Input></Input>
      <Label>Qual a unidade de ensino?</Label>
      <Input></Input>
    </Article>
  );
};

export default FormEscolar;
