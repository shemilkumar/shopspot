import Card from "../Components/Card";
import React from "react";
// import Clock from "./Clock";
import Countdown from "../Components/Countdown";
import { readymadeCardProducts } from "../Constants/constants";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="w-full pt-20 bg-gray-100 border-b-2 pb-20">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[90%] px-3">
            <div className="h-1/3 text-center flex flex-col">
              <h1 className="text-5xl font-bold">Products</h1>
              Offer Closes in
              <div className="mt-2 text-4xl font-medium font-poppins border-b-2 pb-5">
                <Countdown />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="grid grid-cols-3 gap-x-40 gap-y-10">
                {readymadeCardProducts.map((product, key) => (
                  <Card key={key} product={product} />
                ))}
              </div>
            </div>

            <Link to={"/products"}>
              <div className="text-center">
                <button
                  type="button"
                  className="mt-10 px-40 text-lg font-semibold font-sen uppercase text-blue-700  border-blue-700 border-2 bg-transparent hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-blue-300 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  View All Products
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
