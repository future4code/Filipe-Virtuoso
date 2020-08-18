import styled from "styled-components";

export const FormArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  width: 60%;
  border: 1px dashed #444;
  padding: 1rem;
`;

export const FormTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 0.4rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
  border-bottom: 2px solid #444;
  text-transform: uppercase;
  text-align: center;
`;

export const Label = styled.label`
  font-weight: bold;
  text-transform: uppercase;
  align-self: flex-start;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 2rem 0;
  margin: 0.75rem;
  border: 1px solid #444;
  border-radius: 5px;

  &::placeholder {
    padding-left: 0.75rem;
  }
`;
