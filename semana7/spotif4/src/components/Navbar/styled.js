import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  background: #3cb0c9;
  color: #f4f4f4;
  border-bottom: 4px solid #1a6d99;
`;

export const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.75rem;
  margin-left: 3rem;
  cursor: pointer;

  &:hover {
    color: #444;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
  justify-cotent: center;
  align-items: center;
  margin-right: 5rem;
  font-size: 1.1 rem;
`;

export const Item = styled.li`
  padding: 0.75rem;
  margin-left: 0.3rem;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: #3297ad;
  }
`;

export const CustomBG = styled.span`
  background: #3cb0c9;
  padding: 0.75rem;
  border: 3px solid #f4f4f4;
  border-radius: 5px;
  color: #f4f4f4;

  &:hover {
    background: #3297ad;
    color: #f4f4f4;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #f4f4f4;

  &:hover {
    color: #444;
  }
`;
