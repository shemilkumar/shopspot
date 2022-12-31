import React from "react";
import image from "../assets/Images/laptop.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <div className="w-full md:h-screen h-[500px] relative ">
        <img
          src={image}
          alt="bg"
          className="-z-10 object-cover absolute md:w-full w-screen md:h-screen h-full"
        />

        <div className="w-full md:h-full h-full flex justify-center md:items-center items-end ">
          <div className="max-w-same px-3">
            <div className="w-1/3">
              <h1 className="md:text-8xl text-3xl font-bold">SHOPSPOT</h1>
            </div>

            <p className="md:w-5/12 mt-4 md:text-xl md:font-lg text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis facilis at aperiam ab ratione corporis molestias. Quae
              eveniet totam quibusdam? Possimus, iusto nobis quo mollitia minima
            </p>

            <div className="md:w-1/3">
              <Link to={"/products"}>
                <button
                  type="button"
                  className="md:mt-10 mt-4 px-2 py-1.5 md:px-10 md:text-xl text-md font-semibold font-sen uppercase hover:text-white  border-blue-700 border-2 md:border-4 hover:bg-blue-700 bg-transparent text-blue-700 focus:ring-4 focus:ring-blue-300 md:py-2.5 mb-2 dark:bg-transparent dark:hover:bg-blue-gradient focus:outline-none dark:focus:ring-blue-800"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
