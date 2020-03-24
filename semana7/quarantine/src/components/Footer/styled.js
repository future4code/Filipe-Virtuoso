import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background: #444;
  color: #f4f4f4;
`;

export const Red = styled.span`
  color: #fa0728;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #f4f4f4;
  font-weight: bold;
  padding: 0.3rem;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #fa0728;
  }
`;
