import React from "react";
import "./styles.css";
import Checkbox from "../checkbox/Checkbox";
const AsideFilter = ({ pickedCategory, changePickedCategory }) => {
  return (
    <aside className="filter">
      <div className="aside_filter">
        <h1>Категории</h1>
        <Checkbox
          label="Постельное белье"
          onChange={() => changePickedCategory("bedding")}
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
          label="Сказки"
          onChange={() => changePickedCategory("special1")}
          state={pickedCategory}
          category="special1"
        />
        <Checkbox
          label="Агиттекстиль"
          onChange={() => changePickedCategory("special2")}
          state={pickedCategory}
          category="special2"
        />
        <Checkbox
          label="Узоры"
          onChange={() => changePickedCategory("special3")}
          state={pickedCategory}
          category="special3"
        />
        <Checkbox
          label="Композиторы"
          onChange={() => changePickedCategory("special4")}
          state={pickedCategory}
          category="special4"
        />
        <Checkbox
          label="Санкт-Петербург"
          onChange={() => changePickedCategory("special5")}
          state={pickedCategory}
          category="special5"
        />
        <Checkbox
          label="Степи"
          onChange={() => changePickedCategory("special6")}
          state={pickedCategory}
          category="special6"
        />
      </div>
    </aside>
  );
};
export default AsideFilter;
