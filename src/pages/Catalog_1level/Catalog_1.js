import React, { useState, useEffect } from "react";
import "./styles.css";
import Preloader from "../../components/preloader/Preloader";
import Navigation from "../../components/navigation/Navigation";
import Checkbox from "../../components/checkbox/Checkbox";
import Footer from "../../components/footer/Footer";

const Catalog_1 = () => {
  const [level, setLevel] = useState("");
  const [checkedItems, setCheckedItems] = useState({
    sets: false,
    bedding: false,
    clothes: false,
    accessories: false,
  });
  const [checkedCollection, setCheckedCollection] = useState({
    collection1: false,
    collection2: false,
    collection3: false,
    collection4: false,
    collection5: false,
    collection6: false,
  });

  const handleCheckboxChange = (name, isChecked) => {
    if (name in checkedItems) {
      setCheckedItems((prevState) => ({
        ...prevState,
        [name]: isChecked,
      }));
    } else {
      setCheckedCollection((prevState) => ({
        ...prevState,
        [name]: isChecked,
      }));
    }
  };

  const isAnyChecked = () => {
    const anyItemChecked = Object.values(checkedItems).some(
      (value) => value === true
    );
    const anyCollectionChecked = Object.values(checkedCollection).some(
      (value) => value === true
    );
    return anyItemChecked || anyCollectionChecked;
  };

  useEffect(() => {
    if (isAnyChecked()) {
      setLevel("closed-catalog");
    } else {
      setLevel("");
    }
  }, [checkedItems, checkedCollection]);

  return (
    <div className="catalog_1">
      <Preloader />
      <header>
        <Navigation color="black" />
        <div className={`header_catalog_1 ${level}`}>
          <h1>Новая коллекция</h1>
          <div>
            <p>
              У каждого принта "Моллен" есть своя история, которую мы вам сейчас
              и расскажем.
            </p>
            <button>Перейти</button>
          </div>
        </div>
      </header>
      <main className={`main-catalog-${level}`}>
        <aside className="filter">
          <div className="aside_filter">
            <h1>Категории</h1>
            <Checkbox
              label="Комплекты"
              onChange={(isChecked) => handleCheckboxChange("sets", isChecked)}
            />
            <Checkbox
              label="Постельное белье"
              onChange={(isChecked) =>
                handleCheckboxChange("bedding", isChecked)
              }
            />
            <Checkbox
              label="Одежда"
              onChange={(isChecked) =>
                handleCheckboxChange("clothes", isChecked)
              }
            />
            <Checkbox
              label="Аксессуары"
              onChange={(isChecked) =>
                handleCheckboxChange("accessories", isChecked)
              }
            />
          </div>
          <div className="aside_filter">
            <h1>Коллекция</h1>
            <Checkbox
              label="Глубина"
              onChange={(isChecked) =>
                handleCheckboxChange("collection1", isChecked)
              }
            />
            <Checkbox
              label="Бархатное путешествие"
              onChange={(isChecked) =>
                handleCheckboxChange("collection2", isChecked)
              }
            />
            <Checkbox
              label="Дивные времена"
              onChange={(isChecked) =>
                handleCheckboxChange("collection3", isChecked)
              }
            />
            <Checkbox
              label="Летние грёзы"
              onChange={(isChecked) =>
                handleCheckboxChange("collection4", isChecked)
              }
            />
            <Checkbox
              label="Зимняя сказка"
              onChange={(isChecked) =>
                handleCheckboxChange("collection5", isChecked)
              }
            />
            <Checkbox
              label="Осенний вальс"
              onChange={(isChecked) =>
                handleCheckboxChange("collection6", isChecked)
              }
            />
          </div>
        </aside>
        <section>
          <a>Главная/Каталог</a>
          <h1></h1>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog_1;
