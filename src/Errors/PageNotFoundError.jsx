import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import notFoundImage from "../assets/Images/404-computer.svg";
import { Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PageNotFoundError() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar
        currentPage=""
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />
      <div className="flex justify-center min-h-screen">
        <section className="m-auto dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <LazyLoadImage
                effect="blur"
                src={notFoundImage}
                className="m-auto"
              />

              <h1 className="mb-4 text-2xl tracking-wider font-extrabold lg:text-6xl text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Whoops! That page doesn’t exist.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we can't find that page.
              </p>
              <Link to={"/"}>
                <button className="inline-flex text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                  Back to Homepage
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFoundError;
