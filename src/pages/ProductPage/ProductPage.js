import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataByID,
  fetchComplectDataByIDs,
} from "../../redux/productSlice";
import "./styles.css";
import Card from "../../components/card/card";
import Modal from "../../components/modal/Modal";
import { addToCart, toggleCart } from "../../redux/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [pickedAbout, setPickedAbout] = useState("picked1");
  const [pickedPhoto, setPickedPhoto] = useState("1");
  const { product, productStatus, error } = useSelector((state) => state.data);
  const { complectItems } = useSelector((state) => state.data);
  const [modalActive, setModalActive] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(toggleCart());
  };
  useEffect(() => {
    const fetchProductData = async () => {
      await dispatch(fetchDataByID(id));
      const currentProduct = await dispatch(fetchDataByID(id));
      if (currentProduct.payload && currentProduct.payload.complect) {
        dispatch(fetchComplectDataByIDs(currentProduct.payload.complect));
      }
    };

    fetchProductData();
  }, [dispatch, id]);

  const [availableImages, setAvailableImages] = useState([]);

  useEffect(() => {
    const checkImages = async () => {
      if (!product) return;
      const imagePromises = [];
      let maxImages = 3;
      if (
        product.category === "Наволочка" ||
        product.category === "Пододеяльник" ||
        product.category === "Простыня"
      ) {
        maxImages = 1;
      }
      for (let i = 1; i <= maxImages; i++) {
        const imageName = `${product.photo}_${i}.webp`;
        imagePromises.push(
          fetch(`/products/${imageName}`).then((response) => {
            if (response.ok) {
              return imageName;
            } else return "";
          })
        );
      }

      const results = await Promise.all(imagePromises);
      setAvailableImages(results);
    };

    checkImages();
  }, [product]);
  console.log(availableImages);
  if (productStatus === "loading") {
    return <p>Loading...</p>;
  }

  if (productStatus === "failed") {
    return <p>Error: {error}</p>;
  }

  let prodcategory = "";
  if (product.special === "none") {
    switch (product.category) {
      case "Белье": {
        prodcategory = "bedding";
        break;
      }
      case "Наволочка": {
        prodcategory = "beddin1";
        break;
      }
      case "Пододеяльник": {
        prodcategory = "bedding2";
        break;
      }
      case "Простыня": {
        prodcategory = "bedding3";
        break;
      }
      case "Одежда": {
        prodcategory = "clothes";
        break;
      }
      case "Ароматы": {
        prodcategory = "aroma";
        break;
      }
      case "Аксессуары": {
        prodcategory = "accessories";
        break;
      }
    }
  } else {
    switch (product.special) {
      case "Сказки": {
        prodcategory = "special1";
        break;
      }
      case "Агиттекстиль": {
        prodcategory = "special2";
        break;
      }
      case "Узоры": {
        prodcategory = "special3";
        break;
      }
      case "Композиторы": {
        prodcategory = "special4";
        break;
      }
      case "Санкт Петербург": {
        prodcategory = "special5";
        break;
      }
      case "Степи": {
        prodcategory = "special6";
        break;
      }
    }
  }
  return (
    <div className="product_page">
      {product && (
        <main>
          <section>
            <div className="path_mobile">
              <span>
                <Link to="/">Главная</Link>
              </span>{" "}
              /{" "}
              <span>
                <Link to="/catalog">Каталог</Link>
              </span>{" "}
              /{" "}
              <span>
                <Link to="/catalog" state={{ category: prodcategory }}>
                  {product.category}
                </Link>
              </span>{" "}
              / <span>{product.name}</span>
            </div>
            <div className="product_photo">
              <img
                alt=""
                src={`/products/${product.photo}_${pickedPhoto}.webp`}
                onClick={() => setModalActive(true)}
              />
              <div className="pick_photo">
                {availableImages.map((image, index) => (
                  <img
                    key={image}
                    src={`/products/${image}`}
                    alt=""
                    onClick={() => {
                      setPickedPhoto(index + 1);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="product_description">
              <div className="path">
                <span>
                  <Link to="/">Главная</Link>
                </span>{" "}
                /{" "}
                <span>
                  <Link to="/catalog">Каталог</Link>
                </span>{" "}
                /{" "}
                <span>
                  <Link to="/catalog" state={{ category: prodcategory }}>
                    {product.category}
                  </Link>
                </span>{" "}
                / <span>{product.name}</span>
              </div>
              <h1 className="product_name">{product.name}</h1>
              <p className="product_id">id: {product.id}</p>
              <h2 className="product_price">{product.price} ₽</h2>
              {product.material !== "none" && (
                <table className="product_table">
                  <tbody>
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
                  </tbody>
                </table>
              )}

              <button
                className="add_product"
                onClick={() => {
                  handleAddToCart();
                }}
              >
                в корзину
              </button>
            </div>
          </section>
          <section className="section_product_about">
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
                    эксклюзивный дизайн и высокое качество.
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
          {complectItems && complectItems.length > 0 && (
            <section className="complect_container">
              <h1>В Комплект входят</h1>
              <div className="complect_cards">
                {complectItems.map((item) => (
                  <Link key={item.id} to={`/product/${item.id}`}>
                    <Card props={item} />
                  </Link>
                ))}
              </div>
            </section>
          )}
          <Modal active={modalActive} setActive={setModalActive}>
            <div className="modal_picture">
              <img
                alt=""
                src={`/products/${product.photo}_${pickedPhoto}.webp`}
                onClick={() => setModalActive(true)}
              />
            </div>
          </Modal>
        </main>
      )}
    </div>
  );
};

export default ProductPage;
