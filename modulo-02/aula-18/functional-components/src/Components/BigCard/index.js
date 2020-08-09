import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const BigCard = (props) => {
  return (
    <>
      <section className="big-card">
        <img class="profile-image" src={props.imgLink} alt="profile" />
        <div className="profile-info">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </section>
    </>
  );
};

BigCard.propTypes = {
  imgLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BigCard;
