import { products } from "./mockBase";
import { HttpResponse, http } from "msw";

const postsResolver = () => {
  return HttpResponse.json([products]);
};

const postsHandler = http.get("/api/products", postsResolver);

export const handlers = [postsHandler];
