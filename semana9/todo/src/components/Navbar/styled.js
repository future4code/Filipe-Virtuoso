import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background: #333;
  color: #f5f5f5;
  border-bottom: 5px solid #fa6055;
`
export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 3rem;
  color: #f5f5f5;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
    color: #333;
    border-radius: 3px;
  }
`
