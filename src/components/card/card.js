import React from "react";
import "./styles.css";

const Card = ({ props }) => {
  let color = "";
  if (props.color === "Белый") {
    color = "#eceae7";
  } else if (props.color === "Серый") {
    color = "#6b6868";
  } else if (props.color === "Бежевый") {
    color = "#edcda4";
  } else if (props.color === "Синий") {
    color = "#5d69c9";
  } else if (props.color === "Красный") {
    color = "#e85d5d";
  }
  return (
    <div className="card">
      <div className="card_top">
        <p>{props.category}</p>
      </div>
      <img
        className="card_img"
        src={`./products/${props.photo}.webp`}
        alt="product"
      />
      <h1>{props.name}</h1>
      {props.color === "special" && (
        <img src="/icons/mollen.svg" alt="" className="card_color" />
      )}
      {props.color !== "special" && (
        <div style={{ backgroundColor: color }} className="card_color" />
      )}
      <h3>{props.price} ₽</h3>
      <button>В Корзину</button>
    </div>
  );
};

export default Card;
