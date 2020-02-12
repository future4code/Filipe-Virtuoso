import React from "react";
import "./PageSection.css";

const PageSection = props => {
  return (
    <section className="flex-container">
      <h1>{props.title}</h1>
      {props.children}
    </section>
  );
};

export default PageSection;
