import { React, useState } from "react";
import "./styles.css";
import Card from "../card/card";

const CatalogBlock = ({ category, data }) => {
  const [category2, setCategory2] = useState("bedding");
  const changeCategory2 = (currentCategory) => {
    setCategory2(currentCategory);
  };
  const filterByCategory2 = (category) => {
    return data.flatMap(
      (product) =>
        product.complect?.filter((item) => item.category === category) || []
    );
  };
  const bedding1 = filterByCategory2("Наволочка");
  const bedding2 = filterByCategory2("Пододеяльник");
  const bedding3 = filterByCategory2("Простыня");

  return (
    <div className="catalog_box">
      <div className="catalog_header">
        <a className="path">Главная / Каталог / {category}</a>
        <h1>{category}</h1>
      </div>
      {category === "Постельное белье" && (
        <div className="second_category">
          <div>
            <button
              onClick={() => changeCategory2("bedding")}
              className={category2 === "bedding" ? "category_active" : ""}
            >
              Комплекты
            </button>
            <div>
              <button
                onClick={() => changeCategory2("bedding1")}
                className={category2 === "bedding1" ? "category_active" : ""}
              >
                Наволочки
              </button>
              <button
                onClick={() => changeCategory2("bedding2")}
                className={category2 === "bedding2" ? "category_active" : ""}
              >
                Пододеяльники
              </button>
              <button
                onClick={() => changeCategory2("bedding3")}
                className={category2 === "bedding3" ? "category_active" : ""}
              >
                Простыни
              </button>
            </div>
          </div>
        </div>
      )}
      {category === "Постельное белье" && (
        <div>
          {category2 === "bedding" && (
            <div className="catalog_list">
              <div>
                {data.map((item) => (
                  <Card props={item} />
                ))}
              </div>
            </div>
          )}
          {category2 === "bedding1" && (
            <div className="catalog_list">
              <div>
                {bedding1.map((item) => (
                  <Card props={item} />
                ))}
              </div>
            </div>
          )}
          {category2 === "bedding2" && (
            <div className="catalog_list">
              <div>
                {bedding2.map((item) => (
                  <Card props={item} />
                ))}
              </div>
            </div>
          )}
          {category2 === "bedding3" && (
            <div className="catalog_list">
              <div>
                {bedding3.map((item) => (
                  <Card props={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {category !== "Постельное белье" && (
        <div className="catalog_list">
          <div>
            {data.map((item) => (
              <Card props={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CatalogBlock;
