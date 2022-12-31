import React, { useState, useEffect } from "react";
import firebaseStorage from "../../Firebase/FirebaseStorageService";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../Constants/constants";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ImageUpload from "../../Components/ImageUpload";
import ShortUniqueId from "short-unique-id";

function SellPage({ setSellProduct }) {
  const uud = new ShortUniqueId({ length: 6, dictionary: "alpha" });
  const uudId = uud();
  let id;

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ discountPercentage: 25 });
  const thumbnailUrl = useSelector((state) => state.user.thumbnail);
  const images = useSelector((state) => state.user.images);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePrice = (e) => {
    const name = e.target.name;
    const price = (+e.target.value / 82) * 0.75;

    setInputs((prev) => {
      return { ...prev, [name]: price };
    });
  };

  const handleImage = (images) => {
    id = uudId;
    setInputs((prev) => {
      return { ...prev, id };
    });
    dispatch(firebaseStorage.uploadThumbnail(images[0], `images/ProductPics/`));
    dispatch(
      firebaseStorage.uploadSellProductImages(
        images,
        `images/ProductPics/${id}`
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSellProduct(inputs);
  };

  useEffect(() => {
    if (images && thumbnailUrl) {
      setInputs((prev) => {
        return {
          ...prev,
          thumbnail: thumbnailUrl,
          images,
        };
      });
    }
  }, [images, thumbnailUrl]);

  return (
    <>
      <Navbar
        currentPage="Sell"
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />

      <div className="max-w-6xl min-h-screen m-auto p-4 dark:text-teal-50">
        <h1 className="text-3xl font-semibold tracking-wider text-center mt-24">
          Sell your Product
        </h1>
        <div className="mt-6">
          <div className="grid gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Enter your Product details
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-teal-50">
                  75% of your product price will be your final price
                </p>
              </div>
            </div>

            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6 dark:bg-gray-900">
                    <h3 className="text-md mb-6 font-medium leading-6 text-gray-900 dark:text-teal-50">
                      <span className="mb-2 border-b-2 border-gray-200">
                        Include basic details
                      </span>
                    </h3>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700 dark:text-teal-50"
                        >
                          Product name
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          autoComplete="given-name"
                          className="mt-1 block w-full p-3 border rounded-md  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="brand"
                          className="block text-sm font-medium text-gray-700 dark:text-teal-50"
                        >
                          Brand
                        </label>
                        <input
                          type="text"
                          name="brand"
                          id="brand"
                          autoComplete="family-name"
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                          onChange={handleInput}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium text-gray-700 dark:text-teal-50"
                        >
                          Category
                        </label>
                        <select
                          id="category"
                          name="category"
                          autoComplete="category-name"
                          className="max-h-1/2 mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                          onChange={handleInput}
                        >
                          <option className=""></option>

                          {categories.map((category, i) => {
                            return (
                              <option key={i} className="">
                                {category}
                              </option>
                            );
                          })}
                          <option className="">Other</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-teal-50"
                        >
                          Product Description
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-teal-50 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Write your description here..."
                          name="description"
                          onChange={handleInput}
                        ></textarea>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="phone-no"
                          className="block text-sm font-medium text-gray-700 dark:text-teal-50"
                        >
                          Contact Information
                        </label>
                        <input
                          type="tel"
                          name="phoneNo"
                          id="phone-no"
                          autoComplete="mobile"
                          placeholder="Phone number..."
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                          onChange={handleInput}
                        />
                      </div>

                      <h3 className="mt-10 col-span-6 text-md font-medium leading-6 text-gray-900 dark:text-teal-50">
                        <span className="mb-2 border-b-2 border-gray-200">
                          Set a Price
                        </span>
                      </h3>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700 dark:text-teal-50"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          autoComplete="price"
                          className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600"
                          onChange={handlePrice}
                        />
                      </div>

                      <h3 className="mt-8 col-span-6 text-md font-medium leading-6 text-gray-900 dark:text-teal-50">
                        <span className="mb-2 border-b-2 border-gray-200">
                          Upload Product Images
                        </span>
                      </h3>

                      <div className="mt-2 col-span-6">
                        <ImageUpload handleImage={handleImage} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 dark:bg-gray-900 ">
                    <button
                      type="submit"
                      className="md:inline-flex block w-full justify-center rounded-sm border border-transparent py-1 px-6 text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-blue-700 bg-gradient-to-tr from-purple-700 to-cyan-400"
                      onClick={handleSubmit}
                      disabled={images.length === 0}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SellPage;
