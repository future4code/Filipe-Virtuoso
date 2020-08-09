import React from "react";
import "./style.css";

const SmallCard = ({ icon, label, text }) => {
  return (
    <>
      <section className="small-card">
        <i class={icon}></i>
        <span class="label">{label}</span> <p>{text}</p>
      </section>
    </>
  );
};

export default SmallCard;
