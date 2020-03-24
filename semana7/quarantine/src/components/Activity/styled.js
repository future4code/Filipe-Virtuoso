import styled from 'styled-components';

export const ActivityWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 50%;
  background: '#f4f4f4';
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
  font-size: 1.1rem;
  line-height: 1.3;
  text-align: center;
`;
