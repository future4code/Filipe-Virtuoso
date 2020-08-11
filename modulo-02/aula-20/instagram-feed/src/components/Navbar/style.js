import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background-color: #fff;
  border-bottom: 2px solid #e3e3e3;
  color: #444;
`;

export const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 1rem;
  margin-left: 4rem;
`;

export const SearchInput = styled.input`
  width: 15%;
  padding: 0.3rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  text-align: center;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 1rem;
  margin-right: 4rem;
  font-size: 1.3rem;
`;

export const MenuItem = styled.li`
  padding: 0.5rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #444;

  &:hover {
    border-bottom: 2px solid #444;
  }
`;
