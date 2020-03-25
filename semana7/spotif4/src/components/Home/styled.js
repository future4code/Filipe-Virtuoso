import styled from 'styled-components';
import Background from '../../assets/img/vinyl-bg.jpg';

export const HomeWrapper = styled.section`
  background: url(${Background}) no-repeat fixed center;
  background-size: cover;
  color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 90vh;
`;

export const Overlay = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 90vh;

  /* Overlay */
  position: absolute;
  top: 67px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-family: 'Alfa Slab One', cursive;
  margin: 0.75rem 5rem;
  width: 75%;
`;

export const Lead = styled.p`
  font-family: 'Alfa Slab One', cursive;
  font-size: 1.4rem;
  line-height: 1.1rem;
  margin: 0.75rem 5rem;
`;

export const Button = styled.button`
  width: 12%;
  padding: 0.9rem;
  margin: 3rem 5rem;
  background: #3ee657;
  color: #f4f4f4;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9rem;
  outline: 0;
  border: 1px solid #3ee657;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #35b849;
    border: 1px solid #35b849;
  }
`;
