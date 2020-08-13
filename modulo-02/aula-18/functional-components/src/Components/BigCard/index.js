import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const BigCard = ({ imgLink, name, description }) => {
  return (
    <>
      <section className="big-card">
        <img class="profile-image" src={imgLink} alt="profile" />
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{description}</p>
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
