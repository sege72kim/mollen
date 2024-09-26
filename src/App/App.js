import React from "react";
import "./App.css";
import MainPage from "../pages/MainPage/MainPage";
import Catalog_1 from "../pages/Catalog_1level/Catalog_1";
import AppRoutes from "../routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
