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
  const [filterStatus, setFilterStatus] = useState("");
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

  const changePickedCategory = (currentCategory) => {
    if (currentCategory === pickedCategory) {
      setPickedCategory("");
    } else {
      setPickedCategory(currentCategory);
    }
  };
  const filterOpen = () => {
    if (filterStatus === "") {
      setFilterStatus("open");
    } else {
      setFilterStatus("");
    }
  };
  return (
    <div className="catalog_1">
      <Preloader />
      <header>
        <Navigation color="black" />
        {/* <div className={`header_catalog_1`}>
          <h1>Новая коллекция</h1>
          <div>
            <p>
              У каждого принта "Моллен" есть своя история, которую мы вам сейчас
              и расскажем.
            </p>
            <button>Перейти</button>
          </div>
        </div> */}
      </header>
      <main className={`main_catalog`}>
        <AsideFilter
          pickedCategory={pickedCategory}
          changePickedCategory={changePickedCategory}
          filterStatus={filterStatus}
          onFilter2={() => filterOpen()}
        />
        <section>
          <section>
            {pickedCategory === "" && (
              <CatalogBlock
                category="Популярные товары"
                data={products}
                onFilter={() => filterOpen()}
              />
            )}
            {pickedCategory === "bedding" && (
              <CatalogBlock
                category="Постельное белье"
                data={bedding}
                onFilter={() => filterOpen()}
              />
            )}
            {pickedCategory === "clothes" && (
              <CatalogBlock
                category="Одежда"
                data={clothes}
                onFilter={() => filterOpen()}
              />
            )}
            {pickedCategory === "accsessories" && (
              <CatalogBlock
                category="Аксессуары"
                data={accessories}
                onFilter={() => filterOpen()}
              />
            )}
            {pickedCategory === "aroma" && (
              <CatalogBlock
                category="Ароматы"
                data={aroma}
                onFilter={() => filterOpen()}
              />
            )}
            {pickedCategory === "special1" && (
              <CatalogBlock
                category="Коллекция Сказки"
                data={special1}
                onFilter={() => filterOpen()}
              />
            )}
            {pickedCategory === "special2" && (
              <CatalogBlock
                category="Коллекция Агиттекстиль"
                data={special2}
                onFilter={() => filterOpen()}
              />
            )}
            {pickedCategory === "special3" && (
              <CatalogBlock
                category="Коллекция Узоры"
                data={special3}
                onFilter={() => filterOpen()}
              />
            )}
            {pickedCategory === "special4" && (
              <CatalogBlock
                category="Коллекция Композиторы"
                data={special4}
                onFilter={() => filterOpen()}
              />
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
