import React, { useState, useEffect } from "react";
import "./styles.css";
import Preloader from "../../components/preloader/Preloader";
import Navigation from "../../components/navigation/Navigation";
const Catalog_1 = () => {
  return (
    <div>
      <Preloader />
      <header>
        <Navigation color="black" />
        <div className="header_catalog_1">
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
    </div>
  );
};

export default Catalog_1;
