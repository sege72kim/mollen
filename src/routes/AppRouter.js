import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutMainPage from "../layouts/LayoutMainPage";
import MainPage from "../pages/MainPage/MainPage";
import LayoutDefault from "../layouts/LayoutDefault";
import Catalog_1 from "../pages/Catalog_1level/Catalog_1";
import ProductPage from "../pages/ProductPage/ProductPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutMainPage />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="catalog" element={<Catalog_1 />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
