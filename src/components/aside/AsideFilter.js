import { React, useState } from "react";
import "./styles.css";
import Checkbox from "../checkbox/Checkbox";
const AsideFilter = ({
  pickedCategory,
  changePickedCategory,
  filterStatus,
  onFilter2,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const openFilter = () => {
    setIsChecked(!isChecked);
    onFilter2(!isChecked);
  };
  return (
    <aside className={`filter${filterStatus}`}>
      <div className="mobile_filter_header">
        <h1>Фильтры</h1>
        <button onClick={openFilter}>+</button>
      </div>
      <div className="aside_filter">
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
      </div>
      <button className="filter_button" onClick={openFilter}>
        <a>Показать</a>
      </button>
    </aside>
  );
};
export default AsideFilter;
