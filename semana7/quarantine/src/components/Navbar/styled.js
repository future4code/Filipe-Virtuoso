import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background: #444;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.h1`
  margin-left: 2rem;
  text-transform: uppercase;
  color: #f4f4f4;
  padding: 0.3rem;
  font-size: 1.6rem;
  font-family: 'Architects Daughter', cursive;
  cursor: pointer;
`;

export const Red = styled.span`
  color: red;
  border-bottom: 2px solid #f26257;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  margin-right: 5rem;
`;

export const Item = styled.li`
  margin-right: 0.6rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #f4f4f4;
  font-weight: bold;
  padding: 0.75rem;
  cursor: pointer;

  &:hover {
    color: #444;
    background: #f4f4f4;
    border-radius: 3px;
  }
`;
