import React, { useState, useEffect } from "react";
import "./styles.css";
import Preloader from "../../components/preloader/Preloader";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/productSlice";
import AsideFilter from "../../components/aside/AsideFilter";

const Catalog_1 = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.data);
  const [pickedCategory, setPickedCategory] = useState("");

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

  const filterByCategory = (category) => {
    return data.flatMap((product) =>
      product.filter(
        (item) => item.category === category && item.special === "none"
      )
    );
  };

  const filterBySpecial = (special) => {
    return data.flatMap((product) =>
      product.filter((item) => item.special === special)
    );
  };

  const filterByCategory2 = (category) => {
    return bedding.flatMap(
      (product) =>
        product.complect?.filter((item) => item.category === category) || []
    );
  };

  const bedding = filterByCategory("Белье");
  const clothes = filterByCategory("Одежда");
  const accessories = filterByCategory("Аксессуары");
  const aroma = filterByCategory("Ароматы");

  const special1 = filterBySpecial("Сказки");
  const special2 = filterBySpecial("Агиттекстиль");
  const special3 = filterBySpecial("Узоры");
  const special4 = filterBySpecial("Композиторы");
  const special5 = filterBySpecial("Санкт Петербург");
  const special6 = filterBySpecial("Степи");

  const bedding1 = filterByCategory2("Наволочка");
  const bedding2 = filterByCategory2("Пододеяльник");
  const bedding3 = filterByCategory2("Простыня");

  const changePickedCategory = (currentCategory) => {
    if (currentCategory === pickedCategory) {
      setPickedCategory("");
    } else {
      setPickedCategory(currentCategory);
    }
  };

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
        <AsideFilter
          pickedCategory={pickedCategory}
          changePickedCategory={changePickedCategory}
        />
        <section>
          <a>Главная/Каталог</a>
          <h1></h1>
          <button onClick={() => console.log(pickedCategory)}>233232</button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog_1;
