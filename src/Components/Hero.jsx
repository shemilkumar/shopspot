import React from "react";
import { Link } from "react-router-dom";
import { readymadeCardProducts } from "../Constants/constants";
import Card from "../Components/Card";
import Countdown from "../Components/Countdown";
// import Alert from "../Helper/Alert";

function Hero({ alertShow }) {
  return (
    <div>
      <div className="w-full pt-20 md:border-b-2 md:pb-20 pb-10">
        <div className="w-full h-full flex justify-center items-center">
          <div className="md:w-[90%] w-[95%] md:px-3 px-0">
            <div className="h-1/3 text-center flex flex-col dark:text-teal-50">
              <h1 className="text-3xl md:text-5xl font-bold">Products</h1>
              Offer Closes in
              <div className="mt-2 text-3xl md:text-4xl font-medium font-poppins border-b-2 border-gray-800 pb-5">
                <Countdown />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <div className="grid md:grid-cols-3 md:gap-x-24 sm:gap-x-16 md:gap-y-10 xs:grid-cols-2 grid-cols-1">
                {readymadeCardProducts.map((product, key) => (
                  <Card key={key} product={product} alertShow={alertShow} />
                ))}
              </div>
            </div>

            <Link to={"/products"}>
              <div className="text-center">
                <button
                  type="button"
                  className="md:mt-10 mt-10 md:px-40 px-4 md:text-lg text-sm font-semibold font-sen uppercase text-blue-700  border-blue-700 border-2 bg-transparent  hover:text-blue-700 focus:ring-4 focus:ring-blue-300 md:py-2.5 py-1.5 mr-2 mb-2 dark:bg-transparent dark:hover:text-white focus:outline-none dark:focus:ring-blue-800"
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
