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

const Select = styled.select`
  padding: 0.75rem;
  margin: 0.75rem;
  width: 100%;
  background: #f4f4f4;
  outline: 0;
  text-transform: uppercase;
`;

const FormEscolarExtra = () => {
  return (
    <Article>
      <Title>
        <i class="fas fa-user"></i> Informações educacionais #2
      </Title>
      <Label>Por que você não terminou um curso de graduação?</Label>
      <Input></Input>
      <Label>Você fez algum curso complementar?</Label>
      <Select name="select">
        <option value="1">Curso técnico</option>
        <option value="2">Curso de inglês</option>
        <option value="3">Você fez algum curso complementar?</option>
      </Select>
    </Article>
  );
};

export default FormEscolarExtra;
