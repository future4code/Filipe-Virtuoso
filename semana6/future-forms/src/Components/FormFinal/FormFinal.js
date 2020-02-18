import React from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #444;
  text-transform: uppercase;
`;

const FormFinal = () => {
  return (
    <Article>
      <Title>
        <i class="fas fa-user"></i> Você concluiu!
      </Title>
    </Article>
  );
};

export default FormFinal;
