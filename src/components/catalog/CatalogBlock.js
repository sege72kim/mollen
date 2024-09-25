import { React, useState } from "react";
import "./styles.css";
import Card from "../card/card";

const CatalogBlock = ({ category, data, onFilter, filterStatus }) => {
  const [category2, setCategory2] = useState("bedding");
  const [category3, setCategory3] = useState("clothes");
  const [isChecked, setIsChecked] = useState(false);

  const changeCategory2 = (currentCategory) => {
    setCategory2(currentCategory);
  };
  const changeCategory3 = (currentCategory) => {
    setCategory3(currentCategory);
  };
  const filterByCategory2 = (category) => {
    return data.flatMap(
      (product) =>
        product.complect?.filter((item) => item.category === category) || []
    );
  };
  const openFilter = () => {
    setIsChecked(!isChecked);
    onFilter(!isChecked);
  };

  const bedding1 = filterByCategory2("Наволочка");
  const bedding2 = filterByCategory2("Пододеяльник");
  const bedding3 = filterByCategory2("Простыня");
  const shirts = data.filter((product) => product.name.includes("Рубашка"));
  const tops = data.filter((product) => product.name.includes("Топ"));
  const dress = data.filter(
    (product) =>
      product.name.includes("платье") || product.name.includes("халат")
  );

  return (
    <div className="catalog_box">
      <div className="catalog_header">
        <a className="path">Главная / Каталог / {category}</a>
        <h1>{category}</h1>
      </div>
      <div className="open_filter_button" onClick={() => openFilter()}>
        <div className={filterStatus === "open" ? "filter_clicked" : ""}>
          <img src="/icons/filter.svg" alt="" />
          <a>Фильтры</a>
        </div>
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
      )}
      {category === "Одежда" && (
        <div className="second_category">
          <div>
            <button
              onClick={() => changeCategory3("clothes")}
              className={category3 === "clothes" ? "category_active" : ""}
            >
              Одежда
            </button>
            <button
              onClick={() => changeCategory3("clothes1")}
              className={category3 === "clothes1" ? "category_active" : ""}
            >
              Рубашки
            </button>
            <button
              onClick={() => changeCategory3("clothes2")}
              className={category3 === "clothes2" ? "category_active" : ""}
            >
              Топы
            </button>
            <button
              onClick={() => changeCategory3("clothes3")}
              className={category3 === "clothes3" ? "category_active" : ""}
            >
              Платья
            </button>
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
      {category === "Одежда" && (
        <div>
          {category3 === "clothes" && (
            <div className="catalog_list">
              <div>
                {data.map((item) => (
                  <Card props={item} />
                ))}
              </div>
            </div>
          )}
          {category3 === "clothes1" && (
            <div className="catalog_list">
              <div>
                {shirts.map((item) => (
                  <Card props={item} />
                ))}
              </div>
            </div>
          )}
          {category3 === "clothes2" && (
            <div className="catalog_list">
              <div>
                {tops.map((item) => (
                  <Card props={item} />
                ))}
              </div>
            </div>
          )}
          {category3 === "clothes3" && (
            <div className="catalog_list">
              <div>
                {dress.map((item) => (
                  <Card props={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {category !== "Постельное белье" && category !== "Одежда" && (
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
