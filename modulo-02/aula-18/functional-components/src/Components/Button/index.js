import React from "react";
import "./style.css";

const Button = ({ link, icon, text }) => {
  return (
    <div className="button">
      <a href={link}>
        <i className={icon}></i> {text}
      </a>
    </div>
  );
};

export default Button;
