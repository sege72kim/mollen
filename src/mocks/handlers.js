import { products } from "./mockBase";
import { HttpResponse, http } from "msw";

// Обработчик для получения всех продуктов
const postsResolver = () => {
  return HttpResponse.json(products);
};

// Обработчик для получения продукта по id
const productByIdResolver = (req) => {
  const { id } = req.params;
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (product) {
    return HttpResponse.json(product);
  } else {
    return HttpResponse.status(404, "Product not found");
  }
};

// Определение маршрутов
const postsHandler = http.get("/api/products", postsResolver);
const productByIdHandler = http.get("/api/products/:id", productByIdResolver);

export const handlers = [postsHandler, productByIdHandler];
