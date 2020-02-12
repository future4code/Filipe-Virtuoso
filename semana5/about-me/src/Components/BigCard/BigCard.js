import React from "react";
import "./BigCard.css";

const BigCard = props => {
  return (
    <article className="description ">
      <img
        className="profile-image"
        src={props.imgLink}
        alt={props.imgDescription}
      />
      <div className="about-text">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </article>
  );
};

export default BigCard;
