import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/Images/laptop.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Banner() {
  return (
    <div>
      <div className="md:w-full w-screen h-screen relative">
        <img
          src={image}
          alt="bg"
          className="-z-10 h-1/2 object-cover absolute md:w-full w-screen md:h-screen "
        />

        <div className="w-full h-full flex justify-center items-center">
          <div className="max-w-same px-3">
            <div className="w-1/3">
              <h1 className="md:text-8xl text-3xl font-bold">SHOPSPOT</h1>
            </div>

            <p className="md:w-5/12 mt-4 md:text-xl md:font-lg text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis facilis at aperiam ab ratione corporis molestias. Quae
              eveniet totam quibusdam? Possimus, iusto nobis quo mollitia minima
            </p>

            <div className="w-1/3 text-center">
              <Link to={"/products"}>
                <button
                  type="button"
                  className="mt-10 px-10 text-xl font-semibold font-sen uppercase hover:text-white  border-blue-700 border-4 hover:bg-blue-700 bg-transparent text-blue-700 focus:ring-4 focus:ring-blue-300 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
