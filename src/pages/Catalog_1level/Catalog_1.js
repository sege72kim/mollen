import React, { useState, useEffect } from "react";
import "./styles.css";
import Preloader from "../../components/preloader/Preloader";
import Navigation from "../../components/navigation/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { removeFromCart } from "../../redux/cartSlice";
import Card from "../../components/card/card";

const Catalog_1 = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [level, setLevel] = useState("");

  return (
    <div className="catalog_1">
      <Preloader />
      <header>
        <Navigation color="black" />
        <div className={`header_catalog_1 ${level}`}>
          <h1>Новая коллекция</h1>
          <div>
            <p>
              У каждого принта "Моллен" есть своя история, которую мы вам сейчас
              и расскажем.
            </p>
            <button>Перейти</button>
          </div>
        </div>
      </header>
      <main className={`main-${level}`}>
        <aside>
          <div className="aside_filter">
            <h1>Категория</h1>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Комплекты</a>
            </div>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Постельное белье</a>
            </div>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Одежда</a>
            </div>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Аксессуары</a>
            </div>
          </div>
          <div className="aside_filter">
            <h1>Коллекция</h1>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Глубина</a>
            </div>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Бархатное путешествие</a>
            </div>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Дивные времена</a>
            </div>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Летние грёзы</a>
            </div>
            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Зимняя сказка</a>
            </div>

            <div className="aside_checkbox">
              <input type="checkbox" />
              <a>Осенний вальс</a>
            </div>
          </div>
        </aside>
        <section>
          <button
            onClick={() => {
              setLevel("closed");
            }}
          >
            Убрать
          </button>
          <button
            onClick={() => {
              setLevel("");
            }}
          >
            показать
          </button>
        </section>
      </main>
    </div>
  );
};

export default Catalog_1;
