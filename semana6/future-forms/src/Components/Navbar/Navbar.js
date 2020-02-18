import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #444;
  color: #f4f4f4;
  text-transform: uppercase;
`;

const NavTitle = styled.h1`
  border-bottom: 2px dotted #f4f4f4;
  padding-bottom: 0.5rem;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavTitle>
        <i class="far fa-paper-plane"></i> Future forms
      </NavTitle>
    </NavContainer>
  );
};

export default Navbar;
