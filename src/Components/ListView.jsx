import React from "react";
import { Link } from "react-router-dom";
import { priceConvert } from "../Helper/priceConvert";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ListView({ product, key }) {
  return (
    <>
      <Link
        to={product.id ? `/product/${product.id}` : `/product/${index + 1000}`}
      >
        <div key={key} className="grid grid-cols-4 w-full">
          <div className="flex">
            <div className="">
              <LazyLoadImage
                effect="blur"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
          </div>

          <div className="col-start-2 col-span-2">
            <div className="flex justify-center">
              <div className="w-2/3">
                <h1 className="m-4 text-4xl font-thin">{product.title}</h1>
                <h1 className="m-4 text-md">
                  <span
                    className={`px-2 py-1 rounded-xl ${
                      product.rating
                        ? "bg-green-600 text-white"
                        : "border-orange-500 border text-orange-500 text-xs"
                    } font-semibold `}
                  >
                    {product.rating
                      ? product.rating.toFixed(1)
                      : "Second Product"}
                  </span>
                </h1>
                <p className="m-4 w-2/3">{product.description}</p>

                <div className="flex m-4">
                  <p className="mr-4 bg-gray-500 font-bold text-white rounded-xl py-1 px-2 text-sm">
                    {product.category}
                  </p>
                  <p className="mr-4 bg-gray-500 font-semibold text-white rounded-xl py-1 px-2 text-xs">
                    {product.brand}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="2">
            <p className="mt-4 ml-4 text-xl text-red-500">
              {`-${product.discountPercentage.toFixed(1)}%`}
              <span className="text-4xl text-black font-sen font-medium">
                {" "}
                {priceConvert(product.price)}
              </span>
            </p>
            <p className="mx-4 my-0 text-gray-500 text-md">
              M.R.P :{" "}
              <strike className="strike">
                {priceConvert(
                  product.price * (100 / (100 - product.discountPercentage)),
                  2
                )}
              </strike>
            </p>
            <p className="m-4 text-xs">Free delivery</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ListView;
