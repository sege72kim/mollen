import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/card";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  toggleCart,
} from "../../redux/cartSlice";

const SideCart = () => {
  const dispatch = useDispatch();
  const handleOpenCart = () => {
    dispatch(toggleCart());
  };
  const cartItems = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className={isCartOpen ? "side_cart-open" : "side_cart"}>
        <div className="side_cart_container">
          <div className="side_cart_header">
            <h1>Корзина</h1>
            <div
              onClick={() => {
                handleOpenCart();
              }}
            >
              <img src="/icons/cross.svg" alt="+" />
            </div>
          </div>

          {cartItems.length ? (
            <>
              <div className="side_cart_list">
                {cartItems.map((item) => (
                  <div className="side_cart_card" key={item.id}>
                    <img src={`/products/${item.photo}.webp`} alt="" />
                    <div>
                      <p className="side_cart_name">{item.name}</p>
                      <p className="side_cart_color"> Цвет: {item.color}</p>
                      <div className="side_cart_bottom">
                        <p className="side_cart_price">
                          {item.price * item.quantity} ₽
                        </p>
                        <div className="quantity_control">
                          <button
                            onClick={() =>
                              item.quantity > 1
                                ? dispatch(decreaseQuantity(item.id))
                                : dispatch(removeFromCart(item.id))
                            }
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="side_cart_total">
                <p>Сумма</p> <h2>{total} ₽</h2>
              </div>
              <button className="side_cart_button">Перейти в корзину</button>
            </>
          ) : (
            <p>Корзина пуста</p>
          )}
        </div>
      </div>
      <div
        className={isCartOpen ? "close_side_cart" : ""}
        onClick={handleOpenCart}
      />
    </>
  );
};
export default SideCart;
