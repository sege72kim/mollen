import React from "react";
import "./styles.css";

const Card = ({ props }) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card_top">
        <p>{props.category}</p>
        <img src="./icons/mollen.svg" alt="icon" />
      </div>
      <img className="card_img" src="./products/product1.webp" alt="product" />
      <h1>{props.name}</h1>
      <h3>{props.price}₽</h3>
      <button>В Корзину</button>
    </div>
  );
};

export default Card;
