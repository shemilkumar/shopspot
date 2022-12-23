import axios from "axios";

export const BASE_URL = "https://dummyjson.com/products";
export const FULL_PRODUCT_URL =
  "https://dummyjson.com/products?limit=100&skip=0";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const apiFullProduct = axios.create({
  baseURL: FULL_PRODUCT_URL,
});

export const testimonialAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
];

export const fashionCategories = [
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
];

export const categories = [
  "Smartphones",
  "Laptops",
  "Fragrances",
  "Skincare",
  "Groceries",
  "Home-decoration",
  "Furniture",
  "Tops",
  "Womens-dresses",
  "Womens-shoes",
  "Mens-shirts",
  "Mens-shoes",
  "Mens-watches",
  "Womens-watches",
  "Womens-bags",
  "Womens-jewellery",
  "Sunglasses",
  "Automotive",
  "Motorcycle",
  "Lighting",
];

export const readymadeCardProducts = [
  {
    id: 6,
    title: "MacBook Pro",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    category: "laptops",
    images: [
      "https://i.dummyjson.com/data/products/6/1.png",
      "https://i.dummyjson.com/data/products/6/2.jpg",
      "https://i.dummyjson.com/data/products/6/3.png",
      "https://i.dummyjson.com/data/products/6/4.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    category: "smartphones",
    images: ["https://i.dummyjson.com/data/products/2/thumbnail.jpg"],
  },
  {
    id: 61,
    title: "Leather Straps Wristwatch",
    price: 120,
    discountPercentage: 7.14,
    rating: 4.63,
    category: "mens-watches",
    images: [
      "https://i.dummyjson.com/data/products/61/1.jpg",
      "https://i.dummyjson.com/data/products/61/2.png",
      "https://i.dummyjson.com/data/products/61/3.jpg",
    ],
  },
  {
    id: 72,
    title: "Handbag For Girls",
    price: 23,
    discountPercentage: 17.5,
    rating: 4.91,
    category: "womens-bags",
    images: [
      "https://i.dummyjson.com/data/products/72/1.jpg",
      "https://i.dummyjson.com/data/products/72/2.png",
      "https://i.dummyjson.com/data/products/72/3.webp",
      "https://i.dummyjson.com/data/products/72/4.jpg",
      "https://i.dummyjson.com/data/products/72/thumbnail.webp",
    ],
  },
  {
    id: 52,
    title: "FREE FIRE T Shirt",
    price: 10,
    discountPercentage: 14.72,
    rating: 4.52,
    category: "mens-shirts",
    images: [
      "https://i.dummyjson.com/data/products/52/1.png",
      "https://i.dummyjson.com/data/products/52/2.png",
      "https://i.dummyjson.com/data/products/52/3.jpg",
      "https://i.dummyjson.com/data/products/52/4.jpg",
      "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
    ],
  },
  {
    id: 58,
    title: "formal offices shoes",
    price: 57,
    discountPercentage: 12,
    rating: 4.41,
    category: "mens-shoes",
    images: [
      "https://i.dummyjson.com/data/products/58/1.jpg",
      "https://i.dummyjson.com/data/products/58/2.jpg",
      "https://i.dummyjson.com/data/products/58/3.jpg",
      "https://i.dummyjson.com/data/products/58/4.jpg",
      "https://i.dummyjson.com/data/products/58/thumbnail.jpg",
    ],
  },
];
