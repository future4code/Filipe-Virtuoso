import React from "react";
import "./FlexContainer.css";

const FlexContainer = props => {
  return <section className="flex-container">{props.children}</section>;
};

export default FlexContainer;
