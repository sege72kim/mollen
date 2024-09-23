import React from "react";
import "./styles.css";
import Checkbox from "../checkbox/Checkbox";
const AsideFilter = ({
  pickedCategory,
  changePickedCategory,
  filterStatus,
}) => {
  return (
    <aside className={`filter${filterStatus}`}>
      <div className="aside_filter">
        <div className="mobile_filter_header">
          <h1>Фильтры</h1>
          <button>+</button>
        </div>
        <h1>Категории</h1>
        <Checkbox
          label="Постельное белье"
          onChange={() => changePickedCategory("bedding")}
          Коллекция
          state={pickedCategory}
          category="bedding"
        />
        <Checkbox
          label="Одежда"
          onChange={() => changePickedCategory("clothes")}
          state={pickedCategory}
          category="clothes"
        />
        <Checkbox
          label="Аксессуары"
          onChange={() => changePickedCategory("accsessories")}
          state={pickedCategory}
          category="accsessories"
        />
        <Checkbox
          label="Ароматы для дома"
          onChange={() => changePickedCategory("aroma")}
          state={pickedCategory}
          category="aroma"
        />
      </div>
      <div className="aside_filter">
        <h1>Коллекция</h1>
        <Checkbox
          label="Коллекция Сказки"
          onChange={() => changePickedCategory("special1")}
          state={pickedCategory}
          category="special1"
        />
        <Checkbox
          label="Коллекция Агиттекстиль"
          onChange={() => changePickedCategory("special2")}
          state={pickedCategory}
          category="special2"
        />
        <Checkbox
          label="Коллекция Узоры"
          onChange={() => changePickedCategory("special3")}
          state={pickedCategory}
          category="special3"
        />
        <Checkbox
          label="Коллекция Композиторы"
          onChange={() => changePickedCategory("special4")}
          state={pickedCategory}
          category="special4"
        />
        <Checkbox
          label="Коллекция Санкт-Петербург"
          onChange={() => changePickedCategory("special5")}
          state={pickedCategory}
          category="special5"
        />
        <Checkbox
          label="Коллекция Степи"
          onChange={() => changePickedCategory("special6")}
          state={pickedCategory}
          category="special6"
        />
        <button className="filter_button">Показать</button>
      </div>
    </aside>
  );
};
export default AsideFilter;
