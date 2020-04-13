import styled from 'styled-components'

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: #f4f4f4;
`

export const TodoWrapper = styled.section`
  height: 60%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Input = styled.input`
  width: 80%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  outline: 0;
  border: none;
  border-bottom: 4px solid #a1a1a1;
`

export const ActionsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Button = styled.button`
  outline: 0;
  width: 100%;
  padding: 0.75rem;
  margin: 0.2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: #ff3848;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #f5f5f5;
    background: #d42f32;
  }
`

export const TableSection = styled.section`
  width: 80%;
  margin-bottom: 1rem;
  height: 50%px;
  overflow-y: auto;
`

export const Table = styled.table`
  width: 100%;
`