import React, { useState, useEffect } from "react";
import "./styles.css";
import Preloader from "../../components/preloader/Preloader";
import Navigation from "../../components/navigation/Navigation";
import Checkbox from "../../components/checkbox/Checkbox";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/productSlice";

const Catalog_1 = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // const [level, setLevel] = useState("");
  // const [checkedItems, setCheckedItems] = useState({
  //   bedding: false,
  //   clothes: false,
  //   accessories: false,
  //   aroma: false,
  // });
  // const [checkedCollection, setCheckedCollection] = useState({
  //   collection1: false,
  //   collection2: false,
  //   collection3: false,
  //   collection4: false,
  //   collection5: false,
  //   collection6: false,
  //   collection7: false,
  // });

  // const handleCheckboxChange = (name, isChecked) => {
  //   if (name in checkedItems) {
  //     setCheckedItems(() => ({
  //       bedding: false,
  //       clothes: false,
  //       accessories: false,
  //       aroma: false,
  //       [name]: isChecked,
  //     }));
  //   } else {
  //     setCheckedCollection((prevState) => ({
  //       ...prevState,
  //       [name]: isChecked,
  //     }));
  //   }
  // };

  // const fetchProducts = async (specialCategory) => {
  //   try {
  //     const response = await fetch(`/api/products`);

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();

  //     if (!Array.isArray(data)) {
  //       throw new Error("Полученные данные не являются массивом");
  //     }

  //     const filterByCategory = (category) => {
  //       return data.flatMap((product) =>
  //         product.filter(
  //           (item) => item.category === category && item.special === "none"
  //         )
  //       );
  //     };

  //     const filterBySpecial = (special) => {
  //       return data.flatMap((product) =>
  //         product.filter((item) => item.special === special)
  //       );
  //     };

  //     const bedding = filterByCategory("Белье");
  //     const clothes = filterByCategory("Одежда");
  //     const accessories = filterByCategory("Аксессуары");
  //     const aroma = filterByCategory("Ароматы");

  //     const specialProducts = filterBySpecial(specialCategory);

  //     console.log(bedding);
  //     console.log(clothes);
  //     console.log(accessories);
  //     console.log(aroma);
  //     console.log(specialProducts);

  //     return {
  //       bedding,
  //       clothes,
  //       accessories,
  //       aroma,
  //       specialProducts,
  //     };
  //   } catch (error) {
  //     console.error("Ошибка при получении данных:", error);
  //   }
  // };

  // Пример вызова функции для категории "Сказки"
  // fetchProducts("Сказки");
  console.log(data);
  return (
    <div className="catalog_1">
      <Preloader />
      <header>
        <Navigation color="black" />
        <div className={`header_catalog_1`}>
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
      <main className={`main-catalog-`}>
        <aside className="filter">
          <div className="aside_filter">
            <h1>Категории</h1>

            {/* <Checkbox
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
            <Checkbox
              label="Ароматы для дома"
              onChange={(isChecked) => handleCheckboxChange("aroma", isChecked)}
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
            /> */}
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
