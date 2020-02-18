import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0.6rem;
  padding: 1rem;
  width: 50%;
  height: 90%;
  background: #fff;
  border: 1px dotted #444;
  border-radius: 5px;
`;

const SectionContainer = props => {
  return <Section>{props.children}</Section>;
};

export default SectionContainer;
