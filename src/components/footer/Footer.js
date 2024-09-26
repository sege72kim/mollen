import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_start_container">
          <img alt="" src="logo1.svg" />
          <div>
            <p>20212021 © Mollen </p>
            <p>Все права защищены</p>
          </div>
        </div>
        <div className="footer_list_container">
          <ul className="footer_list">
            <li>
              <Link to="/catalog" state={{ category: "bedding" }}>
                Постельное белье
              </Link>
            </li>
            <li>
              <Link to="/catalog" state={{ category: "clothes" }}>
                Одежда
              </Link>
            </li>
            <li>
              <Link to="/catalog" state={{ category: "accsessories" }}>
                Аксессуары
              </Link>
            </li>
            <li>
              <Link to="/catalog" state={{ category: "aroma" }}>
                Ароматы
              </Link>
            </li>
          </ul>

          <ul className="footer_list">
            <li>Размерный гид</li>
            <li>Доставка и оплата</li>
            <li>Гарантия и возврат</li>
            <li>Частые вопросы</li>
          </ul>
        </div>
        <div className="footer_end_container">
          <div className="number_footer">
            <h1>8 800 222 22 22</h1>
            <p>Заказать звонок</p>
          </div>
          <div className="footer_icons">
            <ul>
              <li>
                <img alt="" src="/icons/vk.svg" />
              </li>
              <li>
                <img alt="" src="/icons/pinterest.svg" />
              </li>
              <li>
                <img alt="" src="/icons/telegram.svg" />
              </li>
              <li>
                <img alt="" src="/icons/fb.svg" />
              </li>
              <li>
                <img alt="" src="/icons/instagram.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
