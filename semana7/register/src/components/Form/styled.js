import styled from 'styled-components';

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  width: 40%;
  background: #fff;
  border: 1px dotted #444;
  border-radius: 5px;
  padding: 2rem;
`;

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #444;
  text-transform: uppercase;
`;

export const Label = styled.label`
  align-self: flex-start;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0;
  padding-left: 0.25rem;
  margin: 0.75rem;
  border-radius: 5px;
  border: 1px solid #444;
  outline: 0;
  width: 100%;
`;

export const ButtonWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  outline: 0;
  padding: 1.3rem;
  width: 35%;
  margin-right: 0.3rem;
  background: ${props => (props.clear ? '#ededed' : '#57c4fa')};
  color: ${props => (props.clear ? '#444' : '#f4f4f4')};
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #2887d4;
    color: #f4f4f4;
  }
`;

export const Info = styled.div`
  background: ${props => (props.green ? '#d1ffdd' : '#ffe0e3')};
  margin: 0.75rem;
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
`;
