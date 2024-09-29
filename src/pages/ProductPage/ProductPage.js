// ProductPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByID } from "../../redux/productSlice";
import "./styles.css";
const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [pickedAbout, setPickedAbout] = useState("picked1");
  const { product, productStatus, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchDataByID(id));
  }, [dispatch, id]);

  if (productStatus === "loading") {
    return <p>Loading...</p>;
  }

  if (productStatus === "failed") {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="product_page">
      {product && (
        <main>
          <section>
            <div className="product_photo">
              <img alt="" src={`/products/${product.photo}_1.webp`} />
            </div>
            <div className="product_description">
              <div className="path">
                <span>Главная</span> / <span>Каталог</span> /{" "}
                <span>{product.category}</span> / <span>{product.name}</span>
              </div>
              <h1 className="product_name">{product.name}</h1>
              <p className="product_id">id: {product.id}</p>
              <h2 className="product_price">{product.price} ₽</h2>
              {product.material !== "none" && (
                <table className="product_table">
                  <tr>
                    <td>Размер</td>
                    <td>Евро</td>
                  </tr>
                  <tr>
                    <td>Ткань</td>
                    <td>{product.material}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>
                      {product.color === "special" && "Особый"}
                      {product.color !== "special" && product.color}
                    </td>
                  </tr>
                </table>
              )}

              <button className="add_product">в корзину</button>
            </div>
          </section>
          <section>
            <div className="pick_about">
              <button
                onClick={() => {
                  setPickedAbout("picked1");
                }}
                className={pickedAbout === "picked1" ? "pick_about_active" : ""}
              >
                Описание
              </button>
              <button
                onClick={() => {
                  setPickedAbout("picked2");
                }}
                className={pickedAbout === "picked2" ? "pick_about_active" : ""}
              >
                О бренде
              </button>
              <button
                onClick={() => {
                  setPickedAbout("picked3");
                }}
                className={pickedAbout === "picked3" ? "pick_about_active" : ""}
              >
                Дополнительно
              </button>
            </div>
            <div className="product_about">
              {pickedAbout === "picked1" && product.about}
              {pickedAbout === "picked2" && (
                <div>
                  <p>
                    Mollen — российский бренд, специализирующийся на
                    производстве текстиля для дома и женских аксессуарах.
                    Уникальная цветовая палитра бренда состоит как из
                    пастельных, так и из ярких цветов, которые вместе образуют
                    капсулы, позволяющие составлять сотни гармоничных сочетаний.
                  </p>
                  <p>
                    Визитной карточкой компании являются принты – оригинальные
                    дизайнерские решения, основанные на глубоком изучении
                    традиций и культурных явлений общества, рассказанные
                    современным языком. Принты создаются на основе цветовой
                    палитры компании и объединяют любые цветовые решения внутри
                    капсулы. Принты получили награды и отмечены: Третьяковской
                    галереей, Всероссийским музеем декоративного искусства,
                    International Design Awards 2023, «Придумано и сделано в
                    России» 2023 и других.
                  </p>
                  <p>
                    Компания делает ставку на внутреннее производство, в ателье
                    Mollen работают опытные мастера, которые отшивают модели
                    «bespoke» для ценителей высокого качества и индивидуального
                    подхода. Продукция компании Mollen гармонично сочетает
                    изысканность, современный подход, уважение к традициям,
                    эксклюзивный дизайн и высокое качество."
                  </p>
                </div>
              )}
              {pickedAbout === "picked3" && (
                <div>
                  {product.category !== "Ароматы" && (
                    <>
                      <p>Экологически чистые материалы.</p>
                      <p>Ручная стирка в холодной воде.</p>
                      <p>Гладить с изнаночной стороны на низкой температуре.</p>
                    </>
                  )}
                  {product.category === "Ароматы" && (
                    <>
                      <p>Экологически чистые материалы.</p>
                      <p>Время использования 48 часов.</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </section>
        </main>
      )}
    </div>
  );
};

export default ProductPage;
