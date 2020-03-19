import styled from 'styled-components';

export const UsersWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 90%;
  background: #fff;
  border: 1px dotted #444;
  border-radius: 5px;
  padding: 2rem;
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #444.;
`;

export const Button = styled.button`
  padding: 0.7rem;
  margin: 0.1rem;
  background: ${props => (props.bgred ? '#ffe6ea' : '#fffefc')};
  outline: 0;
  color: ${props => (props.red ? 'red' : '#444')};
  border: 0.5px solid #444;
  cursor: pointer;
`;

export const Info = styled.div`
  background: ${props => (props.green ? '#d1ffdd' : '#ffe0e3')};
  margin: 0.75rem;
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
`;

export const SearchWrapper = styled.section`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0;
  padding-left: 0.25rem;
  margin-bottom: 0.75rem;
  border: none;
  border-bottom: 2px solid #444;
  outline: 0;
  width: 100%;
  font-size: 0.9rem;
`;

export const SearchButton = styled.button`
  width: 20%;
  background: #c2f3ff;
  border: none;
  border-bottom: 2px solid #444;
  outline: 0;
  margin-bottom: 0.75rem;
  cursor: pointer;

  &:hover {
    background: #2887d4;
    color: #f4f4f4;
  }
`;
