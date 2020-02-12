import React from "react";
import "./ImageButton.css";

const ImageButton = props => {
  return (
    <button className="btn">
      <i class={props.class}></i> {props.text}
    </button>
  );
};

export default ImageButton;
