import React, { useState, useEffect } from "react";
import "./styles.css";

const OrderPage = () => {
  return (
    <div className="order_page">
      <main>
        <section className="order_header">
          <p>Оформление заказ</p>
        </section>
        <section className="order_cart">
          <div className="order_section_name">
            <p>Товары в корзине</p>
          </div>
        </section>
        <section className="order_personal">
          <div className="order_section_name">
            <p>Личные данные</p>
          </div>
        </section>
        <section className="order_delivery">
          <div className="order_section_name">
            <p>Метод доставки</p>
          </div>
        </section>
        <section className="order_payment">
          <div className="order_section_name">
            <p>Способ оплаты</p>
          </div>
        </section>
      </main>
      <aside>
        <div className="order_total"></div>
        <div className="order_calculate"></div>
        <button className="order_pay">Оплатить</button>
      </aside>
    </div>
  );
};

export default OrderPage;
