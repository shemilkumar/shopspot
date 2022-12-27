import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/Images/laptop.jpg";

import "react-toastify/dist/ReactToastify.css";

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
                  className="md:mt-10 mt-4 px-2 py-1.5 md:px-10 md:text-xl text-md font-semibold font-sen uppercase hover:text-white  border-blue-700 border-2 md:border-4 hover:bg-blue-700 bg-transparent text-blue-700 focus:ring-4 focus:ring-blue-300 md:py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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

{
  /* <div className="flex justify-center">
  <div className="pt-80 h-screen max-w-same flex">
    <div className="align-middle">
      <h1 className="text-8xl font-bold text-black">
        SHOP<span className="text-blue-700">SPOT</span>
      </h1>
      <p className="mt-10 max-w-xl text-xl font-lg text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorum
        perspiciatis ab? Repellat maiores consequatur illo sint ipsum dolores
        labore!
      </p>
      <button
        type="button"
        className="mt-10 p-8 pl-12 pr-12 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Default
      </button>
    </div>
  </div>
</div>; */
}
