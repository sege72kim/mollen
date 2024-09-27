// ProductPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataByID } from "../../redux/productSlice";

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
    <div>
      <h1>Product {id}</h1>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
