import React from "react";
import "./styles.css";

const Navigation = (props) => {
  const colorClass =
    props.color === "black" ? "navigation-black" : "navigation-white";
  const colorButton = props.color === "black" ? "" : "1";
  return (
    <nav className={colorClass}>
      <div className="logo">
        <div className="menu_button">
          <div />
          <div />
          <div />
        </div>
        <img className="logo_picture" src="./images/logo1.svg" />
        <div className="text_button">каталог</div>
      </div>
      <ul>
        <li>
          <img src={`./icons/search${colorButton}.svg`} />
          <div>поиск</div>
        </li>
        <li>
          <img src={`./icons/bed${colorButton}.svg`} />
          <div>конструктор</div>
        </li>
        <li className="buy_storage">
          <img src="./icons/purchase.svg" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
