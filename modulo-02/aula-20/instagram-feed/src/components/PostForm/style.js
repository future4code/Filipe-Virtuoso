import styled from "styled-components";

export const FormWrapper = styled.section`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 100%;
  background-color: #f4f4f4;
`;
export const Label = styled.label`
  padding: 0.2rem;
  margin: 0.3rem;
`;

export const Input = styled.input`
  padding: 0.3rem;
  width: 15%;
  border: 1 px solid #ccc;
  outline: 0;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #ccc;
  width: 15%;
  margin-left: 0.7rem;
  padding: 0.3rem;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  transition: all 1s ease-in;

  &:hover {
    background-color: #e3e3e3;
    color: #444;
  }
`;
