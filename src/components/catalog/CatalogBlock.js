import React from "react";
import "./styles.css";
import Card from "../card/Card";

const CatalogBlock = ({ category, data }) => {
  return (
    <div className="catalog_box">
      <div className="catalog_header">
        <a className="path">Главная / Каталог / {category}</a>
        <h1>{category}</h1>
      </div>
      <div className="catalog_list">
        <div>
          {data.map((item) => (
            <Card props={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CatalogBlock;
