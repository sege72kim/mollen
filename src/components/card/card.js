import React from "react";
import "./styles.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card_top">
        <p>{props.category}</p>
        <img src="./icons/mollen.svg" />
      </div>
      <img className="card_img" src={props.images} />
      <h1>{props.name}</h1>

      <h2>{props.price}</h2>
    </div>
  );
};

export default Card;
