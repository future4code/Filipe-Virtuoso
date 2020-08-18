import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  background-color: #f4f4f4;
`;

export const Logo = styled.h1`
  margin-left: 4rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #444;
  }
`;
