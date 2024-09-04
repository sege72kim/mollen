import React from "react";
import "./styles.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card_top">
        <p>{props.category}</p>
        <img src="./icons/mollen.svg" alt="icon" />
      </div>
      <img className="card_img" src="./images/sofa.png" alt="product" />
      <h1>{props.name}</h1>
      <h2>{props.collection}</h2>
      <h3>{props.price}₽</h3>
    </div>
  );
};

export default Card;
