import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

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
        <Link className="logo_picture" to="/">
          <img src="/images/logo1.svg" />
        </Link>
        <Link to="/catalog">
          <div className="text_button">каталог</div>
        </Link>
      </div>
      <ul>
        <li className={`nav_button-${colorButton}`}>
          <img src={`/icons/search${colorButton}.svg`} />
          <div>поиск</div>
        </li>
        <li className={`nav_button-${colorButton}`}>
          <img src={`/icons/bed${colorButton}.svg`} />
          <div>конструктор</div>
        </li>
        <li className="buy_storage">
          <img src="/icons/purchase.svg" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
