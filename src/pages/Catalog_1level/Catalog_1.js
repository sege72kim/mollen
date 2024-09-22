import React, { useState, useEffect } from "react";
import "./styles.css";
import Preloader from "../../components/preloader/Preloader";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/productSlice";
import AsideFilter from "../../components/aside/AsideFilter";
import CatalogBlock from "../../components/catalog/CatalogBlock";

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
  const products = Object.values(data).flat();

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
      <main className={`main_catalog`}>
        <AsideFilter
          pickedCategory={pickedCategory}
          changePickedCategory={changePickedCategory}
        />
        <section>
          <section>
            {pickedCategory === "" && (
              <CatalogBlock category="Популярные товары" data={products} />
            )}
            {pickedCategory === "bedding" && (
              <CatalogBlock category="Постельное белье" data={bedding} />
            )}
            {pickedCategory === "clothes" && (
              <CatalogBlock category="Одежда" data={clothes} />
            )}
            {pickedCategory === "accsessories" && (
              <CatalogBlock category="Аксессуары" data={accessories} />
            )}
            {pickedCategory === "aroma" && (
              <CatalogBlock category="Ароматы" data={aroma} />
            )}
            {pickedCategory === "special1" && (
              <CatalogBlock category="Коллекция Сказки" data={special1} />
            )}
            {pickedCategory === "special2" && (
              <CatalogBlock category="Коллекция Агиттекстиль" data={special2} />
            )}
            {pickedCategory === "special3" && (
              <CatalogBlock category="Коллекция Узоры" data={special3} />
            )}
            {pickedCategory === "special4" && (
              <CatalogBlock category="Коллекция Композиторы" data={special4} />
            )}
            {pickedCategory === "special5" && (
              <CatalogBlock
                category="Коллекция Санкт-Петербург"
                data={special5}
              />
            )}
            {pickedCategory === "special6" && (
              <CatalogBlock category="Коллекция Степи" data={special6} />
            )}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog_1;
