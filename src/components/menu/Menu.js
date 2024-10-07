import React from "react";
import "./styles.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu_header">
        <div className="menu_cross">
          <img src="/icons/crossbig.svg" />
        </div>
        <div className="menu_logo">
          <img src="/images/logo1.svg" />
        </div>
      </div>
      <div className="menu_main">
        <div className="menu_info">
          <h5>Меню</h5>
          <ul>
            <li>Размерный гид</li>
            <li>Доставка и оплата</li>
            <li>Гарантия и возврат</li>
            <li>Частые вопросы</li>
            <li>О бренде</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="menu_catalog">
          <div>
            <h5>Каталог Mollen</h5>
            <ul>
              <li>Постельное белье</li>
              <li>Одежда</li>
              <li>Ароматы</li>
              <li>Аксессуары</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
