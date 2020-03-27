import styled from 'styled-components';
import Background from '../../assets/img/listening-bg.jpg';

export const ShowPlaylistWrapper = styled.section`
  background: url(${Background}) no-repeat fixed center;
  background-size: cover;
  color: #f4f4f4;
  height: 90vh;
`;

export const Overlay = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;

  /* Overlay */
  position: absolute;
  top: 67px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 6rem;
  height: 50%;
  width: 30%;
`;

export const Title = styled.h1`
  font-size: 1.9rem;
  font-family: 'Alfa Slab One', cursive;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Label = styled.label`
  margin-bottom: 0.75rem;
  color: #f4f4f4;
`;

export const TextInput = styled.input`
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  outline: 0;
  border: none;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  margin-top: 1rem;
  background: #3ee657;
  color: #f4f4f4;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9rem;
  outline: 0;
  border: 1px solid #3ee657;
  cursor: pointer;

  &:hover {
    background: #35b849;
    border: 1px solid #35b849;
  }
`;

export const TableWrapper = styled.section`
  width: 60%;
  height: 500px;
  margin-top: 4rem;
  align-self: flex-start;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #444.;
`;

export const Action = styled.button`
  font-size: 1.1rem;
  padding: 0.7rem;
  margin: 0.1rem;
  background: ${props => (props.bgred ? '#ffe0e9' : '#e6f4ff')};
  outline: 0;
  color: ${props => (props.red ? 'red' : '#444')};
  border: 0.5px solid #444;
  cursor: pointer;

  &:hover {
    background: ${props => (props.bgred ? '#f76d95' : '#77bbe6')};
  }
`;
