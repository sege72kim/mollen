// ProductPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByID } from "../../redux/productSlice";
import "./styles.css";
const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, productStatus, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataByID(id));
  }, [dispatch, id]);

  if (productStatus === "loading") {
    return <p>Loading...</p>;
  }

  if (productStatus === "failed") {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="product_page">
      <h1>{id}</h1>
      {product && (
        <main>
          <div className="product_photo">
            <img alt="" src={`/products/${product.photo}_1.webp`} />
          </div>
          <div className="product_description">
            <div className="path">
              <span>Главная</span> / <span>Каталог</span> /{" "}
              <span>{product.category}</span> / <span>{product.name}</span>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default ProductPage;
