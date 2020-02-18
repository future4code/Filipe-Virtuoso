import React from "react";
import styled from "styled-components";

const FormSection = styled.section`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 90%;
  padding: 1rem;
  border: 1px dotted #444;
  text-align: center;
`;

const FormContainer = props => {
  return <FormSection>{props.children}</FormSection>;
};

export default FormContainer;
