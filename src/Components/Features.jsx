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
            <h1 className="max-w-xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-teal-50">
              Find the perfect phone or laptop for you
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Be a trendsetter with the new gadgets from your favorite brands.
              New launches,best deals and much more awaiting you. Get the latest
              and greatest in phones and laptops from our collection.
            </p>

            <div className="text-center">
              <Link to={"/products/electronics"}>
                <button
                  type="button"
                  className="py-2 px-8 text-lg font-semibold font-sen uppercase text-blue-700  border-blue-700 border-2 bg-transparent hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-transparent dark:hover:bg-transparent focus:outline-none dark:focus:ring-blue-800"
                >
                  Shop now
                </button>
              </Link>
            </div>
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

      <section className="bg-gray-100 dark:bg-gray-900 md:border-b-2 pb-16">
        <div className="grid max-w-same px-1 mx-auto lg:gap-8 xl:gap-0 lg:py-1 lg:grid-cols-12">
          <div className="w-[80%] md:w-full m-auto max-w-screen-ss lg:mt-0 lg:col-span-5 lg:flex">
            <LazyLoadImage effect="blur" src={image} alt="mockup" />
          </div>
          <div className="ml-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-teal-50">
              Find your style with our trendy fashion options
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Stock up with fresh brands curated for you Flaunt the fashionista
              in you. Find your perfect look with our wide range of fashion
              options. Stay fashionable all year round with our selection and
              shop the latest fashion trends with us.
            </p>

            <Link to={"/products/fashion"}>
              <div className="text-center">
                <button
                  type="button"
                  className="py-2 px-8 text-lg font-semibold font-sen uppercase text-blue-700  border-blue-700 border-2 bg-transparent hover:bg-white hover:text-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-transparent dark:hover:bg-transparent focus:outline-none dark:focus:ring-blue-800"
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
