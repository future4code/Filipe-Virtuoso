import styled from 'styled-components';

export const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 50%;
  background: ${props => (props.orange ? '#fcfbf5' : '#f4f4f4')};
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-family: 'Vibur', cursive;
  padding: 0.3rem;
  margin-top: 5rem;
  border-bottom: 2px solid #444;
  text-transform: uppercase;
`;

export const Text = styled.p`
  width: 80%;
  padding: 0.75rem;
  margin: 0.5rem;
  line-height: 1.3;
`;

export const Button = styled.button`
  width: 30%;
  background: #ffb63d;
  color: #444;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: #ffa614;
    color: #f4f4f4;
  }
`;

export const Red = styled.span`
  color: #f26257;
`;
