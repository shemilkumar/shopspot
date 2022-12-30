import React from "react";
import image from "../assets/Images/cosmetics_features.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Features() {
  return (
    <div>
      <section className="pb-16 md:pb-0 pt-10 bg-gray-100 dark:bg-gray-900">
        <div className="md:grid flex flex-col max-w-same  px-1 mx-auto lg:gap-8 xl:gap-0 lg:py-1 lg:grid-cols-12">
          <div className="order-last md:order-first mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>

            <Link to={"/products/electronics"}>
              <div className="text-center">
                <button
                  type="button"
                  className="py-2 px-8 text-lg font-semibold font-sen uppercase text-blue-700  border-blue-700 border-2 bg-transparent hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Shop now
                </button>
              </div>
            </Link>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <LazyLoadImage
              effect="blur"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 border-b-2 pb-16">
        <div className="grid max-w-same px-1 mx-auto lg:gap-8 xl:gap-0 lg:py-1 lg:grid-cols-12">
          <div className="w-[80%] md:w-full m-auto max-w-screen-ss lg:mt-0 lg:col-span-5 lg:flex">
            <LazyLoadImage effect="blur" src={image} alt="mockup" />
          </div>
          <div className="ml-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>

            <Link to={"/products/fashion"}>
              <div className="text-center">
                <button
                  type="button"
                  className="py-2 px-8 text-lg font-semibold font-sen uppercase text-blue-700  border-blue-700 border-2 bg-transparent hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Shop now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
