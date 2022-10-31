import axios from "axios";

export const BASE_URL = "https://dummyjson.com/products";
// https://dummyjson.com/products?limit=100&skip=0
// export const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const api = axios.create({
  baseURL: BASE_URL,
});
