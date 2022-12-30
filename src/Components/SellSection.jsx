import React from "react";
import image from "../assets/Images/sell.jpg";
import { Link } from "react-router-dom";

function SellSection() {
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative">
        <img
          src={image}
          alt="bg"
          className="w-full h-screen object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="max-w-same flex flex-col justify-center text-gray-100">
            <div className="">
              <h1 className="text-4xl md:text-8xl font-bold text-center">
                SHOPSPOT
              </h1>
            </div>

            <div className="flex justify-center ">
              <p className="md:w-1/2 mt-4 md:text-xl font-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis facilis at aperiam ab ratione corporis molestias.
                Quae eveniet totam quibusdam? Possimus, iusto nobis quo mollitia
                minima
              </p>
            </div>

            <div className="text-center">
              <Link to={"/sell"}>
                <button
                  type="button"
                  className="mt-4 cursor-pointer px-1 py-1 md:text-2xl font-semibold from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r"
                >
                  <span className="cursor-pointer block text-gray-100  md:px-16 px-10 md:py-2 py-1.5 font-semibold bg-gray-900 bg-opacity-75 uppercase hover:bg-opacity-0">
                    Sell
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellSection;
p;
