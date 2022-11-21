import React from "react";
import { Link } from "react-router-dom";

function Home({ fullProducts, storeCartProduct }) {
  const cartHandle = (product) => storeCartProduct(product);

  return (
    <div className="grid grid-cols-3 gap-3 content-center">
      {fullProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="relative max-w-sm rounded overflow-hidden shadow-lg"
          >
            <Link
              to={
                product.id
                  ? `/product/${product.id}`
                  : `/product/${index + 1000}`
              }
            >
              <img
                className="w-full"
                src={product.thumbnail ? product.thumbnail : product.imageUrl}
                alt={product.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.category}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.brand}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {product.price}
                </span>
              </div>
            </Link>

            <button
              onClick={() => cartHandle(product)}
              className="hover:bg-blue-700 absolute inset-x-0 bottom-0 mt-3 uppercase text-white bg-red-600 py-3 px-8 rounded-md font-poppins font-semibold text-lg"
            >
              Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
