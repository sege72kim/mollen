import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/statesSlice";

const Menu = () => {
  const isMenuOpen = useSelector((state) => state.states.isMenuOpen);
  const dispatch = useDispatch();
  const handleOpenMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className={`${isMenuOpen ? "menu-open" : "menu"}`}>
      <div className="menu_header">
        <div className="menu_cross">
          <img
            src="/icons/crossbig.svg"
            onClick={() => {
              handleOpenMenu();
            }}
          />
        </div>
        <div className="menu_logo">
          <img src="/images/logo1.svg" />
        </div>
      </div>
      <div className="menu_main">
        <div className="menu_info">
          <h5>Меню</h5>
          <ul>
            <MenuItem>Размерный гид</MenuItem>
            <MenuItem>Доставка и оплата</MenuItem>
            <MenuItem>Гарантия и возврат</MenuItem>
            <MenuItem>Частые вопросы</MenuItem>
            <MenuItem>О бренде</MenuItem>
            <MenuItem>Контакты</MenuItem>
          </ul>
        </div>
        <div className="menu_catalog">
          <div>
            <h5>Каталог Mollen</h5>
            <ul>
              <MenuItem>Постельное белье</MenuItem>
              <MenuItem>Одежда</MenuItem>
              <MenuItem>Ароматы</MenuItem>
              <MenuItem>Акссесуары</MenuItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const MenuItem = ({ children }) => {
  const dispatch = useDispatch();
  const handleOpenMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <li
      onClick={() => {
        handleOpenMenu();
      }}
    >
      {children}
    </li>
  );
};
export default Menu;
