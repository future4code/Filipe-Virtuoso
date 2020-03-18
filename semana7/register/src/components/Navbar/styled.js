import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  background: #57c4fa;
  color: #f4f4f4;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  border-bottom: 2px dotted #f4f4f4;
  padding-bottom: 0.2rem;
  margin: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Menu = styled.ul`
  display: flex;
  margin: 1rem;
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 0.25rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #f4f4f4;
  font-weight: bold;
  padding: 0.75rem;

  &:hover {
    border-radius: 5px;
    background: #f4f4f4;
    color: #444;
  }
`;
