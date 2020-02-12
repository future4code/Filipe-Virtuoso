import React from "react";
import "./SmallCard.css";

const SmallCard = props => {
  return (
    <p className="email">
      <i class={props.class}></i> <span>{props.label}</span> {props.text}
    </p>
  );
};

export default SmallCard;
